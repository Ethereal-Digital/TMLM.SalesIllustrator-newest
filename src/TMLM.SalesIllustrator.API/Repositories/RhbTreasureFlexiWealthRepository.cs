using Dapper;
using System.Data;
using System.Text.Json;
using TMLM.SalesIllustrator.API.Repositories.Abstractions;
using TMLM.SalesIllustrator.Shared.Models;
using TMLM.SalesIllustrator.Shared.Models.FlexiWealth;
using TMLM.SalesIllustrator.Shared.Models.SalesIllustrator;

namespace TMLM.SalesIllustrator.API.Repositories
{
    public class RhbTreasureFlexiWealthRepository : BaseRepository, IRhbTreasureFlexiWealthRepository
    {
        public async Task<RepositoryResult<string>> Update(UpdateFWnputModel model)
        {
            RepositoryResult<string> resp = new();

            DynamicParameters _dParams = new();

            //_dParams.Add("@category", model.Category, DbType.String, ParameterDirection.Input);
            //_dParams.Add("@category2", model.Category2, DbType.String, ParameterDirection.Input);
            //_dParams.Add("@risk", model.Risk, DbType.String, ParameterDirection.Input);
            //_dParams.Add("@name", model.Name, DbType.String, ParameterDirection.Input);
            //_dParams.Add("@dateOfBirth", model.DateOfBirth, DbType.DateTime, ParameterDirection.Input);
            //_dParams.Add("@gender", model.Gender, DbType.String, ParameterDirection.Input);
            //_dParams.Add("@martial", model.Martial, DbType.String, ParameterDirection.Input);
            //_dParams.Add("@child", model.Child, DbType.String, ParameterDirection.Input);
            //_dParams.Add("@occupation", model.Occupation, DbType.String, ParameterDirection.Input);
            //_dParams.Add("@industry", model.Industry, DbType.String, ParameterDirection.Input);
            _dParams.Add("@premiumPaymentTerm", model.PremiumPaymentTerm, DbType.String, ParameterDirection.Input);
            _dParams.Add("@premiumAmountAnnually", model.PremiumAmountAnnually, DbType.Decimal, ParameterDirection.Input);
            _dParams.Add("@id", model.Id, DbType.String, ParameterDirection.Input);
            _dParams.Add("@varRetCode", dbType: DbType.String, direction: ParameterDirection.Output, size: 10);
            _dParams.Add("@varRetMsg", dbType: DbType.String, direction: ParameterDirection.Output, size: 1000);

            base.OpenConnection(Constant.ConnectionString);
            var RetVal = await base.DbConnection.QueryFirstOrDefaultAsync<UserDetailsModel>("spUpdate_RhbTreasureFlexiWealth", _dParams, commandType: CommandType.StoredProcedure);

            var tempJson = JsonSerializer.Serialize(RetVal);
            resp.Result = tempJson;
            resp.RetCode = _dParams.Get<string>("@varRetCode");
            resp.RetMsg = _dParams.Get<string>("@varRetMsg");

            base.CloseConnection();
            return resp;
        }

        public async Task<RepositoryResult<string>> Create(CreateFWnputModel model)
        {
            RepositoryResult<string> resp = new();

            DynamicParameters _dParams = new();

            _dParams.Add("@authToken", model.Id, DbType.String, ParameterDirection.Input);
            _dParams.Add("@varRetCode", dbType: DbType.String, direction: ParameterDirection.Output, size: 10);
            _dParams.Add("@varRetMsg", dbType: DbType.String, direction: ParameterDirection.Output, size: 1000);
            _dParams.Add("@category", model.Category, DbType.String, ParameterDirection.Input);
            _dParams.Add("@category2", model.Category2, DbType.String, ParameterDirection.Input);
            _dParams.Add("@risk", model.Risk, DbType.String, ParameterDirection.Input);
            _dParams.Add("@name", model.Name, DbType.String, ParameterDirection.Input);
            _dParams.Add("@dateOfBirth", model.DateOfBirth, DbType.DateTime, ParameterDirection.Input);
            _dParams.Add("@gender", model.Gender, DbType.String, ParameterDirection.Input);
            _dParams.Add("@martial", model.Martial, DbType.String, ParameterDirection.Input);
            _dParams.Add("@child", model.Child, DbType.String, ParameterDirection.Input);
            _dParams.Add("@occupation", model.Occupation, DbType.String, ParameterDirection.Input);
            _dParams.Add("@industry", model.Industry, DbType.String, ParameterDirection.Input);

            base.OpenConnection(Constant.ConnectionString);
            var RetVal = await base.DbConnection.QueryFirstOrDefaultAsync<string>("spCreate_RhbTreasureFlexiWealth", _dParams, commandType: CommandType.StoredProcedure);

            resp.Result = RetVal;
            resp.RetCode = _dParams.Get<string>("@varRetCode");
            resp.RetMsg = _dParams.Get<string>("@varRetMsg");

            base.CloseConnection();
            return resp;
        }

        public async Task<RepositoryResult<string>> UpdateProcess(UpdateProcessSiInputModel model)
        {
            RepositoryResult<string> resp = new();

            DynamicParameters _dParams = new();

            _dParams.Add("@process", model.Process, DbType.String, ParameterDirection.Input);
            _dParams.Add("@id", model.Id, DbType.String, ParameterDirection.Input);
            _dParams.Add("@varRetCode", dbType: DbType.String, direction: ParameterDirection.Output, size: 10);
            _dParams.Add("@varRetMsg", dbType: DbType.String, direction: ParameterDirection.Output, size: 1000);

            base.OpenConnection(Constant.ConnectionString);
            await base.DbConnection.ExecuteAsync("spUpdateProcess_RhbTreasureFlexiWealth", _dParams, commandType: CommandType.StoredProcedure);

            resp.Result = "Success";
            resp.RetCode = _dParams.Get<string>("@varRetCode");
            resp.RetMsg = _dParams.Get<string>("@varRetMsg");

            base.CloseConnection();
            return resp;
        }
    }
}
