using System.Data;
using System.Data.SqlClient;

namespace TMLM.SalesIllustrator.API.Repositories
{
    public abstract class BaseRepository
    {
        public IDbConnection DbConnection;
        protected bool dbRef;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="ConnStr"></param>
        /// <exception cref="ApplicationException"></exception>
        public BaseRepository(IDbConnection _dbConnection)
        {
            DbConnection = _dbConnection;
            this.dbRef = true;
        }

        protected BaseRepository() { }

        public void OpenConnection(string connectionString)
        {
            this.DbConnection = new SqlConnection(connectionString);

            if (this.DbConnection.State == ConnectionState.Open)
                this.DbConnection.Close();

            //this.dbConnection.Open();
            this.dbRef = false;
        }

        public void CloseConnection()
        {
            this.DbConnection.Close();
        }
    }
}
