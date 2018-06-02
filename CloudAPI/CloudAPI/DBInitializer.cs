using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudAPI
{
    public class DBInitializer
    {
        public static void Initialize(LibraryContext context)
        {
            context.Database.EnsureCreated();

            if (!context.trainers.Any())
            {
                List<Trainer> trainerslist = new List<Trainer>();
                trainerslist.Add(new Trainer()
                {
                    Name = "Ash Ketchum",
                    Age = 10
                });

                trainerslist.Add(new Trainer()
                {
                    Name = "Misty",
                    Age = 15
                });

                trainerslist.Add(new Trainer()
                {
                    Name = "Brock",
                    Age = 22
                });
                for (int i = 0; i < trainerslist.Count; i++)
                {
                    context.trainers.Add(trainerslist.ElementAt(i));
                }
                context.SaveChanges();

            }

            if (!context.pokemons.Any())
            {
                List<pokemon> pokemonList = new List<pokemon>();
                pokemonList.Add(new pokemon()
                {
                    Name = "Bulbasaur",
                    Type = "Grass, Poison"
                });

                pokemonList.Add(new pokemon()
                {
                    Name = "Ivysaurus",
                    Type = "Grass, Poison"
                });

                pokemonList.Add(new pokemon()
                {
                    Name = "Venusaurus",
                    Type = "Grass, Poison"
                });

                pokemonList.Add(new pokemon()
                {
                    Name = "Charmander",
                    Type = "Fire"
                });

                pokemonList.Add(new pokemon()
                {
                    Name = "Charmeleon",
                    Type = "Fire"
                });

                pokemonList.Add(new pokemon()
                {
                    Name = "Charizard",
                    Type = "Fire, Flying"
                });

                pokemonList.Add(new pokemon()
                {
                    Name = "Squirtle",
                    Type = "Water"
                });

                pokemonList.Add(new pokemon()
                {
                    Name = "Wartortle",
                    Type = "Water"
                });

                pokemonList.Add(new pokemon()
                {
                    Name = "Blastoise",
                    Type = "Water"
                });

                for (int i = 0; i < pokemonList.Count; i++)
                {
                    context.pokemons.Add(pokemonList.ElementAt(i));
                }

                context.SaveChanges();
            }
        }
    }
}
