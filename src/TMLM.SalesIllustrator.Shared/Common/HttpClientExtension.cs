using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace TMLM.SalesIllustrator.Shared.Common
{
    public static class HttpClientExtension
    {
        public static async Task<HttpResponseMessage> PostAsJson(this HttpClient httpClient, string url, object obj, string authToken)
        {
            if (string.IsNullOrEmpty(authToken))
                throw new UnauthorizedAccessException();

            httpClient.DefaultRequestHeaders.Add("Auth", authToken);

            var contentS = JsonConvert.SerializeObject(obj);
            var stringtifyContent = new StringContent(contentS, Encoding.UTF8, "application/json");

            var response = await httpClient.PostAsync(url, stringtifyContent);
            //var content = await response.Content.ReadAsStringAsync();

            return response;

            throw new UnauthorizedAccessException();


            //if (response.IsSuccessStatusCode)
            //{
            //    var result = JsonConvert.DeserializeObject<T>(content);
            //    return result;
            //}
            ////var errorResult = JsonConvert.DeserializeObject<CustomApiException>(content);
            //throw new Exception(content);
        }

        public static async Task<HttpResponseMessage> PostAsJsonStreamline(this HttpClient httpClient, string url, object obj)
        {
            var contentS = JsonConvert.SerializeObject(obj);
            var stringtifyContent = new StringContent(contentS, Encoding.UTF8, "application/json");

            var response = await httpClient.PostAsync(url, stringtifyContent);
            //var content = await response.Content.ReadAsStringAsync();

            return response;

            throw new UnauthorizedAccessException();


            //if (response.IsSuccessStatusCode)
            //{
            //    var result = JsonConvert.DeserializeObject<T>(content);
            //    return result;
            //}
            ////var errorResult = JsonConvert.DeserializeObject<CustomApiException>(content);
            //throw new Exception(content);
        }


        public static async Task<T> GetAsJson<T>(this HttpClient httpClient, string url, string authToken)
        {
            if (!string.IsNullOrEmpty(authToken))
                httpClient.DefaultRequestHeaders.Add("Auth", authToken);

            var response = await httpClient.GetAsync(url);
            var content = await response.Content.ReadAsStringAsync();

            //return response;

            //throw new UnauthorizedAccessException();


            if (response.IsSuccessStatusCode)
            {
                var result = JsonConvert.DeserializeObject<T>(content);
                return result;
            }
            else if (response.StatusCode == HttpStatusCode.Unauthorized || response.StatusCode == HttpStatusCode.NoContent)
                throw new UnauthorizedAccessException();
            throw new Exception();
        }

        public static async Task<string> GetAsJson(this HttpClient httpClient, string url, string authToken)
        {
            if (!string.IsNullOrEmpty(authToken))
                httpClient.DefaultRequestHeaders.Add("Auth", authToken);
            var response = await httpClient.GetAsync(url);
            var content = await response.Content.ReadAsStringAsync();

            if (response.IsSuccessStatusCode)
                return content;
            else if (response.StatusCode == HttpStatusCode.Unauthorized || response.StatusCode == HttpStatusCode.NoContent)
                throw new UnauthorizedAccessException();
            throw new Exception();
        }
    }
}
