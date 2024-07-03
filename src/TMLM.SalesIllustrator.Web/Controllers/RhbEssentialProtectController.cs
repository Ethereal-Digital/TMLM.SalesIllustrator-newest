using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Serilog;
using System.Net;
using System.Security.Claims;
using TMLM.SalesIllustrator.Shared.Common;
using TMLM.SalesIllustrator.Shared.Crypto;
using TMLM.SalesIllustrator.Shared.Models.REP;

namespace TMLM.SalesIllustrator.Web.Controllers
{
    public class RhbEssentialProtectController : Controller
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

        //[Route("RhbEssentialProtect/Create/{authToken}")]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] object model)
        {
            try
            {
                var createModel = JsonConvert.DeserializeObject<CreateREPInputModel>(model.ToString());

                HttpClient client = new();
                var claims = new List<Claim>();

                #region Check if this auth token got use b4
                var cookie = HttpContext.GetAuthTokenWithoutException();

                if (cookie == null || cookie != createModel.Id)
                {
                    var tokenValidity = await ValidateToken(createModel.Id);

                    if (!tokenValidity)
                        return Unauthorized("Token has been used");
                }
                #endregion

                var id = await client.PostAsJson($"{Constant.ApiUrl}/api/RhbEssentialProtect/Create", createModel, createModel.Id);
                string result = await id.Content.ReadAsStringAsync();
                var hashedId = AspRijndael.EncryptData(result, "TMLM");

                claims.Add(new Claim("Token", createModel.Id));
                var claimsIdentity = new ClaimsIdentity(claims, "cookies");
                HttpContext.User.AddIdentity(claimsIdentity);
                CookieOptions cookieOptions = new();
                cookieOptions.Secure = true;

                Response.Cookies.Delete(Constant.RhbEssentialProtectCookie);
                Response.Cookies.Append(Constant.RhbEssentialProtectCookie, hashedId, cookieOptions);

                var authProperties = new AuthenticationProperties
                {
                    IssuedUtc = DateTimeOffset.UtcNow,
                    ExpiresUtc = DateTimeOffset.UtcNow.AddHours(2),
                    IsPersistent = false
                };

                await HttpContext.SignInAsync("cookies", new ClaimsPrincipal(claimsIdentity), authProperties);
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
        public async Task<IActionResult> Update([FromBody] UpdateREPInputModel model)
        {
            HttpClient client = new();
            var authToken = HttpContext.GetAuthToken();
            model.Id = HttpContext.GetTokenValue(Constant.RhbEssentialProtectCookie);
            var resp = await client.PostAsJson($"{Constant.ApiUrl}/api/RhbEssentialProtect/toUpdate", model, authToken);
            string result = await resp.Content.ReadAsStringAsync();

            if (resp.IsSuccessStatusCode)
                return Ok(result);
            else if (resp.StatusCode == HttpStatusCode.Unauthorized)
                return Unauthorized();
            else
                return BadRequest();
        }

        [HttpPost]
        public async Task<IActionResult> UpdateProcess([FromBody] UpdateProcessREPInputModel model)
        {
            HttpClient client = new();
            var authToken = HttpContext.GetAuthToken();
            model.Id = int.Parse(HttpContext.GetTokenValue(Constant.RhbEssentialProtectCookie));
            var resp = await client.PostAsJson($"{Constant.ApiUrl}/api/RhbEssentialProtect/toUpdateProcess", model, authToken);

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
            await client.GetAsJson<string>($"{Constant.ApiUrl}/api/UserSession/UpdateSessionPurpose?purpose=Rhb%20Essential%20Protect", authToken);

            return Ok();
        }
    }
}
