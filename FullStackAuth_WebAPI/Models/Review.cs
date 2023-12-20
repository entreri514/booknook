using FullStackAuth_WebAPI.Models;
using Microsoft.Extensions.Primitives;
using System.ComponentModel.DataAnnotations;

namespace booknook_WebAPI.Models
{
    public class Review
    {
        [Key]
        public int id { get; set; }
        public string BookId { get; set; }

        public string Text { get; set; }
        public double Rating { get; set; }
        public string UserId { get; set; }
        public User User { get; set; }
    }
}
