﻿using TMLM.SalesIllustrator.API.Repositories.Abstractions;
using TMLM.SalesIllustrator.API.Services.Abstractions;
using TMLM.SalesIllustrator.Shared.Common;
using TMLM.SalesIllustrator.Shared.Models.FactFind;
using TMLM.SalesIllustrator.Shared.Models.Streamline;

namespace TMLM.SalesIllustrator.API.Services
{
    public class FactFindService : IFactFindService
    {
        private static IFactFindRepository repo;
        private static IUserSessionRepository userSessionRepo;

        public FactFindService(IFactFindRepository _repo, IUserSessionRepository _userSessionRepo)
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

        public async Task<string> Create(string authToken)
        {
            if (string.IsNullOrEmpty(authToken))
                throw new UnauthorizedAccessException("Empty Auth Token");

            var streamlineModel = await GetAgencyToken(authToken);

            //await StreamlineApiHelper.GetMemberProfile($"{Constant.StreamlineApiUrl}Member/Get_Profile", streamlineModel);

            var resp = await repo.Create(authToken);

            if (resp.RetCode == ResponseReturnCode.Gen_Success)
                return resp.Result;
            else if (resp.RetCode == ResponseReturnCode.TokenExpired)
                throw new UnauthorizedAccessException($"Invalid Auth Token with value {authToken}");

            throw new Exception("Invalid error during create fact find data");
        }

        public async Task Update(UpdateFactFindInputModel model)
        {
            var resp = await repo.Update(model);

            if (resp.RetCode == ResponseReturnCode.Gen_Success)
                return;

            throw new Exception("Invalid error during update fact find data");
        }

        public async Task UpdateProcess(UpdateProcessFactFindInputModel model)
        {
            var resp = await repo.UpdateProcess(model);

            if (resp.RetCode == ResponseReturnCode.Gen_Success)
                return;

            throw new Exception("Invalid error during update fact find process data");
        }
    }
}
