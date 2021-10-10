using AutoMapper;
using ReactCoreCRUD.Domain.DTOs;
using ReactCoreCRUD.Domain.Entities;

namespace ReactCoreCRUD.Web
{
    public class MapperProfile:Profile
    {
        public MapperProfile()
        {
            CreateMap<Employee, EmployeeIndexDTO>()
                .ForMember(src => src.EmployeeTypeName, opts => opts.MapFrom(dest => dest.EmployeeType.Name));
            CreateMap<Employee, EmployeeDTO>().ReverseMap();
        }
    }
}
