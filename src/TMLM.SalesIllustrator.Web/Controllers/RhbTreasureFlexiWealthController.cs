using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Serilog;
using System.Net;
using System.Security.Claims;
using TMLM.SalesIllustrator.Shared.Common;
using TMLM.SalesIllustrator.Shared.Crypto;
using TMLM.SalesIllustrator.Shared.Models.FlexiWealth;
using TMLM.SalesIllustrator.Shared.Models.SalesIllustrator;

namespace TMLM.SalesIllustrator.Web.Controllers
{
    public class RhbTreasureFlexiWealthController : Controller
    {
        //public async Task<IActionResult> Validate()
        //{

        //    //try
        //    //{
        //    //    await Create(id);
        //    //    return Redirect($"{Constant.WebUrl}/RhbTreasureFlexiWealth");
        //    //}
        //    //catch (UnauthorizedAccessException ex)
        //    //{
        //    //    Log.Error($"Unauthorized Access: {ex.ToString()}");

        //    //    return Redirect($"{Constant.WebUrl}/error");
        //    //}
        //    //catch (Exception ex)
        //    //{
        //    //    Log.Error($"Unexpected Exception: {ex.ToString()}");

        //    //    return Redirect($"{Constant.WebUrl}/error");
        //    //}
        //}

        public async Task<IActionResult> Index() => View();

        private async Task<bool> ValidateToken(string authToken)
        {
            HttpClient client = new();
            try
            {
                await client.GetAsJson($"{Constant.ApiUrl}/api/UserSession/ValidateToken", authToken);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        //[Route("RhbTreasureFlexiWealth/Create/{authToken}")]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] object model)
        {
            try
            {
                var temp = JsonConvert.DeserializeObject<CreateFWnputModel>(model.ToString());

                HttpClient client = new();
                var claims = new List<Claim>();

                #region Check if this auth token got use b4
                var cookie = HttpContext.GetAuthTokenWithoutException();

                if (cookie == null || cookie != temp.Id)
                {
                    var tokenValidity = await ValidateToken(temp.Id);

                    if(!tokenValidity)
                        return Unauthorized("Token has been used");
                }
                #endregion

                var id = await client.PostAsJson($"{Constant.ApiUrl}/api/RhbTreasureFlexiWealth/Create", temp, temp.Id);
                string result = await id.Content.ReadAsStringAsync();

                var hashedId = AspRijndael.EncryptData(result, "TMLM");


                claims.Add(new Claim("Token", temp.Id));
                var claimsIdentity = new ClaimsIdentity(claims, "cookies");

                CookieOptions cookieOptions = new();
                cookieOptions.Secure = true;

                Response.Cookies.Delete(Constant.RhbTreasureCookie);
                Response.Cookies.Append(Constant.RhbTreasureCookie, hashedId, cookieOptions);
                
                await HttpContext.SignInAsync("cookies", new ClaimsPrincipal(claimsIdentity));

                return Ok("Success");
            }
            catch(UnauthorizedAccessException ex)
            {
                Log.Error($"Unauthorized Expection: {ex.ToString()}");
                return Unauthorized(ex.Message);
            }
            catch(Exception ex)
            {
                Log.Error($"Unexpected Expection: {ex.ToString()}");
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Update([FromBody] UpdateFWnputModel model)
        {
            HttpClient client = new();
            var authToken = HttpContext.GetAuthToken();
            model.Id = HttpContext.GetTokenValue(Constant.RhbTreasureCookie);
            var resp = await client.PostAsJson($"{Constant.ApiUrl}/api/RhbTreasureFlexiWealth/goUpdate", model, authToken);
            string result = await resp.Content.ReadAsStringAsync();

            if (resp.IsSuccessStatusCode)
                return Ok(result);
            else if (resp.StatusCode == HttpStatusCode.Unauthorized)
                return Unauthorized();
            else
                return BadRequest();
        }

        [HttpPost]
        public async Task<IActionResult> UpdateProcess([FromBody] UpdateProcessSiInputModel model)
        {
            HttpClient client = new();
            var authToken = HttpContext.GetAuthToken();
            model.Id = HttpContext.GetTokenValue(Constant.RhbTreasureCookie);
            var resp = await client.PostAsJson($"{Constant.ApiUrl}/api/RhbTreasureFlexiWealth/goUpdateProcess", model, authToken);

            if (resp.IsSuccessStatusCode)
                return Ok();
            else if (resp.StatusCode == HttpStatusCode.Unauthorized)
                return Unauthorized();
            else
                return BadRequest();
        }

        [HttpGet]
        public async Task<IActionResult> UpdatePurpose()
        {
            HttpClient client = new();
            var authToken = HttpContext.GetAuthToken();
            await client.GetAsJson<string>($"{Constant.ApiUrl}/api/UserSession/UpdateSessionPurpose?purpose=RHB%20Treasure%20FlexiWealth", authToken);

            return Ok();
        }
    }
}
