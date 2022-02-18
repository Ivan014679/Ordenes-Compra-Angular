using OrdenesCompraAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace OrdenesCompraAPI.Controllers
{
    public class RegionController : ApiController
    {
        [HttpGet]
        public List<Region> GetRegions()
        {
            Region region = new Region();
            return region.GetRegions();
        }
    }
}
