using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Serilog;
using TMLM.SalesIllustrator.API.Services.Abstractions;
using TMLM.SalesIllustrator.Shared.Models.FactFind;

namespace TMLM.SalesIllustrator.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class FactFindController : ControllerBase
    {
        private readonly IFactFindService service;

        public FactFindController(IFactFindService _service)
        {
            this.service = _service;
        }

        [HttpGet]
        public async Task<IActionResult> Create()
        {
            try
            {
                var authToken = Request.Headers["Auth"];
                var resp = await service.Create(authToken);
                return Ok(resp);

            }
            catch (UnauthorizedAccessException ex)
            {
                Log.Error($"FactFindController Unauthorized Create: {ex}");
                return Unauthorized(ex.Message);
            }
            catch (Exception ex)
            {
                Log.Error($"FactFindController Create: {ex}");
                return BadRequest();
            }
        }

        [HttpPost]
        public async Task<IActionResult> Update(UpdateFactFindInputModel model)
        {
            try
            {
                await service.Update(model);
                return Ok();
            }
            catch (Exception ex)
            {
                Log.Error($"FactFindController Update: {ex}");
                return BadRequest();
            }
        }

        [HttpPost]
        public async Task<IActionResult> UpdateProcess(UpdateProcessFactFindInputModel model)
        {
            try
            {
                await service.UpdateProcess(model);
                return Ok();

            }
            catch (Exception ex)
            {
                Log.Error($"FactFindController UpdateProcess: {ex}");
                return BadRequest();
            }
        }
    }
}
