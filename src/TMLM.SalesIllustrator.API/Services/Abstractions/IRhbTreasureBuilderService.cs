using TMLM.SalesIllustrator.Shared.Models.SalesIllustrator;

namespace TMLM.SalesIllustrator.API.Services.Abstractions
{
    public interface IRhbTreasureBuilderService
    {
        public Task<string> Create(string authToken);

        public Task Update(UpdateSiInputModel model);

        public Task UpdateProcess(UpdateProcessSiInputModel model);
    }
}
