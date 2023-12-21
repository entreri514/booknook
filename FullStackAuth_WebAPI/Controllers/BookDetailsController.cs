using booknook_WebAPI.DataTransferObjects;
using FullStackAuth_WebAPI.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MySqlX.XDevAPI.CRUD;

namespace booknook_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookDetailsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        

        [HttpGet("{bookId}")]

        public IActionResult Get(string bookId)
        {
            try
            {
                var BookDetailsObj = new BookDetailsDto
                {
                    ratingAverage = 0,
                    Favorited = false,
                    Reviews = _context.Reviews.Where(b => b.bookId),
                };
                var book = BookDetailsObj;
                if (book == null)
                {
                    return NotFound();
                }
                return StatusCode(200, book);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        

    }
}
