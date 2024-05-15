using TMLM.SalesIllustrator.Shared.Models.RT100;

namespace TMLM.SalesIllustrator.API.Services.Abstractions
{
    public interface IRT100Service
    {
        public Task<string> Create(string authToken);
        public Task Update(UpdateRT100InputModel model);
        public Task UpdateProcess(UpdateProcessRT100InputModel model);
    }
}
