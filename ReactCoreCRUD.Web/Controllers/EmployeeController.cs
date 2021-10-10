using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactCoreCRUD.Domain.DTOs;
using ReactCoreCRUD.Domain.Entities;
using ReactCoreCRUD.Domain.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactCoreCRUD.Web.Controllers
{
    [Route("api/employee")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private IEmployeeService EmployeeService;
        private IMapper Mapper;
        public EmployeeController(IEmployeeService employeeService, IMapper mapper)
        {
            EmployeeService = employeeService;
            Mapper = mapper;
        }
        [HttpGet]
        public IActionResult Get(int? id)
        {
            if (id.HasValue)
            {
                var employee = EmployeeService.Get(id.Value);
                if (employee != null)
                {
                    var dto = Mapper.Map<EmployeeDTO>(employee);
                    return Ok(dto);
                }
                else
                {
                    return NotFound();
                }

            }
            var employees = EmployeeService.GetAll();
            var model = Mapper.Map<IEnumerable<EmployeeIndexDTO>>(employees);
            return Ok(model);
        }
        [HttpPost]
        public IActionResult Post(EmployeeDTO dto)
        {
            if (!ModelState.IsValid)
            {
                return Ok(ModelState);
            }
            var employee = Mapper.Map<Employee>(dto);
            EmployeeService.Add(employee);
            return Ok();
        }
        [HttpPut]
        public IActionResult Update(EmployeeDTO model, int id)
        {
            if (!ModelState.IsValid)
            {
                return Ok(ModelState);
            }
            var employee = EmployeeService.Get(id);
            employee = Mapper.Map(model, employee);
            EmployeeService.Update(employee);
            return Ok();
        }
        [HttpDelete]
        public IActionResult Delete(int? id)
        {
            if (id.HasValue)
            {
                var employee = EmployeeService.Get(id.Value);
                if (employee != null)
                {
                    EmployeeService.Delete(employee);
                    return Ok();
                }
                else
                {
                    return NotFound();
                }

            }
            return NotFound();
        }
        [Route("/api/employeeTypes")]
        [HttpGet]
        public IActionResult GetEmployeeTypes()
        {
            
            var employees = EmployeeService.GetEmployeeTypes();
            return Ok(employees);
        }
    }
}
