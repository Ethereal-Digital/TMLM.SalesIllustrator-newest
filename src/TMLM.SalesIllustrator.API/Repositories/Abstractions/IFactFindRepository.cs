using TMLM.SalesIllustrator.Shared.Models;
using TMLM.SalesIllustrator.Shared.Models.FactFind;

namespace TMLM.SalesIllustrator.API.Repositories.Abstractions
{
    public interface IFactFindRepository
    {
        public Task<RepositoryResult<string>> Create(string authToken);

        public Task<RepositoryResult<string>> Update(UpdateFactFindInputModel model);

        public Task<RepositoryResult<string>> UpdateProcess(UpdateProcessFactFindInputModel model);
    }
}
