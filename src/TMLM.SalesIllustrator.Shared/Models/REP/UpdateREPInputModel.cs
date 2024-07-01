using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TMLM.SalesIllustrator.Shared.Models.REP
{
    public class UpdateREPInputModel
    {
        public string Id { get; set; }
        public string DesiredPlan { get; set; }
        public string Persona { get; set; }
        public int PremiumPaymentTerm { get; set; }
        public string CoverageTerm { get; set; }

        public int BasicSum { get; set; }
    }

    public class CreateREPInputModel
    {
        public string Name { get; set; }
        public string Category { get; set; }
        public string Category2 { get; set; }
        public string Risk { get; set; }
        public int Age { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Gender { get; set; }
        public string Martial { get; set; }
        public string Child { get; set; }
        public string Occupation { get; set; }
        public string Industry { get; set; }
        public string Id { get; set; }
    }
}
