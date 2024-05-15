using Newtonsoft.Json;
using Serilog;
using TMLM.SalesIllustrator.API.Repositories.Abstractions;
using TMLM.SalesIllustrator.API.Services.Abstractions;
using TMLM.SalesIllustrator.Shared.Common;
using TMLM.SalesIllustrator.Shared.Models.Streamline;
using TMLM.SalesIllustrator.Shared.Models.UserSession;

namespace TMLM.SalesIllustrator.API.Services
{
    public class UserSessionService : IUserSessionService
    {
        private static IUserSessionRepository repo;
        private static IUserTokenService userTokenService;

        public UserSessionService(IUserSessionRepository _repo, IUserTokenService _userTokenService)
        {
            repo = _repo;
            userTokenService = _userTokenService;
        }

        public async Task<string> Create(CreateUserSessionInputModel model, string purpose)
        {
            StreamlineTokenStatusInputModels streamlineModel = new();

            var now = DateTime.Now;
            var validUntil = now.AddMinutes(Constant.UrlValidityDuration);
            var token = Guid.NewGuid().ToString();

            streamlineModel.login_Id = model.AgentCode;
            streamlineModel.auth_Token = model.AuthToken;
            //await StreamlineApiHelper.GetMemberProfile($"{Constant.StreamlineApiUrl}Member/Get_Profile", streamlineModel);

            var resp = await repo.Create(token, purpose, model.AgentCode, model.AuthToken, now, validUntil);

            if (resp.RetCode == ResponseReturnCode.Gen_Success)
                return token;
            throw new Exception("Invalid error during create rhb treasure builder authorization data");
        }


        public async Task<string> Recreate(string oldAuthToken)
        {
            var now = DateTime.Now;
            var validUntil = now.AddMinutes(Constant.UrlValidityDuration);
            var token = Guid.NewGuid().ToString();
            var dbRepo = await repo.GetAgencyToken(oldAuthToken);

            //await StreamlineApiHelper.GetMemberProfile($"{Constant.StreamlineApiUrl}Member/Get_Profile", dbRepo.Result);

            var resp = await repo.Create(token, null, dbRepo.Result.login_Id, dbRepo.Result.auth_Token, now, validUntil);

            if (resp.RetCode == ResponseReturnCode.Gen_Success)
                return token;
            throw new Exception("Invalid error during create rhb treasure builder authorization data");
        }

        public async Task UpdateSessionPurpose(string token, string purpose)
        {
            var resp = await repo.UpdatePurpose(token, purpose);

            if (resp.RetCode == ResponseReturnCode.Gen_Success)
                return;
            throw new Exception("Invalid error during update user session purpose authorization data");
        }

        public async Task ValidateToken(string token)
        {
            var resp = await repo.ValidateToken(token);

            if (resp.RetCode == ResponseReturnCode.Gen_Success)
            {
                if (resp.Result == "true")
                    return;

                throw new Exception("Unable to reuse token");

            }
            throw new Exception("Invalid error during create rhb treasure builder authorization data");
        }
    }
}
