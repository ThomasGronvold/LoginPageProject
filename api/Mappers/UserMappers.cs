using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.User;
using api.Models;

namespace api.Mappers
{
    public static class UserMappers
    {
        public static UserDto ToUserDto(this User userModel)
        {
            return new UserDto
            {
                Id = userModel.Id,
                Username = userModel.Username,
            };
        }

        public static User ToUserFromCreateDto(this CreateUserRequestDto UserDto)
        {
            return new User
            {
                Username = UserDto.Username,
                Password = UserDto.Password
            };
        }
    }
}