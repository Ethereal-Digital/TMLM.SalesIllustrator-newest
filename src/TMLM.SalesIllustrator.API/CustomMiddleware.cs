using Newtonsoft.Json;
using System.Net;
using System.Text;
using TMLM.SalesIllustrator.API.Services.Abstractions;
using TMLM.SalesIllustrator.Shared.Common;
using TMLM.SalesIllustrator.Shared.Models;

namespace TMLM.SalesIllustrator.API
{
    public class CustomMiddleware
    {
        private readonly RequestDelegate _next;

        public CustomMiddleware(RequestDelegate next, IConfiguration config)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            var path = context.Request.Path.Value.ToLower();

            if(path.Contains("/update") && !path.Contains("usersession/"))
            {
                var respCode = string.Empty;

                var service = context.RequestServices.GetService(typeof(IUserTokenService)) as IUserTokenService;

                var authToken = context.Request.Headers["Auth"];

                //var modelTemp = JsonConvert.DeserializeObject<AuthorizeModel>(auth);
                var purpose = GetPurpose(context.Request.Path.Value);

                var resp = service.UpdateAuthToken(authToken, Constant.ExtendDuration, purpose);

                resp.Result.TryGetValue("code", out respCode);

                if (respCode == ResponseReturnCode.Gen_Success)
                {
                    //context.Request.Body = new MemoryStream(Encoding.UTF8.GetBytes(valueFromBody));
                    await _next(context);

                    return;
                }
                else if (respCode == ResponseReturnCode.TokenExpired || respCode == ResponseReturnCode.Gen_Auth_Check_Failed)
                {
                    //Log.Error($"Token Expired: ${JsonConvert.SerializeObject(modelTemp)}");

                    context.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
                    return;
                }
                else if (respCode == ResponseReturnCode.Gen_RecordNotFound)
                {
                    //Log.Error($"No Record: ${JsonConvert.SerializeObject(modelTemp)}");

                    context.Response.StatusCode = (int)HttpStatusCode.NoContent;
                    return;
                }
                else
                {
                    //Log.Error($"Check token failed: ${JsonConvert.SerializeObject(modelTemp)}");

                    context.Response.StatusCode = (int)HttpStatusCode.BadRequest;
                    return;
                }
            }

            await _next(context);

            return;
        }

        private string GetPurpose(string path)
        {
            if (path.ToLower().Contains("rhbtreasurebuilder"))
                return "RHB Treasure Builder";
            if (path.ToLower().Contains("rhbtreasuresupreme"))
                return "RHB Treasure Supreme";
            if (path.ToLower().Contains("rhbtreasure100"))
                return "RT100";
            if (path.ToLower().Contains("rhbessentialprotect"))
                return "Rhb Essential Protect";
            return "Fact Find";
        }
    }
}
