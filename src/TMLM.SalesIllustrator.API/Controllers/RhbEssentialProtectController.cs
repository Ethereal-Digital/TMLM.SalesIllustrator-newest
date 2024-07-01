using Microsoft.AspNetCore.Mvc;
using Serilog;
using TMLM.SalesIllustrator.API.Services.Abstractions;
using TMLM.SalesIllustrator.Shared.Models.REP;

namespace TMLM.SalesIllustrator.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class RhbEssentialProtectController : ControllerBase
    {
        private readonly IRhbEssentialProtectService service;
        public RhbEssentialProtectController(IRhbEssentialProtectService _service)
        {
            this.service = _service;
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateREPInputModel model)
        {
            try
            {
                var authToken = Request.Headers["Auth"];
                var resp = await service.Create(model);
                return Ok(resp);

            }
            catch (UnauthorizedAccessException ex)
            {
                Log.Error($"REPController Unauthorized Create: {ex}");
                return Unauthorized(ex.Message);
            }
            catch (Exception ex)
            {
                Log.Error($"REPController Create: {ex}");
                return BadRequest();
            }
        }

        [HttpPost]
        public async Task<IActionResult> toUpdate(UpdateREPInputModel model)
        {
            try
            {
                var resp = await service.Update(model);
                return Ok(resp);
            }
            catch (Exception ex)
            {
                Log.Error($"REPController Update: {ex}");
                return BadRequest();
            }
        }

        [HttpPost]
        public async Task<IActionResult> toUpdateProcess(UpdateProcessREPInputModel model)
        {
            try
            {
                await service.UpdateProcess(model);
                return Ok();

            }
            catch (Exception ex)
            {
                Log.Error($"REPController UpdateProcess: {ex}");
                return BadRequest();
            }
        }
    }
}
