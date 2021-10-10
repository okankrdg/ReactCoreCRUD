using ReactCoreCRUD.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace ReactCoreCRUD.Domain.Services
{
    public interface IEmployeeService
    {
        void Add(Employee employee);
        void Update(Employee employee);
        void Delete(Employee employee);
        Employee Get(int id);
        IEnumerable<Employee> GetAll();
        IEnumerable<EmployeeType> GetEmployeeTypes();
    }
}
