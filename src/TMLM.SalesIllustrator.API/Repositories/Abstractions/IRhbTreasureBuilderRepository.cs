using TMLM.SalesIllustrator.Shared.Models;
using TMLM.SalesIllustrator.Shared.Models.SalesIllustrator;

namespace TMLM.SalesIllustrator.API.Repositories.Abstractions
{
    public interface IRhbTreasureBuilderRepository
    {
        public Task<RepositoryResult<string>> Create(CreateUserSiInputModel model);

        public Task<RepositoryResult<string>> Update(UpdateUserSiInputModel model);

        public Task<RepositoryResult<string>> UpdateProcess(UpdateProcessSiInputModel model);
    }
}
