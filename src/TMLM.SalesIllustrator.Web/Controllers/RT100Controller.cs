using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Serilog;
using System.Net;
using System.Security.Claims;
using TMLM.SalesIllustrator.Shared.Common;
using TMLM.SalesIllustrator.Shared.Crypto;
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

        [Route("RT100/Create/{authToken}")]
        public async Task<IActionResult> Create([FromRoute] string authToken)
        {
            try
            {
                HttpClient client = new();
                var claims = new List<Claim>();

                #region Check if this auth token got use b4
                var cookie = HttpContext.GetAuthTokenWithoutException();

                if (cookie == null || cookie != authToken)
                {
                    var tokenValidity = await ValidateToken(authToken);

                    if (!tokenValidity)
                        return Unauthorized("Token has been used");
                }
                #endregion

                var id = await client.GetAsJson<string>($"{Constant.ApiUrl}/api/RhbTreasure100/Create", authToken);
                var hashedId = AspRijndael.EncryptData(id, "TMLM");

                claims.Add(new Claim("Token", authToken));
                var claimsIdentity = new ClaimsIdentity(claims, "cookies");

                CookieOptions cookieOptions = new();
                cookieOptions.Secure = true;

                Response.Cookies.Delete(Constant.RhbTreasure100Cookie);
                Response.Cookies.Append(Constant.RhbTreasure100Cookie, hashedId, cookieOptions);

                await HttpContext.SignInAsync("cookies", new ClaimsPrincipal(claimsIdentity));
                return Ok();
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

            if (resp.IsSuccessStatusCode)
                return Ok("Success");
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
