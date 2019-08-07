using Dockerize.Core;
using Dockerize.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dockerize.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : Controller
    {
        ApplicationDbContext applicationDbContext;

        public BookController(ApplicationDbContext applicationDbContext)
        {
            this.applicationDbContext = applicationDbContext;
        }

        // GET api/Book
        [HttpGet]
        public ActionResult<IEnumerable<Book>> Get()
        {
            return applicationDbContext.BookContext.ToList();
        }

        // GET api/Book/5
        [HttpGet("{id}")]
        public ActionResult<Book> Get(int id)
        {
            Book book = applicationDbContext.BookContext.Find(id);

            if (book == null)
            {
                return NotFound();
            }

            return book;
        }

        // POST api/Book
        [HttpPost]
        public ActionResult<Book> Post(Book book)
        {
            applicationDbContext.BookContext.Add(book);
            applicationDbContext.SaveChanges();

            return CreatedAtAction("Get", new { id = book.Id }, book);
        }

        // PUT api/Book/5
        [HttpPut("{id}")]
        public ActionResult<Book> Put(int id, Book book)
        {
            if (id != book.Id)
            {
                return BadRequest();
            }

            applicationDbContext.Entry(book).State = EntityState.Modified;
            applicationDbContext.SaveChanges();

            return NoContent();
        }

        // DELETE api/Book/5
        [HttpDelete("{id}")]
        public ActionResult<Book> Delete(int id)
        {
            Book book = applicationDbContext.BookContext.Find(id);

            if (book == null)
            {
                return NotFound();
            }

            applicationDbContext.BookContext.Remove(book);
            applicationDbContext.SaveChanges();

            return NoContent();
        }
    }
}
