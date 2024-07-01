using Dapper;
using Newtonsoft.Json;
using System.Data;
using System.Data.SqlClient;
using System.Reflection;
using TMLM.SalesIllustrator.API.Repositories.Abstractions;
using TMLM.SalesIllustrator.Shared.Models;
using TMLM.SalesIllustrator.Shared.Models.SalesIllustrator;
using TMLM.SalesIllustrator.Shared.Models.Streamline;

namespace TMLM.SalesIllustrator.API.Repositories
{
    public class UserSessionRepository : BaseRepository, IUserSessionRepository
    {
        public async Task<RepositoryResult<string>> Create(string authToken, string purpose, string createdBy, string agencyAuthToken, DateTime createdDateTime, DateTime expiredDateTime)
        {
            RepositoryResult<string> resp = new();

            DynamicParameters _dParams = new();

            _dParams.Add("@authToken", authToken, DbType.String, ParameterDirection.Input);
            _dParams.Add("@agencyAuthToken", agencyAuthToken, DbType.String, ParameterDirection.Input);
            _dParams.Add("@createdBy", createdBy, DbType.String, ParameterDirection.Input);
            _dParams.Add("@purpose", purpose, DbType.String, ParameterDirection.Input);
            _dParams.Add("@createdDateTime", createdDateTime, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            _dParams.Add("@expiredDateTime", expiredDateTime, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            _dParams.Add("@varRetCode", dbType: DbType.String, direction: ParameterDirection.Output, size: 10);
            _dParams.Add("@varRetMsg", dbType: DbType.String, direction: ParameterDirection.Output, size: 1000);

            base.OpenConnection(Constant.ConnectionString);
            var RetVal = await base.DbConnection.QueryAsync("spCreate_UserSession", _dParams, commandType: CommandType.StoredProcedure);

            resp.RetCode = _dParams.Get<string>("@varRetCode");
            resp.RetMsg = _dParams.Get<string>("@varRetMsg");

            base.CloseConnection();
            return resp;
        }

        public async Task<RepositoryResult<string>> Update(string authToken, string purpose, int extendDuration = 10)
        {
                RepositoryResult<string> resp = new();
            try
            {

                DynamicParameters _dParams = new();

                _dParams.Add("@authToken", authToken, DbType.String, ParameterDirection.Input);
                _dParams.Add("@extendDuration", extendDuration, DbType.Int32, ParameterDirection.Input);
                _dParams.Add("@purpose", purpose, DbType.String, ParameterDirection.Input);
                _dParams.Add("@id", dbType: DbType.Int32, direction: ParameterDirection.Output);
                _dParams.Add("@varRetCode", dbType: DbType.String, direction: ParameterDirection.Output, size: 10);
                _dParams.Add("@varRetMsg", dbType: DbType.String, direction: ParameterDirection.Output, size: 1000);

                base.OpenConnection(Constant.ConnectionString);
                var RetVal = await base.DbConnection.QueryAsync("spUpdate_UserSession", _dParams, commandType: CommandType.StoredProcedure);

                resp.Result = _dParams.Get<int>("@id").ToString();
                resp.RetCode = _dParams.Get<string>("@varRetCode");
                resp.RetMsg = _dParams.Get<string>("@varRetMsg");

                base.CloseConnection();
                return resp;
            }
            catch(Exception ex)
            {
                return resp;
            }
        }

        public async Task<RepositoryResult<string>> UpdatePurpose(string authToken, string purpose)
        {
            RepositoryResult<string> resp = new();
            try
            {
                DynamicParameters _dParams = new();

                _dParams.Add("@authToken", authToken, DbType.String, ParameterDirection.Input);
                _dParams.Add("@purpose", purpose, DbType.String, ParameterDirection.Input);
                _dParams.Add("@id", dbType: DbType.Int32, direction: ParameterDirection.Output);
                _dParams.Add("@varRetCode", dbType: DbType.String, direction: ParameterDirection.Output, size: 10);
                _dParams.Add("@varRetMsg", dbType: DbType.String, direction: ParameterDirection.Output, size: 1000);

                base.OpenConnection(Constant.ConnectionString);
                var RetVal = await base.DbConnection.QueryAsync("spUpdate_SessionPurpose", _dParams, commandType: CommandType.StoredProcedure);

                resp.RetCode = _dParams.Get<string>("@varRetCode");
                resp.RetMsg = _dParams.Get<string>("@varRetMsg");

                base.CloseConnection();
                return resp;
            }
            catch (Exception ex)
            {
                return resp;
            }
        }

        public async Task<RepositoryResult<StreamlineTokenStatusInputModels>> GetAgencyToken(string authToken)
        {
            RepositoryResult<StreamlineTokenStatusInputModels> resp = new();
            DynamicParameters _dParams = new();

            _dParams.Add("@authToken", authToken, DbType.String, ParameterDirection.Input);
            _dParams.Add("@varRetCode", dbType: DbType.String, direction: ParameterDirection.Output, size: 10);
            _dParams.Add("@varRetMsg", dbType: DbType.String, direction: ParameterDirection.Output, size: 1000);

            base.OpenConnection(Constant.ConnectionString);
            var RetVal = await base.DbConnection.QueryFirstOrDefaultAsync<StreamlineTokenStatusInputModels>("spGet_AgencyAuthToken", _dParams, commandType: CommandType.StoredProcedure);

            resp.Result = RetVal;
            resp.RetCode = _dParams.Get<string>("@varRetCode");
            resp.RetMsg = _dParams.Get<string>("@varRetMsg");

            base.CloseConnection();
            return resp;
        }

        public async Task<RepositoryResult<string>> ValidateToken(string authToken)
        {
            RepositoryResult<string> resp = new();
            DynamicParameters _dParams = new();

            _dParams.Add("@authToken", authToken, DbType.String, ParameterDirection.Input);
            _dParams.Add("@varRetCode", dbType: DbType.String, direction: ParameterDirection.Output, size: 10);
            _dParams.Add("@varRetMsg", dbType: DbType.String, direction: ParameterDirection.Output, size: 1000);

            base.OpenConnection(Constant.ConnectionString);
            var RetVal = await base.DbConnection.QueryAsync("spValidate_AuthToken", _dParams, commandType: CommandType.StoredProcedure);

            resp.Result = RetVal.Count() > 0 ? "true" : "false";
            resp.RetCode = _dParams.Get<string>("@varRetCode");
            resp.RetMsg = _dParams.Get<string>("@varRetMsg");

            base.CloseConnection();
            return resp;
        }

        public async Task<RepositoryResult<string>> GetDropDownOccupation()
        {
            RepositoryResult<string> resp = new();
            DynamicParameters _dParams = new();

            _dParams.Add("@varRetCode", dbType: DbType.String, direction: ParameterDirection.Output, size: 10);
            _dParams.Add("@varRetMsg", dbType: DbType.String, direction: ParameterDirection.Output, size: 1000);

            //if(base.DbConnection != null)
            //{
            //    if (base.DbConnection.State == ConnectionState.Open)
            //    {
            //        base.CloseConnection();
            //    }
            //}

            using(var cn = new SqlConnection(Constant.ConnectionString))
            {
                cn.Open();
                var RetVal = await cn.QueryAsync<OccupationModel>("spGet_Occupation", _dParams, commandType: CommandType.StoredProcedure);

                var result = JsonConvert.SerializeObject(RetVal);

                resp.Result = result;
                resp.RetCode = _dParams.Get<string>("@varRetCode");
                resp.RetMsg = _dParams.Get<string>("@varRetMsg");
            }

            //base.OpenConnection(Constant.ConnectionString);
            //var RetVal = await base.DbConnection.QueryAsync<OccupationModel>("spGet_Occupation", _dParams, commandType: CommandType.StoredProcedure);

            //var result = JsonConvert.SerializeObject(RetVal);

            //resp.Result = result;
            //resp.RetCode = _dParams.Get<string>("@varRetCode");
            //resp.RetMsg = _dParams.Get<string>("@varRetMsg");

            //base.CloseConnection();
            return resp;
        }

        public async Task<RepositoryResult<string>> GetDropDownNature()
        {
            RepositoryResult<string> resp = new();
            DynamicParameters _dParams = new();

            _dParams.Add("@varRetCode", dbType: DbType.String, direction: ParameterDirection.Output, size: 10);
            _dParams.Add("@varRetMsg", dbType: DbType.String, direction: ParameterDirection.Output, size: 1000);

            using (var cn = new SqlConnection(Constant.ConnectionString))
            {
                cn.Open();
                var RetVal = await cn.QueryAsync<NatureModel>("spGet_NatureOfBusiness", _dParams, commandType: CommandType.StoredProcedure);

                var result = JsonConvert.SerializeObject(RetVal);

                resp.Result = result;
                resp.RetCode = _dParams.Get<string>("@varRetCode");
                resp.RetMsg = _dParams.Get<string>("@varRetMsg");
            }
            //    base.OpenConnection(Constant.ConnectionString);
            //var RetVal = await base.DbConnection.QueryAsync<NatureModel>("spGet_NatureOfBusiness", _dParams, commandType: CommandType.StoredProcedure);

            //var result = JsonConvert.SerializeObject(RetVal);

            //resp.Result = result;
            //resp.RetCode = _dParams.Get<string>("@varRetCode");
            //resp.RetMsg = _dParams.Get<string>("@varRetMsg");

            //base.CloseConnection();
            return resp;
        }

        public async Task<RepositoryResult<string>> GetOccupationCode(string occupation, string nature)
        {
            RepositoryResult<string> resp = new();
            DynamicParameters _dParams = new();

            _dParams.Add("@occupation", occupation, DbType.String, ParameterDirection.Input);
            _dParams.Add("@nature", nature, DbType.String, ParameterDirection.Input);
            _dParams.Add("@varRetCode", dbType: DbType.String, direction: ParameterDirection.Output, size: 10);
            _dParams.Add("@varRetMsg", dbType: DbType.String, direction: ParameterDirection.Output, size: 1000);

            base.OpenConnection(Constant.ConnectionString);
            var RetVal = await base.DbConnection.QueryFirstOrDefaultAsync<OccupationCodeModel>("spGet_OccupationCode", _dParams, commandType: CommandType.StoredProcedure);

            var result = JsonConvert.SerializeObject(RetVal);

            resp.Result = result;
            resp.RetCode = _dParams.Get<string>("@varRetCode");
            resp.RetMsg = _dParams.Get<string>("@varRetMsg");

            base.CloseConnection();
            return resp;
        }

        public async Task<RepositoryResult<string>> GetUserSessionDetails(string authToken)
        {
            string result = null;
            string[] DBName = { "RHBESSENTIALPROTECT", "RHBTREASURE100", "RHBTREASUREBUILDER", "RHBTREASUREFLEXIWEALTH", "RHBTREASURESUPREME" };
            RepositoryResult<string> resp = new();
            DynamicParameters _dParams = new();

            _dParams.Add("@authToken", authToken, DbType.String, ParameterDirection.Input);
            _dParams.Add("@varRetCode", dbType: DbType.String, direction: ParameterDirection.Output, size: 10);
            _dParams.Add("@varRetMsg", dbType: DbType.String, direction: ParameterDirection.Output, size: 1000);

            base.OpenConnection(Constant.ConnectionString);
            var RetVal = await base.DbConnection.QueryFirstOrDefaultAsync<UserSessionDetailsModel>("spGet_UserSessionDetails", _dParams, commandType: CommandType.StoredProcedure);

            if (RetVal != null)
            {
                if (RetVal.Purpose == "RT100")
                {
                    RetVal.Purpose = "RHBTreasure100";
                }

                RetVal.Purpose = RetVal.Purpose.ToUpper();


                if (DBName.Contains(RetVal.Purpose))
                {
                    var temp = await GetUserDetails(authToken, RetVal.Purpose, RetVal.Id);
                    result = temp.Result;
                }
            }

            resp.Result = result;
            resp.RetCode = _dParams.Get<string>("@varRetCode");
            resp.RetMsg = _dParams.Get<string>("@varRetMsg");

            base.CloseConnection();
            return resp;
        }

        private async Task<RepositoryResult<string>> GetUserDetails(string authToken, string table, string userId)
        {
            RepositoryResult<string> resp = new();
            DynamicParameters _dParams = new();

            _dParams.Add("@authToken", authToken, DbType.String, ParameterDirection.Input);
            _dParams.Add("@tableName", table, DbType.String, ParameterDirection.Input);
            _dParams.Add("@UserId", userId, DbType.String, ParameterDirection.Input);
            _dParams.Add("@varRetCode", dbType: DbType.String, direction: ParameterDirection.Output, size: 10);
            _dParams.Add("@varRetMsg", dbType: DbType.String, direction: ParameterDirection.Output, size: 1000);

            base.OpenConnection(Constant.ConnectionString);
            var RetVal = await base.DbConnection.QueryFirstOrDefaultAsync<UserDetails2Model>("spGet_UserDetails", _dParams, commandType: CommandType.StoredProcedure);

            var result = JsonConvert.SerializeObject(RetVal);

            resp.Result = result;
            resp.RetCode = _dParams.Get<string>("@varRetCode");
            resp.RetMsg = _dParams.Get<string>("@varRetMsg");

            base.CloseConnection();
            return resp;
        }
    }
}
