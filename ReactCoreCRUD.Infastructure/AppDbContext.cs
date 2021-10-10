using Microsoft.EntityFrameworkCore;
using ReactCoreCRUD.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace ReactCoreCRUD.Infastructure
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
        {

        }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<EmployeeType> EmployeeTypes { get; set; }
    }
}
