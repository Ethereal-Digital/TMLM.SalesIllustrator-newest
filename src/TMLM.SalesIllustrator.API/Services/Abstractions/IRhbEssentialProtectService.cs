using TMLM.SalesIllustrator.Shared.Models.REP;

namespace TMLM.SalesIllustrator.API.Services.Abstractions
{
    public interface IRhbEssentialProtectService
    {
        public Task<string> Create(CreateREPInputModel model);
        public Task<string> Update(UpdateREPInputModel model);
        public Task UpdateProcess(UpdateProcessREPInputModel model);
    }
}
