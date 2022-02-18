using OrdenesCompraAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace OrdenesCompraAPI.Controllers
{
    [RoutePrefix("Api/Price")]
    public class PriceController : ApiController
    {
        [HttpGet]
        [Route("Get")]
        public List<Price> GetPrices()
        {
            Price price = new Price();
            return price.GetPrices();
        }

        [HttpGet]
        [Route("Get/{Vendor}-{Part}")]
        public Price GetPrice(string Vendor, string Part)
        {
            Price price = new Price();
            return price.GetPrice(Convert.ToInt32(Vendor), Convert.ToInt32(Part));
        }

        [HttpPost]
        [Route("Set")]
        public IHttpActionResult SetPrice(Price price)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            price.SetPrice();
            return Ok(price);
        }

        [HttpPut]
        [Route("Update")]
        public IHttpActionResult UpdatePrice(Price price)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            price.UpdatePrice();
            return Ok(price);
        }

        [HttpDelete]
        [Route("Delete")]
        public IHttpActionResult DeletePrice(int vendor, int part)
        {
            Price price = new Price();
            price.DeletePrice(vendor, part);

            return Ok(price);
        }
    }
}
