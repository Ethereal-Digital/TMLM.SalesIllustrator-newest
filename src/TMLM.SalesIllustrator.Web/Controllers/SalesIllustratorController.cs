using Microsoft.AspNetCore.Mvc;
using Serilog;
using System;
using System.Net;
using System.Security.Claims;
using System.Text.RegularExpressions;
using TMLM.SalesIllustrator.Shared.Common;
using TMLM.SalesIllustrator.Shared.Models.SalesIllustrator;

namespace TMLM.SalesIllustrator.Web.Controllers
{
    public class SalesIllustratorController : Controller
    {
        public async Task<IActionResult> Index([FromQuery] string id)
        {
            var result = await ValidateToken(id);
            if (result)
                return View();
            return Redirect($"{Constant.WebUrl}/error");
        }

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

        public async Task<IActionResult> GenerateNewToken([FromQuery] string id)
        {
            if (string.IsNullOrEmpty(id))
                return BadRequest();

            HttpClient client = new();
            var result = await client.GetAsJson($"{Constant.ApiUrl}/api/UserSession/Recreate/{id}", null);
            return Ok(result);
        }

        [Route("SalesIllustrator/GetDropDownOccupation/{authToken}")]
        public async Task<IActionResult> GetDropDownOccupation([FromRoute] string authToken)
        {
            try
            {
                HttpClient client = new();

                var cookie = HttpContext.GetAuthTokenWithoutException();

                if (cookie == null || cookie != authToken)
                {
                    var tokenValidity = await ValidateToken(authToken);

                    if (!tokenValidity)
                        return Unauthorized("Token has been used");
                }

                var result = await client.GetAsJson($"{Constant.ApiUrl}/api/UserSession/GetDropDownOccupation", authToken);

                return Ok(result);
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

        [Route("SalesIllustrator/GetDropDownNature/{authToken}")]
        public async Task<IActionResult> GetDropDownNature([FromRoute] string authToken)
        {
            try
            {
                HttpClient client = new();

                var cookie = HttpContext.GetAuthTokenWithoutException();

                if (cookie == null || cookie != authToken)
                {
                    var tokenValidity = await ValidateToken(authToken);

                    if (!tokenValidity)
                        return Unauthorized("Token has been used");
                }

                var result = await client.GetAsJson($"{Constant.ApiUrl}/api/UserSession/GetDropDownNature", authToken);

                return Ok(result);
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
        public async Task<IActionResult> UpdatePurposeSales([FromBody] UpdateProcessSiInputModel purpose)
        {
            HttpClient client = new();
            //var authToken = HttpContext.GetAuthToken();
            var urlEncode = System.Web.HttpUtility.UrlEncode(purpose.Process);
            await client.GetAsJson<string>($"{Constant.ApiUrl}/api/UserSession/UpdateSessionPurpose?purpose={urlEncode}", purpose.Id);

            return Ok("Success");
        }

        [HttpGet]
        public async Task<IActionResult> GetOccupationCode(string code, string IndustryCode, string authToken)
        {
            try
            {
                HttpClient client = new();

                var cookie = HttpContext.GetAuthTokenWithoutException();

                if (cookie == null || cookie != authToken)
                {
                    var tokenValidity = await ValidateToken(authToken);

                    if (!tokenValidity)
                        return Unauthorized("Token has been used");
                }

                var result = await client.GetAsJson($"{Constant.ApiUrl}/api/UserSession/GetOccupationCode?occupations={code}&natures={IndustryCode}", authToken);

                return Ok(result);
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

        [HttpGet]
        public async Task<IActionResult> GetUserDetails(string authToken)
        {
            try
            {
                HttpClient client = new();

                var cookie = HttpContext.GetAuthTokenWithoutException();

                if (cookie == null || cookie != authToken)
                {
                    var tokenValidity = await ValidateToken(authToken);

                    if (!tokenValidity)
                        return Unauthorized("Token has been used");
                }

                var result = await client.GetAsJson($"{Constant.ApiUrl}/api/UserSession/GetUserDetails", authToken);

                return Ok(result);
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
    }
}
