using FullStackAuth_WebAPI.DataTransferObjects;
using System.ComponentModel.DataAnnotations;

namespace booknook_WebAPI.DataTransferObjects
{

    public class BookDetailsDto
    {
        [Key]
        public double ratingAverage { get; set; }       
        public bool Favorited { get; set; }
        public List<ReviewWithUserDto> Reviews { get; set; }


    }
}
