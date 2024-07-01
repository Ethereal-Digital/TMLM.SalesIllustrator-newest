using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Serilog;
using System.Net;
using System.Reflection;
using System.Security.Claims;
using TMLM.SalesIllustrator.Shared.Common;
using TMLM.SalesIllustrator.Shared.Crypto;
using TMLM.SalesIllustrator.Shared.Models.FlexiWealth;
using TMLM.SalesIllustrator.Shared.Models.RT100;

namespace TMLM.SalesIllustrator.Web.Controllers
{
    public class RT100Controller : Controller
    {
        public IActionResult Index() => View();

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

        //[Route("RT100/Create/{authToken}")]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] object model)
        {
            try
            {
                var userModel = JsonConvert.DeserializeObject<CreateFWnputModel>(model.ToString());

                HttpClient client = new();
                var claims = new List<Claim>();

                #region Check if this auth token got use b4
                var cookie = HttpContext.GetAuthTokenWithoutException();

                if (cookie == null || cookie != userModel.Id)
                {
                    var tokenValidity = await ValidateToken(userModel.Id);

                    if (!tokenValidity)
                        return Unauthorized("Token has been used");
                }
                #endregion

                var id = await client.PostAsJson($"{Constant.ApiUrl}/api/RhbTreasure100/Create", userModel, userModel.Id);
                string result = await id.Content.ReadAsStringAsync();
                var hashedId = AspRijndael.EncryptData(result, "TMLM");

                claims.Add(new Claim("Token", userModel.Id));
                var claimsIdentity = new ClaimsIdentity(claims, "cookies");

                CookieOptions cookieOptions = new();
                cookieOptions.Secure = true;

                Response.Cookies.Delete(Constant.RhbTreasure100Cookie);
                Response.Cookies.Append(Constant.RhbTreasure100Cookie, hashedId, cookieOptions);

                await HttpContext.SignInAsync("cookies", new ClaimsPrincipal(claimsIdentity));
                return Ok("Success");
            }
            catch (UnauthorizedAccessException ex)
            {
                Log.Error($"Unauthorized Expection: {ex.ToString()}");
                return Unauthorized(ex.Message);
            }
            catch (Exception ex)
            {
                Log.Error($"Unexpected Expection: {ex.ToString()}");
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Update([FromBody] UpdateRT100InputModel model)
        {
            HttpClient client = new();
            var authToken = HttpContext.GetAuthToken();
            model.Id = int.Parse(HttpContext.GetTokenValue(Constant.RhbTreasure100Cookie));
            var resp = await client.PostAsJson($"{Constant.ApiUrl}/api/RhbTreasure100/Update", model, authToken);
            string result = await resp.Content.ReadAsStringAsync();

            if (resp.IsSuccessStatusCode)
                return Ok(result);
            else if (resp.StatusCode == HttpStatusCode.Unauthorized)
                return Unauthorized();
            else
                return BadRequest();
        }

        [HttpPost]
        public async Task<IActionResult> UpdateProcess([FromBody] UpdateProcessRT100InputModel model)
        {
            HttpClient client = new();
            var authToken = HttpContext.GetAuthToken();
            model.Id = int.Parse(HttpContext.GetTokenValue(Constant.RhbTreasure100Cookie));
            var resp = await client.PostAsJson($"{Constant.ApiUrl}/api/RhbTreasure100/UpdateProcess", model, authToken);

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
            await client.GetAsJson<string>($"{Constant.ApiUrl}/api/UserSession/UpdateSessionPurpose?purpose=RT100", authToken);

            return Ok();
        }
    }
}
