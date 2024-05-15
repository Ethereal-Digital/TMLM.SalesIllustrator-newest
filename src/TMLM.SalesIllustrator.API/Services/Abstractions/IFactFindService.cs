using TMLM.SalesIllustrator.Shared.Models.FactFind;

namespace TMLM.SalesIllustrator.API.Services.Abstractions
{
    public interface IFactFindService
    {
        public Task<string> Create(string authToken);
        public Task Update(UpdateFactFindInputModel model);
        public Task UpdateProcess(UpdateProcessFactFindInputModel model);
    }
}
