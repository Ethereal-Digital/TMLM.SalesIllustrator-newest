using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TMLM.SalesIllustrator.Shared.Models.REP
{
    public class UpdateREPInputModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int Age { get; set; }

        public string Gender { get; set; }
        public string Category { get; set; }
        public string DesiredPlan { get; set; }
        public string Persona { get; set; }
        public int PremiumPaymentTerm { get; set; }
        public string CoverageTerm { get; set; }

        public int BasicSum { get; set; }
    }
}
