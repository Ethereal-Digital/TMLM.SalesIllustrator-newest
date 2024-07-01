using TMLM.SalesIllustrator.Shared.Models.SalesIllustrator;

namespace TMLM.SalesIllustrator.API.Services.Abstractions
{
    public interface IRhbTreasureBuilderService
    {
        public Task<string> Create(CreateUserSiInputModel model);

        public Task<string> Update(UpdateUserSiInputModel model);

        public Task UpdateProcess(UpdateProcessSiInputModel model);
    }
}
