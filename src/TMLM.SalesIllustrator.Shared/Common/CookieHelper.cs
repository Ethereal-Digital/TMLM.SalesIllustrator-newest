using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using TMLM.SalesIllustrator.Shared.Crypto;

namespace TMLM.SalesIllustrator.Shared.Common
{
    public static class CookieHelper
    {
        public static string GetAuthToken(this HttpContext context)
        {
            ClaimsIdentity claimsIdentity = context.User.Identity as ClaimsIdentity;

            Claim tokenClaim = claimsIdentity.FindFirst("Token");

            if (tokenClaim == null)
            {
                RemoveCookie(context);
                throw new UnauthorizedAccessException("Empty Token");
            }

            return tokenClaim.Value;
        }

        public static string GetAuthTokenWithoutException(this HttpContext context)
        {

            ClaimsIdentity claimsIdentity = context.User.Identity as ClaimsIdentity;

            Claim tokenClaim = claimsIdentity.FindFirst("Token");

            if (tokenClaim == null)
                return null;

            return tokenClaim.Value;
        }

        public static string GetTokenValue(this HttpContext context, string tokenName)
        {
            string hashed = string.Empty;
            context.Request.Cookies.TryGetValue(tokenName, out hashed);

            if(hashed == null)
            {
                RemoveCookie(context);
                throw new Exception("Empty Token");
            }

            var id = AspRijndael.DecryptData(hashed, "TMLM");

            return id;
        }

        public static void RemoveCookie(this HttpContext context)
        {
            context.Response.Cookies.Delete(".AspNetCore.Cookies");
            context.Response.Cookies.Delete("Cookies");
        }
    }
}
