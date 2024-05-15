using TMLM.SalesIllustrator.Shared.Models.REP;

namespace TMLM.SalesIllustrator.API.Services.Abstractions
{
    public interface IRhbEssentialProtectService
    {
        public Task<string> Create(string authToken);
        public Task Update(UpdateREPInputModel model);
        public Task UpdateProcess(UpdateProcessREPInputModel model);
    }
}
