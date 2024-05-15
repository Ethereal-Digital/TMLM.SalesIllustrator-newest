using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TMLM.SalesIllustrator.Shared.Models.UserSession
{
    public class CreateUserSessionInputModel
    {
        public string AuthToken { get; set; }

        public string AgentCode { get; set; }
    }
}
