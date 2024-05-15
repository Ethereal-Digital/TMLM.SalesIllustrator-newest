using TMLM.SalesIllustrator.Shared.Models.SalesIllustrator;

namespace TMLM.SalesIllustrator.API.Services.Abstractions
{
    public interface IRhbTreasureSupremeService
    {
        public Task<string> Create(string authToken);

        public Task Update(UpdateSupremeInputModel model);

        public Task UpdateProcess(UpdateProcessSiInputModel model);
    }
}
