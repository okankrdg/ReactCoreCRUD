using Microsoft.EntityFrameworkCore;
using ReactCoreCRUD.Domain.Entities;
using ReactCoreCRUD.Domain.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ReactCoreCRUD.Infastructure.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly AppDbContext db;
        public EmployeeService(AppDbContext db)
        {
             this.db = db;
        }

        public void Add(Employee employee)
        {
            db.Add(employee);
            db.SaveChanges();
        }

        public void Delete(Employee employee)
        {
            employee.IsDeleted = true;
            db.Update(employee);
            db.SaveChanges();
        }

        public Employee Get(int id)
        {
            return db.Employees.Include(e => e.EmployeeType).FirstOrDefault(e => e.Id == id && !e.IsDeleted);
        }

        public IEnumerable<Employee> GetAll()
        {
            return db.Employees.Include(e => e.EmployeeType).Where(em => !em.IsDeleted).AsEnumerable();
        }

        public void Update(Employee employee)
        {
            db.Employees.Update(employee);
            db.SaveChanges();
        }
        public IEnumerable<EmployeeType> GetEmployeeTypes()
        {
            return db.EmployeeTypes.ToList();
        }
    }
}
