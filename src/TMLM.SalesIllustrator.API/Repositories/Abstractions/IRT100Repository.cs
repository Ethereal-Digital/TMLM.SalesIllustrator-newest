using TMLM.SalesIllustrator.Shared.Models;
using TMLM.SalesIllustrator.Shared.Models.RT100;

namespace TMLM.SalesIllustrator.API.Repositories.Abstractions
{
    public interface IRT100Repository
    {
        public Task<RepositoryResult<string>> Create(CreateRT100InputModel model);

        public Task<RepositoryResult<string>> Update(UpdateRT100InputModel model);

        public Task<RepositoryResult<string>> UpdateProcess(UpdateProcessRT100InputModel model);
    }
}
