using FullStackAuth_WebAPI.DataTransferObjects;

namespace booknook_WebAPI.DataTransferObjects
{
    public class ReviewWithUserDto
    {
        public int id { get; set; }
        public string BookId { get; set; }
        public string Text { get; set; }
        public double Rating { get; set; }
        public UserForDisplayDto User { get; set; }
    }
}
