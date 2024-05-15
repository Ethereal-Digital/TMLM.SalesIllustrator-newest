using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TMLM.SalesIllustrator.Shared.Models.FactFind
{
    public class UpdateFactFindInputModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int Age { get; set; }

        public decimal Amount { get; set; }

        public decimal MoneyMarket { get; set; }

        public decimal RealEstateProperty { get; set; }

        public decimal StockUnitTrust { get; set; }

        public decimal InsuranceProtectionPlan { get; set; }

        public decimal InsuranceSavingPlan { get; set; }
    }
}
