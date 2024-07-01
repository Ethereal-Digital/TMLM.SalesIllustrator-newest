using TMLM.SalesIllustrator.Shared.Models.SalesIllustrator;

namespace TMLM.SalesIllustrator.API.Services.Abstractions
{
    public interface IRhbTreasureSupremeService
    {
        public Task<string> Create(CreateSupremeInputModel model);

        public Task<string> Update(UpdateSupremeInputModel model);

        public Task UpdateProcess(UpdateProcessSiInputModel model);
    }
}
