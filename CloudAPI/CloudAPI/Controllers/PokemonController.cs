using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CloudAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Pokemon")]
    public class PokemonController : Controller
    {
        private readonly LibraryContext context;

        public PokemonController(LibraryContext context)
        {
            this.context = context;
        }
        // GET: api/Pokemon
        [HttpGet]
        public List<pokemon> GetAllPokemon(string type, int? page, int length = 5)
        {
            IQueryable<pokemon> query = context.pokemons;

            if (!string.IsNullOrWhiteSpace(type))
            {
                query = query.Where(d => d.Type == type);
            }

            if (page.HasValue)
            {
                query = query.Skip(page.Value * length);
            }

            query = query.Take(length);

            return query.ToList();
        }

        // GET: api/Pokemon/5
        [HttpGet("{id}", Name = "Get")]
        public IActionResult Getpokemon(int id)
        {
            var pokemon = context.pokemons.Find(id);
            if (pokemon == null)
            {
                return NotFound();
            } return Ok(pokemon);
        }
        
        // POST: api/Pokemon
        [HttpPost]
        public void Post([FromBody] pokemon newpokemon)
        {
            context.pokemons.Add(newpokemon);
            context.SaveChanges();
        }
        
        // PUT: api/Pokemon/5
        [HttpPut("{id}")]
        public IActionResult Put([FromBody] pokemon updatepokemon)
        {
            pokemon orgpokemon = context.pokemons.Find(updatepokemon.ID);
            if (orgpokemon == null)
            {
                return NotFound();
            }

            orgpokemon.Name = updatepokemon.Name;
            orgpokemon.Type = updatepokemon.Type;

            context.SaveChanges();
            return Ok(orgpokemon);
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var pokemon = context.pokemons.Find(id);
            if (pokemon == null)
            {
                return NotFound();
            }

            context.pokemons.Remove(pokemon);
            context.SaveChanges();
            return NoContent();
        }
    }
}
