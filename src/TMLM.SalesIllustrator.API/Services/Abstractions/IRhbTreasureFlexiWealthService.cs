using TMLM.SalesIllustrator.Shared.Models.FlexiWealth;
using TMLM.SalesIllustrator.Shared.Models.SalesIllustrator;

namespace TMLM.SalesIllustrator.API.Services.Abstractions
{
    public interface IRhbTreasureFlexiWealthService
    {
        public Task<string> Create(string authToken);

        public Task Update(UpdateFWnputModel model);

        public Task UpdateProcess(UpdateProcessSiInputModel model);
    }
}
