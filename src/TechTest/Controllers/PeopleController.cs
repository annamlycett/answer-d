using System;
using Microsoft.AspNetCore.Mvc;
using TechTest.Repositories;
using TechTest.Repositories.Models;

namespace TechTest.Controllers
{
    [Route("api/people")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        public PeopleController(IPersonRepository personRepository)
        {
            this.PersonRepository = personRepository;
        }

        private IPersonRepository PersonRepository { get; }

        [HttpGet]
        public IActionResult GetAll()
        {
            // TODO: Step 1
            //
            // Implement a JSON endpoint that returns the full list
            // of people from the PeopleRepository. If there are zero
            // people returned from PeopleRepository then an empty
            // JSON array should be returned.

            // Anna Lycett:
            // After a bit of research on JSON and endpoints, I am 
            // guessing that the task would involve the following:
            // -A null check on the JSON array. If there are no 
            // people in the PeopleRepository, then the value 
            // returned should be { }
            // -If there are people in the PeopleRepository, a for-in
            // loop through the array, which would return all the 
            // values required.


            throw new NotImplementedException();
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            // TODO: Step 2
            //
            // Implement a JSON endpoint that returns a single person
            // from the PeopleRepository based on the id parameter.
            // If null is returned from the PeopleRepository with
            // the supplied id then a NotFound should be returned.

            // Anna Lycett:
            // My understanding is that this would involve getting
            // the value similar to the one in step 1, with the
            // exception of the call containing [id] to specify the 
            // index required and would therefore return a single
            // value rather than the whole array.
            // It would also require an if or a switch conditional 
            // statement which in case of value returned being null, 
            // would return the string 'NotFound' as specified in 
            // the instructions above. 


            throw new NotImplementedException();
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, PersonUpdate personUpdate)
        {
            // TODO: Step 3
            //
            // Implement an endpoint that receives a JSON object to
            // update a person using the PeopleRepository based on
            // the id parameter. Once the person has been successfully
            // updated, the person should be returned from the endpoint.
            // If null is returned from the PeopleRepository then a
            // NotFound should be returned.

            // Anna Lycett:
            // I believe that this would involve a statement not
            // unlike PeopleRepository.Person[id] = <value to update
            // the object>.
            // There will also need to be a null check, which if
            // true, would return 'NotFound' as specified in the
            // instructions.


            throw new NotImplementedException();
        }
    }
}