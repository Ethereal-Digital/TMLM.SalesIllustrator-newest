using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TMLM.SalesIllustrator.Shared.Models.RT100
{
    public class UpdateRT100InputModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int Age { get; set; }

        public string Gender { get; set; }

        public string DesiredPlan { get; set; }

        public string Category { get; set; }

        public int PremiumPaymentTerm { get; set; }

        public decimal PremiumAmountAnnually { get; set; }
    }
}
