using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Serilog;
using TMLM.SalesIllustrator.API.Services.Abstractions;
using TMLM.SalesIllustrator.Shared.Models.FlexiWealth;
using TMLM.SalesIllustrator.Shared.Models.SalesIllustrator;

namespace TMLM.SalesIllustrator.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class RhbTreasureFlexiWealthController : ControllerBase
    {
        private readonly IRhbTreasureFlexiWealthService service;

        public RhbTreasureFlexiWealthController(IRhbTreasureFlexiWealthService _service)
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
            catch(UnauthorizedAccessException ex)
            {
                Log.Error($"RhbTreasureFlexiWealthController Unauthorized Create: {ex}");
                return Unauthorized(ex.Message);
            }
            catch (Exception ex)
            {
                Log.Error($"RhbTreasureFlexiWealthController Create: {ex}");
                return BadRequest();
            }
        }

        [HttpPost]
        public async Task<IActionResult> goUpdate(UpdateFWnputModel model)
        {
            try
            {
                await service.Update(model);
                return Ok();
            }
            catch (Exception ex)
            {
                Log.Error($"RhbTreasureFlexiWealthController Update: {ex}");
                return BadRequest();
            }
        }

        [HttpPost]
        public async Task<IActionResult> goUpdateProcess(UpdateProcessSiInputModel model)
        {
            try
            {
                await service.UpdateProcess(model);
                return Ok();

            }
            catch (Exception ex)
            {
                Log.Error($"RhbTreasureFlexiWealthController UpdateProcess: {ex}");
                return BadRequest();
            }
        }
    }
}
