using Newtonsoft.Json;
using TMLM.SalesIllustrator.API.Repositories.Abstractions;
using TMLM.SalesIllustrator.API.Services.Abstractions;
using TMLM.SalesIllustrator.Shared.Common;
using TMLM.SalesIllustrator.Shared.Models.FlexiWealth;
using TMLM.SalesIllustrator.Shared.Models.SalesIllustrator;
using TMLM.SalesIllustrator.Shared.Models.Streamline;

namespace TMLM.SalesIllustrator.API.Services
{
    public class RhbTreasureFlexiWealthService : IRhbTreasureFlexiWealthService
    {
        private static IRhbTreasureFlexiWealthRepository repo;
        private static IUserSessionRepository userSessionRepo;
        private static IUserTokenService agencyTokenService;

        public RhbTreasureFlexiWealthService(IRhbTreasureFlexiWealthRepository _repo, IUserSessionRepository _userSessionRepo, IUserTokenService _agencyTokenService)
        {
            repo = _repo;
            userSessionRepo = _userSessionRepo;
            agencyTokenService = _agencyTokenService;
        }

        private async Task<StreamlineTokenStatusInputModels> GetAgencyToken(string authToken)
        {
            var resp = await userSessionRepo.GetAgencyToken(authToken);

            if (resp.RetCode == ResponseReturnCode.Gen_Success)
                return resp.Result;
            throw new Exception("GetAgencyToken Repository");
        }

        public async Task<string> Create(string authToken)
        {
            HttpClient client = new ();

            if (string.IsNullOrEmpty(authToken))
                throw new UnauthorizedAccessException("Empty Auth Token");

            var streamlineModel = await GetAgencyToken(authToken);

            //await StreamlineApiHelper.GetMemberProfile($"{Constant.StreamlineApiUrl}Member/Get_Profile", streamlineModel);

            var resp = await repo.Create(authToken);

            if (resp.RetCode == ResponseReturnCode.Gen_Success)
                return resp.Result;
            else if (resp.RetCode == ResponseReturnCode.TokenExpired)
                throw new UnauthorizedAccessException($"Invalid Auth Token with value {authToken}");

            throw new Exception("Invalid error during create rhb treasure builder data");
        }

        public async Task Update(UpdateFWnputModel model)
        {
            var resp = await repo.Update(model);

            if (resp.RetCode == ResponseReturnCode.Gen_Success)
                return;

            throw new Exception("Invalid error during update rhb treasure builder data");
        }

        public async Task UpdateProcess(UpdateProcessSiInputModel model)
        {
            var resp = await repo.UpdateProcess(model);

            if (resp.RetCode == ResponseReturnCode.Gen_Success)
                return;

            throw new Exception("Invalid error during update rhb treasure builder process data");
        }
    }
}
