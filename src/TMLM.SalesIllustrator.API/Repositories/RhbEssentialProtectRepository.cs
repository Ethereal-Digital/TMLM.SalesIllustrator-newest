﻿using Dapper;
using System.Data;
using TMLM.SalesIllustrator.API.Repositories.Abstractions;
using TMLM.SalesIllustrator.Shared.Models;
using TMLM.SalesIllustrator.Shared.Models.REP;

namespace TMLM.SalesIllustrator.API.Repositories
{
    public class RhbEssentialProtectRepository : BaseRepository, IRhbEssentialProtectRepository
    {
        public async Task<RepositoryResult<string>> Create(string authToken)
        {
            RepositoryResult<string> resp = new();

            DynamicParameters _dParams = new();

            _dParams.Add("@authToken", authToken, DbType.String, ParameterDirection.Input);
            _dParams.Add("@varRetCode", dbType: DbType.String, direction: ParameterDirection.Output, size: 10);
            _dParams.Add("@varRetMsg", dbType: DbType.String, direction: ParameterDirection.Output, size: 1000);

            base.OpenConnection(Constant.ConnectionString);
            var RetVal = await base.DbConnection.QueryFirstOrDefaultAsync<int>("spCreate_RhbEssentialProtect", _dParams, commandType: CommandType.StoredProcedure);

            resp.Result = RetVal.ToString();
            resp.RetCode = _dParams.Get<string>("@varRetCode");
            resp.RetMsg = _dParams.Get<string>("@varRetMsg");

            base.CloseConnection();
            return resp;
        }

        public async Task<RepositoryResult<string>> Update(UpdateREPInputModel model)
        {
            RepositoryResult<string> resp = new();

            DynamicParameters _dParams = new();

            _dParams.Add("@category", model.Category, DbType.String, ParameterDirection.Input);
            _dParams.Add("@category2", model.Category2, DbType.String, ParameterDirection.Input);
            _dParams.Add("@risk", model.Risk, DbType.String, ParameterDirection.Input);
            _dParams.Add("@name", model.Name, DbType.String, ParameterDirection.Input);
            _dParams.Add("@age", model.Age, DbType.Int32, ParameterDirection.Input);
            _dParams.Add("@gender", model.Gender, DbType.String, ParameterDirection.Input);
            _dParams.Add("@martial", model.Martial, DbType.String, ParameterDirection.Input);
            _dParams.Add("@child", model.Child, DbType.String, ParameterDirection.Input);
            _dParams.Add("@occupation", model.Occupation, DbType.String, ParameterDirection.Input);
            _dParams.Add("@industry", model.Industry, DbType.String, ParameterDirection.Input);
            _dParams.Add("@desiredPlan", model.DesiredPlan, DbType.String, ParameterDirection.Input);
            _dParams.Add("@persona", model.Persona, DbType.String, ParameterDirection.Input);
            _dParams.Add("@premiumPaymentTerm", model.PremiumPaymentTerm, DbType.Int32, ParameterDirection.Input);
            _dParams.Add("@coverageTerm", model.CoverageTerm, DbType.String, ParameterDirection.Input);
            _dParams.Add("@basicSum", model.BasicSum, DbType.Int32, ParameterDirection.Input);
            _dParams.Add("@id", model.Id, DbType.String, ParameterDirection.Input);
            _dParams.Add("@varRetCode", dbType: DbType.String, direction: ParameterDirection.Output, size: 10);
            _dParams.Add("@varRetMsg", dbType: DbType.String, direction: ParameterDirection.Output, size: 1000);

            base.OpenConnection(Constant.ConnectionString);
            await base.DbConnection.ExecuteAsync("spUpdate_RhbEssentialProtect", _dParams, commandType: CommandType.StoredProcedure);

            resp.RetCode = _dParams.Get<string>("@varRetCode");
            resp.RetMsg = _dParams.Get<string>("@varRetMsg");

            base.CloseConnection();
            return resp;
        }

        public async Task<RepositoryResult<string>> UpdateProcess(UpdateProcessREPInputModel model)
        {
            RepositoryResult<string> resp = new();

            DynamicParameters _dParams = new();

            _dParams.Add("@process", model.Process, DbType.String, ParameterDirection.Input);
            _dParams.Add("@id", model.Id, DbType.String, ParameterDirection.Input);
            _dParams.Add("@varRetCode", dbType: DbType.String, direction: ParameterDirection.Output, size: 10);
            _dParams.Add("@varRetMsg", dbType: DbType.String, direction: ParameterDirection.Output, size: 1000);

            base.OpenConnection(Constant.ConnectionString);
            await base.DbConnection.ExecuteAsync("spUpdateProcess_RhbEssentialProtect", _dParams, commandType: CommandType.StoredProcedure);

            resp.Result = "Success";
            resp.RetCode = _dParams.Get<string>("@varRetCode");
            resp.RetMsg = _dParams.Get<string>("@varRetMsg");

            base.CloseConnection();
            return resp;
        }
    }
}
