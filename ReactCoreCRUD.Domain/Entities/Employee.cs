using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ReactCoreCRUD.Domain.Entities
{
    public class Employee
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime? BirthDate { get; set; }
        public int EmployeeTypeId { get; set; }
        public bool IsDeleted { get; set; }
        public string Email { get; set; }

        public virtual EmployeeType EmployeeType { get; set; }

        [NotMapped]
        public int? Age => BirthDate.HasValue ? (DateTime.Now - BirthDate.Value).Days / 365 : (int?)null;
    }
}
