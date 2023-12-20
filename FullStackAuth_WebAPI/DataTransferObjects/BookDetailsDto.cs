using FullStackAuth_WebAPI.DataTransferObjects;

namespace booknook_WebAPI.DataTransferObjects
{
    public class BookDetailsDto
    {
        public int Id { get; set; }
        public string BookId { get; set; }
        public string Title { get; set; }
        public string ThunbnailUrl { get; set; }
        public string UserId { get; set; }
        public UserForDisplayDto User { get; set; }


    }
}
