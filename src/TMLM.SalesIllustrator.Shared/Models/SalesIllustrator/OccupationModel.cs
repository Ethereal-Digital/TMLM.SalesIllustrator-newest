using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TMLM.SalesIllustrator.Shared.Models.SalesIllustrator
{
    public class OccupationModel
    {
        public string? Occupation { get; set; }
    }

    public class NatureModel
    {
        public string? NatureOfBusiness { get; set; }
    }

    public class OccupationCodeModel
    {
        public string? code { get; set; }
        public string? IndustryCode { get; set; }
    }
}
