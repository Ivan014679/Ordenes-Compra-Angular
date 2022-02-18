using OrdenesCompraAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace OrdenesCompraAPI.Controllers
{
    [RoutePrefix("Api/Part")]
    public class PartController : ApiController
    {
        [HttpGet]
        [Route("Get")]
        public List<Part> GetParts()
        {
            Part part = new Part();
            return part.GetParts();
        }

        [HttpGet]
        [Route("Get/{Id}")]
        public Part GetPart(string Id)
        {
            Part part = new Part();
            return part.GetPart(Convert.ToInt32(Id));
        }

        [HttpPost]
        [Route("Set")]
        public IHttpActionResult SetPart(Part part)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            part.SetPart();
            return Ok(part);
        }

        [HttpPut]
        [Route("Update")]
        public IHttpActionResult UpdatePart(Part part)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            part.UpdatePart();
            return Ok(part);
        }

        [HttpDelete]
        [Route("Delete")]
        public IHttpActionResult DeletePart(int id)
        {
            Part part = new Part();
            part.DeletePart(id);

            return Ok(part);
        }
    }
}
