using TMLM.SalesIllustrator.Shared.Models;
using TMLM.SalesIllustrator.Shared.Models.SalesIllustrator;

namespace TMLM.SalesIllustrator.API.Repositories.Abstractions
{
    public interface IRhbTreasureSupremeRepository
    {
        public Task<RepositoryResult<string>> Create(string rhbTreasureAuthorizationId);

        public Task<RepositoryResult<string>> Update(UpdateSupremeInputModel model);

        public Task<RepositoryResult<string>> UpdateProcess(UpdateProcessSiInputModel model);
    }
}
