using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TMLM.SalesIllustrator.Shared.Models
{
    public class RepositoryResult<T> where T : class
    {
        public string RetCode { get; set; }
        public string RetMsg { get; set; }
        public T Result { get; set; }

        public RepositoryResult(T result, string retCode, string retMsg)
        {
            RetCode = retCode;
            RetMsg = retMsg;
            Result = result;
        }

        public RepositoryResult() { }
    }
}
