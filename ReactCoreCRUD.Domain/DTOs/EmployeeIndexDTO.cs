using System;
using System.Collections.Generic;
using System.Text;

namespace ReactCoreCRUD.Domain.DTOs
{
    public class EmployeeIndexDTO
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string EmployeeTypeName { get; set; }
        public int? Age { get; set; }
    }
}
