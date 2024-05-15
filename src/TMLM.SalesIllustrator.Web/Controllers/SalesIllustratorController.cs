using Microsoft.AspNetCore.Mvc;
using TMLM.SalesIllustrator.Shared.Common;

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
    }
}
