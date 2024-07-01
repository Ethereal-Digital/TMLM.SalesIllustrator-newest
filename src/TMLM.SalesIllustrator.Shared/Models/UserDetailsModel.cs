using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TMLM.SalesIllustrator.Shared.Models
{
    public class UserDetailsModel
    {
        public string? Name { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string? Gender { get; set; }
    }

    public class RTBUserDetailsModel
    {
        public string? Name { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string? Gender { get; set; }
        public string? Category { get; set; }
    }

    public class UserDetails2Model
    {
        public string? Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int Age { get; set; }
        public string? Gender { get; set; }
        public string? MartialStatus { get; set; }
        public string? Children { get; set; }
        public string? Occupation { get; set; }
        public string? IndustryCode { get; set; }
        public string? Category { get; set; }
        public string? Category2 { get; set; }
        public string? Risk { get; set; }
    }

    public class UserSessionDetailsModel
    {
        public string? Id { get; set; }
        public string? Purpose { get; set; }
    }
}
