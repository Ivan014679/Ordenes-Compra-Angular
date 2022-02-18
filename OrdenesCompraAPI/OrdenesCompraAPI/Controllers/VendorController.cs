using OrdenesCompraAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace OrdenesCompraAPI.Controllers
{
    [RoutePrefix("Api/Vendor")]
    public class VendorController : ApiController
    {
        [HttpGet]
        [Route("Get")]
        public List<Vendor> GetVendors()
        {
            Vendor vendor = new Vendor();
            return vendor.GetVendors();
        }

        [HttpGet]
        [Route("Get/{Id}")]
        public Vendor GetVendor(string Id)
        {
            Vendor vendor = new Vendor();
            return vendor.GetVendor(Convert.ToInt32(Id));
        }

        [HttpPost]
        [Route("Set")]
        public IHttpActionResult SetVendor(Vendor vendor)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            vendor.SetVendor();
            return Ok(vendor);
        }

        [HttpPut]
        [Route("Update")]
        public IHttpActionResult UpdateVendor(Vendor vendor)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            vendor.UpdateVendor();
            return Ok(vendor);
        }

        [HttpDelete]
        [Route("Delete")]
        public IHttpActionResult DeleteVendor(int id)
        {
            Vendor vendor = new Vendor();
            vendor.DeleteVendor(id);

            return Ok(vendor);
        }
    }
}
