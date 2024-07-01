using TMLM.SalesIllustrator.Shared.Models;
using TMLM.SalesIllustrator.Shared.Models.SalesIllustrator;
using TMLM.SalesIllustrator.Shared.Models.Streamline;

namespace TMLM.SalesIllustrator.API.Repositories.Abstractions
{
    public interface IUserSessionRepository
    {
        public Task<RepositoryResult<string>> Create(string url, string purpose, string createdBy, string agencyAuthToken, DateTime createdAt, DateTime validUntil);
        public Task<RepositoryResult<string>> Update(string authToken, string purpose, int extendDuration = 10);
        public Task<RepositoryResult<StreamlineTokenStatusInputModels>> GetAgencyToken(string authToken);
        public Task<RepositoryResult<string>> ValidateToken(string authToken); 
        public Task<RepositoryResult<string>> UpdatePurpose(string authToken, string purpose);
        public Task<RepositoryResult<string>> GetDropDownOccupation();
        public Task<RepositoryResult<string>> GetOccupationCode(string occupation, string nature);
        public Task<RepositoryResult<string>> GetDropDownNature();
        public Task<RepositoryResult<string>> GetUserSessionDetails(string authToken);
    }
}
