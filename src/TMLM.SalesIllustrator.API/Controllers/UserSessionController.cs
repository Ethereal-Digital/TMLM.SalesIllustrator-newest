using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Serilog;
using TMLM.SalesIllustrator.API.Services.Abstractions;
using TMLM.SalesIllustrator.Shared.Models.SalesIllustrator;
using TMLM.SalesIllustrator.Shared.Models.UserSession;

namespace TMLM.SalesIllustrator.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserSessionController : ControllerBase
    {
        private readonly IUserSessionService service;

        public UserSessionController(IUserSessionService _service)
        {
            this.service = _service;
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateUserSessionInputModel model)
        {
            try
            {
                var resp = await service.Create(model, null);

                if (resp == "BadRequest")
                    return BadRequest();
                else if (resp == "Unauthorized")
                    return Unauthorized();
                else if (resp == "NoContent")
                    return NoContent();

                return Ok($"{Constant.WebUrl}/SalesIllustrator?id={resp}");
            }
            catch (Exception ex)
            {
                Log.Error($"UserSessionController Create: {ex}");
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> Recreate([FromRoute] string id)
        {
            try
            {
                var resp = await service.Recreate(id);

                if (resp == "BadRequest")
                    return BadRequest();
                else if (resp == "Unauthorized")
                    return Unauthorized();
                else if (resp == "NoContent")
                    return NoContent();

                return Ok($"{Constant.WebUrl}/SalesIllustrator?id={resp}");
            }
            catch (Exception ex)
            {
                Log.Error($"UserSessionController Recreate: {ex}");
                return BadRequest();
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateFactFind(CreateUserSessionInputModel model)
        {
            try
            {
                var resp = await service.Create(model, "Fact Find");

                if (resp == "BadRequest")
                    return BadRequest();
                else if (resp == "Unauthorized")
                    return Unauthorized();
                else if (resp == "NoContent")
                    return NoContent();

                return Ok($"{Constant.WebUrl}/FactFind?id={resp}");
            }
            catch (Exception ex)
            {
                Log.Error($"UserSessionController CreateFactFind: {ex}");
                return BadRequest();
            }
        }

        [HttpGet]
        public async Task<IActionResult> UpdateSessionPurpose(string purpose)
        {
            try
            {
                var authToken = Request.Headers["Auth"];
                await service.UpdateSessionPurpose(authToken, purpose);

                return Ok();
            }
            catch (Exception ex)
            {
                Log.Error($"UserSessionController UpdateSessionPurpose: {ex}");
                return BadRequest();
            }
        }

        [HttpGet]
        public async Task<IActionResult> ValidateToken()
        {
            try
            {
                var authToken = Request.Headers["Auth"];
                await service.ValidateToken(authToken);
                return Ok();
            }
            catch (Exception ex)
            {
                Log.Error($"UserSessionController ValidateToken: {ex}");
                return BadRequest();
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetDropDownOccupation()
        {
            try
            {
                var authToken = Request.Headers["Auth"];
                var resp = await service.GetDropDownOccupation();
                return Ok(resp);

            }
            catch (UnauthorizedAccessException ex)
            {
                Log.Error($"UserSessionController Unauthorized Get: {ex}");
                return Unauthorized(ex.Message);
            }
            catch (Exception ex)
            {
                Log.Error($"UserSessionController Get: {ex}");
                return BadRequest();
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetDropDownNature()
        {
            try
            {
                var authToken = Request.Headers["Auth"];
                var resp = await service.GetDropDownNature();
                return Ok(resp);

            }
            catch (UnauthorizedAccessException ex)
            {
                Log.Error($"UserSessionController Unauthorized Get: {ex}");
                return Unauthorized(ex.Message);
            }
            catch (Exception ex)
            {
                Log.Error($"UserSessionController Get: {ex}");
                return BadRequest();
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetOccupationCode(string occupations, string natures)
        {
            try
            {
                var authToken = Request.Headers["Auth"];
                var resp = await service.GetOccupationCode(occupations, natures);
                //var resp = await service.GetDropDownNature();
                return Ok(resp);

            }
            catch (UnauthorizedAccessException ex)
            {
                Log.Error($"UserSessionController Unauthorized Get: {ex}");
                return Unauthorized(ex.Message);
            }
            catch (Exception ex)
            {
                Log.Error($"UserSessionController Get: {ex}");
                return BadRequest();
            }
        }
    }
}
