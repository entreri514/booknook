using FullStackAuth_WebAPI.DataTransferObjects;

namespace booknook_WebAPI.DataTransferObjects
{
    public class BookDetailsDto
    {       
        public double ratingAverage { get; set; }       
        public bool Favorited { get; set; }
        public List<ReviewWithUserDto> Reviews { get; set; }


    }
}
