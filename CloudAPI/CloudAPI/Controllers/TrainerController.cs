﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CloudAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Trainer")]
    public class TrainerController : Controller
    {
        // GET: api/Trainer
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Trainer/5
        [HttpGet]
        public string Get(int id)
        {
            return "value";
        }
        
        // POST: api/Trainer
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }
        
        // PUT: api/Trainer/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
