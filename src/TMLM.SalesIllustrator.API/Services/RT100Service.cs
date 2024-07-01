using TMLM.SalesIllustrator.API.Repositories.Abstractions;
using TMLM.SalesIllustrator.API.Services.Abstractions;
using TMLM.SalesIllustrator.Shared.Common;
using TMLM.SalesIllustrator.Shared.Models.RT100;
using TMLM.SalesIllustrator.Shared.Models.Streamline;

namespace TMLM.SalesIllustrator.API.Services
{
    public class RT100Service : IRT100Service
    {
        private static IRT100Repository repo;
        private static IUserSessionRepository userSessionRepo;

        public RT100Service(IRT100Repository _repo, IUserSessionRepository _userSessionRepo)
        {
            repo = _repo;
            userSessionRepo = _userSessionRepo;
        }

        private async Task<StreamlineTokenStatusInputModels> GetAgencyToken(string authToken)
        {
            var resp = await userSessionRepo.GetAgencyToken(authToken);

            if (resp.RetCode == ResponseReturnCode.Gen_Success)
                return resp.Result;
            throw new Exception("GetAgencyToken Repository");
        }

        public async Task<string> Create(CreateRT100InputModel model)
        {
            if (string.IsNullOrEmpty(model.Id))
                throw new UnauthorizedAccessException("Empty Auth Token");

            var streamlineModel = await GetAgencyToken(model.Id);

            //await StreamlineApiHelper.GetMemberProfile($"{Constant.StreamlineApiUrl}Member/Get_Profile", streamlineModel);

            var resp = await repo.Create(model);

            if (resp.RetCode == ResponseReturnCode.Gen_Success)
                return resp.Result;
            else if (resp.RetCode == ResponseReturnCode.TokenExpired)
                throw new UnauthorizedAccessException($"Invalid Auth Token with value {model.Id}");

            throw new Exception("Invalid error during create RT100 data");
        }

        public async Task<string> Update(UpdateRT100InputModel model)
        {
            var resp = await repo.Update(model);

            if (resp.RetCode == ResponseReturnCode.Gen_Success)
                return resp.Result;

            throw new Exception("Invalid error during update RT100 data");
        }

        public async Task UpdateProcess(UpdateProcessRT100InputModel model)
        {
            var resp = await repo.UpdateProcess(model);

            if (resp.RetCode == ResponseReturnCode.Gen_Success)
                return;

            throw new Exception("Invalid error during update RT100 process data");
        }
    }
}
