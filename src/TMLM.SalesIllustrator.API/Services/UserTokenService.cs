using TMLM.SalesIllustrator.API.Repositories.Abstractions;
using TMLM.SalesIllustrator.API.Services.Abstractions;
using TMLM.SalesIllustrator.Shared.Common;

namespace TMLM.SalesIllustrator.API.Services
{
    public class UserTokenService : IUserTokenService
    {
        private static IUserSessionRepository userSessionRepository;

        public UserTokenService(IUserSessionRepository _userSessionRepository)
        {
            userSessionRepository = _userSessionRepository;
        }

        public async Task<Dictionary<string, string>> UpdateAuthToken(string authToken, int? extendDuration, string purpose)
        {
            Dictionary<string, string> endResult = new Dictionary<string, string>();

            if (string.IsNullOrEmpty(authToken))
            {
                endResult.Add("code", "99999");
                endResult.Add("loginId", "");
                return endResult;
            }

            if (!extendDuration.HasValue && extendDuration <= 0)
            {
                /*-- default to 10mins --*/
                extendDuration = 10;
            }

            var result = await userSessionRepository.Update(authToken, purpose, extendDuration.Value);

            endResult.Add("code", result.RetCode);
            endResult.Add("loginId", result.Result);

            return endResult;
        }
    }
}
