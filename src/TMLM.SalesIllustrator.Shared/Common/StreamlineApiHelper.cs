using Newtonsoft.Json;
using Serilog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TMLM.SalesIllustrator.Shared.Models.Streamline;

namespace TMLM.SalesIllustrator.Shared.Common
{
    public static class StreamlineApiHelper
    {
        public static async Task GetMemberProfile(string streamlineApiUrl, StreamlineTokenStatusInputModels model)
        {
            HttpClientHandler handler = new();

            handler.ServerCertificateCustomValidationCallback +=
            (sender, certificate, chain, errors) =>
            {
                return true;
            };

            HttpClient client = new(handler);

            var resp = await client.PostAsJsonStreamline(streamlineApiUrl, model);
            var respContent = await resp.Content.ReadAsStringAsync();

            if (resp.IsSuccessStatusCode)
            {
                if (respContent == "Failed")
                {
                    Log.Error($"Invalid Token: ${JsonConvert.SerializeObject(model)}");

                    throw new UnauthorizedAccessException();
                }
                return;
            }

            Log.Error($"Check token failed: ${respContent}");

            throw new UnauthorizedAccessException();
        }
    }
}
