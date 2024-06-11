using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TMLM.SalesIllustrator.Shared.Models.SalesIllustrator
{
    public class UpdateSupremeInputModel
    {
        public string Name { get; set; }

        public string Category { get; set; }
        public string Category2 { get; set; }
        public string Risk { get; set; }

        public DateTime DateOfBirth { get; set; }

        public string Gender { get; set; }
        public string Martial { get; set; }
        public string Child { get; set; }
        public string Occupation { get; set; }
        public string Industry { get; set; }

        public string CoverageYear { get; set; }

        public decimal PremiumAmountAnnually { get; set; }

        public string Rtu { get; set; }

        public string Id { get; set; }
    }
}
