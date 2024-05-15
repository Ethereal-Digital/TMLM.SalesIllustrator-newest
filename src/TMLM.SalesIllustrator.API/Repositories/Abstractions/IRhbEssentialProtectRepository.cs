using TMLM.SalesIllustrator.Shared.Models;
using TMLM.SalesIllustrator.Shared.Models.REP;

namespace TMLM.SalesIllustrator.API.Repositories.Abstractions
{
    public interface IRhbEssentialProtectRepository
    {
        public Task<RepositoryResult<string>> Create(string authToken);

        public Task<RepositoryResult<string>> Update(UpdateREPInputModel model);

        public Task<RepositoryResult<string>> UpdateProcess(UpdateProcessREPInputModel model);
    }
}
