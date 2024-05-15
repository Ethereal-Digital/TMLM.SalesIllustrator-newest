using Dapper;
using System.Data;
using TMLM.SalesIllustrator.API.Repositories.Abstractions;
using TMLM.SalesIllustrator.Shared.Models;
using TMLM.SalesIllustrator.Shared.Models.RT100;

namespace TMLM.SalesIllustrator.API.Repositories
{
    public class RT100Repository : BaseRepository, IRT100Repository
    {
        public async Task<RepositoryResult<string>> Create(string authToken)
        {
            RepositoryResult<string> resp = new();

            DynamicParameters _dParams = new();

            _dParams.Add("@authToken", authToken, DbType.String, ParameterDirection.Input);
            _dParams.Add("@varRetCode", dbType: DbType.String, direction: ParameterDirection.Output, size: 10);
            _dParams.Add("@varRetMsg", dbType: DbType.String, direction: ParameterDirection.Output, size: 1000);

            base.OpenConnection(Constant.ConnectionString);
            var RetVal = await base.DbConnection.QueryFirstOrDefaultAsync<int>("spCreate_RhbTreasure100", _dParams, commandType: CommandType.StoredProcedure);

            resp.Result = RetVal.ToString();
            resp.RetCode = _dParams.Get<string>("@varRetCode");
            resp.RetMsg = _dParams.Get<string>("@varRetMsg");

            base.CloseConnection();
            return resp;
        }

        public async Task<RepositoryResult<string>> Update(UpdateRT100InputModel model)
        {
            RepositoryResult<string> resp = new();

            DynamicParameters _dParams = new();

            _dParams.Add("@name", model.Name, DbType.String, ParameterDirection.Input);
            _dParams.Add("@age", model.Age, DbType.Int32, ParameterDirection.Input);
            _dParams.Add("@gender", model.Gender, DbType.String, ParameterDirection.Input);
            _dParams.Add("@desiredPlan", model.DesiredPlan, DbType.String, ParameterDirection.Input);
            _dParams.Add("@premiumPaymentTerm", model.PremiumPaymentTerm, DbType.Int32, ParameterDirection.Input);
            _dParams.Add("@premiumAmount", model.PremiumAmountAnnually, DbType.Decimal, ParameterDirection.Input);
            _dParams.Add("@category", model.Category, DbType.String, ParameterDirection.Input);
            _dParams.Add("@id", model.Id, DbType.String, ParameterDirection.Input);
            _dParams.Add("@varRetCode", dbType: DbType.String, direction: ParameterDirection.Output, size: 10);
            _dParams.Add("@varRetMsg", dbType: DbType.String, direction: ParameterDirection.Output, size: 1000);

            base.OpenConnection(Constant.ConnectionString);
            await base.DbConnection.ExecuteAsync("spUpdate_RhbTreasure100", _dParams, commandType: CommandType.StoredProcedure);

            resp.RetCode = _dParams.Get<string>("@varRetCode");
            resp.RetMsg = _dParams.Get<string>("@varRetMsg");

            base.CloseConnection();
            return resp;
        }

        public async Task<RepositoryResult<string>> UpdateProcess(UpdateProcessRT100InputModel model)
        {
            RepositoryResult<string> resp = new();

            DynamicParameters _dParams = new();

            _dParams.Add("@process", model.Process, DbType.String, ParameterDirection.Input);
            _dParams.Add("@id", model.Id, DbType.String, ParameterDirection.Input);
            _dParams.Add("@varRetCode", dbType: DbType.String, direction: ParameterDirection.Output, size: 10);
            _dParams.Add("@varRetMsg", dbType: DbType.String, direction: ParameterDirection.Output, size: 1000);

            base.OpenConnection(Constant.ConnectionString);
            await base.DbConnection.ExecuteAsync("spUpdateProcess_RhbTreasure100", _dParams, commandType: CommandType.StoredProcedure);

            resp.Result = "Success";
            resp.RetCode = _dParams.Get<string>("@varRetCode");
            resp.RetMsg = _dParams.Get<string>("@varRetMsg");

            base.CloseConnection();
            return resp;
        }
    }
}
