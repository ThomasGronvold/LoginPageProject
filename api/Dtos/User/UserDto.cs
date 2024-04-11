using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.User
{

    // Get Requests Dto's
    public class UserDto
    {
        public int Id { get; set; }
        public required string Username { get; set; }
    }

    // Post requests Dto's
    public class CreateUserRequestDto
    {
        public required string Username { get; set; }
        public required string Password { get; set; }
    }

    // Put request Dto's
    public class UpdateUserRequestDto
    {
        public required string Username { get; set; }
        public required string Password { get; set; }
    }
}