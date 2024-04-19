using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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
        [Required]
        [MinLength(3, ErrorMessage = "The username must be at least 3 characters long.")]
        [MaxLength(15, ErrorMessage = "The username cannot exceed 15 characters in length.")]
        public required string Username { get; set; }
        [Required]
        [MinLength(8, ErrorMessage = "The password must be at least 8 characters long.")]
        [MaxLength(30, ErrorMessage = "The password cannot exceed 30 characters in length.")]
        public required string Password { get; set; }
    }

    // Put request Dto's
    public class UpdateUserRequestDto
    {
        [Required]
        [MinLength(3, ErrorMessage = "The username must be at least 3 characters long.")]
        [MaxLength(15, ErrorMessage = "The username cannot exceed 15 characters in length.")]
        public required string Username { get; set; }
        [Required]
        [MinLength(8, ErrorMessage = "The password must be at least 8 characters long.")]
        [MaxLength(30, ErrorMessage = "The password cannot exceed 30 characters in length.")]
        public required string Password { get; set; }
    }
}