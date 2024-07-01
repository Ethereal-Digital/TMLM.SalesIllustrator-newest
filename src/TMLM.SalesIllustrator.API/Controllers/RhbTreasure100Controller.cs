using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Serilog;
using TMLM.SalesIllustrator.API.Services.Abstractions;
using TMLM.SalesIllustrator.Shared.Models.RT100;

namespace TMLM.SalesIllustrator.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class RhbTreasure100Controller : ControllerBase
    {
        private readonly IRT100Service service;

        public RhbTreasure100Controller(IRT100Service _service)
        {
            this.service = _service;
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateRT100InputModel model)
        {
            try
            {
                var authToken = Request.Headers["Auth"];
                var resp = await service.Create(model);
                return Ok(resp);

            }
            catch (UnauthorizedAccessException ex)
            {
                Log.Error($"RT100Controller Unauthorized Create: {ex}");
                return Unauthorized(ex.Message);
            }
            catch (Exception ex)
            {
                Log.Error($"RT100Controller Create: {ex}");
                return BadRequest();
            }
        }

        [HttpPost]
        public async Task<IActionResult> Update(UpdateRT100InputModel model)
        {
            try
            {
                var resp = await service.Update(model);
                return Ok(resp);
            }
            catch (Exception ex)
            {
                Log.Error($"RT100Controller Update: {ex}");
                return BadRequest();
            }
        }

        [HttpPost]
        public async Task<IActionResult> UpdateProcess(UpdateProcessRT100InputModel model)
        {
            try
            {
                await service.UpdateProcess(model);
                return Ok();

            }
            catch (Exception ex)
            {
                Log.Error($"RT100Controller UpdateProcess: {ex}");
                return BadRequest();
            }
        }
    }
}
