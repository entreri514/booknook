using FullStackAuth_WebAPI.Models;
using System.ComponentModel.DataAnnotations;

namespace booknook_WebAPI.Models
{
    public class Favorite
    {
        [Key]
        public int id { get; set; }
        public string OwnerId { get; set; }
        public User Owner { get; set; }
    }
}
