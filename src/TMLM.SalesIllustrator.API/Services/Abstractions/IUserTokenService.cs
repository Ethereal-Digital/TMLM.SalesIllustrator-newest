namespace TMLM.SalesIllustrator.API.Services.Abstractions
{
    public interface IUserTokenService
    {
        public Task<Dictionary<string, string>> UpdateAuthToken(string authToken, int? extendDuration, string purpose);
    }
}
