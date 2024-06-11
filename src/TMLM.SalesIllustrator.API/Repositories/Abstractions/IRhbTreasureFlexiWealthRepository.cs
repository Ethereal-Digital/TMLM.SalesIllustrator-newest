using TMLM.SalesIllustrator.Shared.Models;
using TMLM.SalesIllustrator.Shared.Models.FlexiWealth;
using TMLM.SalesIllustrator.Shared.Models.SalesIllustrator;

namespace TMLM.SalesIllustrator.API.Repositories.Abstractions
{
    public interface IRhbTreasureFlexiWealthRepository
    {
        public Task<RepositoryResult<string>> Create(string rhbTreasureAuthorizationId);

        public Task<RepositoryResult<string>> Update(UpdateFWnputModel model);

        public Task<RepositoryResult<string>> UpdateProcess(UpdateProcessSiInputModel model);
    }
}
