﻿using TMLM.SalesIllustrator.Shared.Models.SalesIllustrator;
using TMLM.SalesIllustrator.Shared.Models.UserSession;

namespace TMLM.SalesIllustrator.API.Services.Abstractions
{
    public interface IUserSessionService
    {
        public Task<string> Create(CreateUserSessionInputModel model, string purpose);
        public Task<string> Recreate(string oldAuthToken);
        public Task ValidateToken(string token);
        public Task UpdateSessionPurpose(string token, string purpose);
        public Task<string> GetDropDownOccupation();
        public Task<string> GetOccupationCode(string occupation, string nature);
        public Task<string> GetDropDownNature();
        public Task<string> GetUserDetails(string authToken);
    }
}
