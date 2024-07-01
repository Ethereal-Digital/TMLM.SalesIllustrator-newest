using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Serilog;
using TMLM.SalesIllustrator.API.Services.Abstractions;
using TMLM.SalesIllustrator.Shared.Models.SalesIllustrator;

namespace TMLM.SalesIllustrator.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class RhbTreasureSupremeController : ControllerBase
    {
        private readonly IRhbTreasureSupremeService service;

        public RhbTreasureSupremeController(IRhbTreasureSupremeService _service)
        {
            this.service = _service;
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateSupremeInputModel model)
        {
            try
            {
                var authToken = Request.Headers["Auth"];
                var resp = await service.Create(model);
                return Ok(resp);
                 
            }
            catch(UnauthorizedAccessException ex)
            {
                Log.Error($"RhbTreasureSupremeController Unauthorized Create: {ex}");
                return Unauthorized(ex.Message);
            }
            catch (Exception ex)
            {
                Log.Error($"RhbTreasureSupremeController Create: {ex}");
                return BadRequest();
            }
        }

        [HttpPost]
        public async Task<IActionResult> Update(UpdateSupremeInputModel model)
        {
            try
            {
                var resp = await service.Update(model);
                return Ok(resp);
            }
            catch (Exception ex)
            {
                Log.Error($"RhbTreasureSupremeController Update: {ex}");
                return BadRequest();
            }
        }

        [HttpPost]
        public async Task<IActionResult> UpdateProcess(UpdateProcessSiInputModel model)
        {
            try
            {
                await service.UpdateProcess(model);
                return Ok();

            }
            catch (Exception ex)
            {
                Log.Error($"RhbTreasureSupremeController UpdateProcess: {ex}");
                return BadRequest();
            }
        }
    }
}
