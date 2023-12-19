using System.ComponentModel.DataAnnotations;

namespace booknook_WebAPI.Models
{
    public class Review
    {
        [Key]
        public int id { get; set; }
        public string OwnerId { get; set; }
    }
}
