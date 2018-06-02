using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace CloudAPI
{
    public class LibraryContext : DbContext
    {
        public DbSet<pokemon> pokemons { get; set; }
        public DbSet<Trainer> trainers { get; set; }
        public LibraryContext(DbContextOptions<LibraryContext> options) : base(options)
        {
        }
    }
}
