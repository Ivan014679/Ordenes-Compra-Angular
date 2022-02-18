using OrdenesCompraAPI.Models.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OrdenesCompraAPI.Models
{
    public class City
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public List<City> GetCities()
        {
            CityDao cdao = new CityDao();
            return cdao.GetCities();
        }
    }
}