using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Serilog;
using TMLM.SalesIllustrator.API.Services.Abstractions;
using TMLM.SalesIllustrator.Shared.Models.SalesIllustrator;

namespace TMLM.SalesIllustrator.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class RhbTreasureBuilderController : ControllerBase
    {
        private readonly IRhbTreasureBuilderService service;

        public RhbTreasureBuilderController(IRhbTreasureBuilderService _service)
        {
            this.service = _service;
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateUserSiInputModel model)
        {
            try
            {
                var authToken = Request.Headers["Auth"];
                var resp = await service.Create(model);
                return Ok(resp);
                 
            }
            catch(UnauthorizedAccessException ex)
            {
                Log.Error($"RhbTreasureBuilderController Unauthorized Create: {ex}");
                return Unauthorized(ex.Message);
            }
            catch (Exception ex)
            {
                Log.Error($"RhbTreasureBuilderController Create: {ex}");
                return BadRequest();
            }
        }

        [HttpPost]
        public async Task<IActionResult> Update(UpdateUserSiInputModel model)
        {
            try
            {
                var resp = await service.Update(model);
                return Ok(resp);
            }
            catch (Exception ex)
            {
                Log.Error($"RhbTreasureBuilderController Update: {ex}");
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
                Log.Error($"RhbTreasureBuilderController UpdateProcess: {ex}");
                return BadRequest();
            }
        }
    }
}
