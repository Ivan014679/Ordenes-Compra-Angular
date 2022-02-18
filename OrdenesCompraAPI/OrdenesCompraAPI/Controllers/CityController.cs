using OrdenesCompraAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace OrdenesCompraAPI.Controllers
{
    public class CityController : ApiController
    {
        [HttpGet]
        public List<City> GetCities()
        {
            City city = new City();
            return city.GetCities();
        }
    }
}
