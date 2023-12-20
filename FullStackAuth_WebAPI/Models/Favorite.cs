using FullStackAuth_WebAPI.Models;
using System.ComponentModel.DataAnnotations;

namespace booknook_WebAPI.Models
{
    public class Favorite
    {
        [Key]
        public int id { get; set; }
        public string BookId { get; set; }
        public string Title { get; set; }
        public string ThumbnailUrl { get; set; }
        public string UserId { get; set; }
        public User User { get; set; }
    }
}
