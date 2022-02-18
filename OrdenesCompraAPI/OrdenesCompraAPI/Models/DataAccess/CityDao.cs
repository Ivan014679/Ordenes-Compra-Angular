using OrdenesCompraAPI.Models.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OrdenesCompraAPI.Models.DataAccess
{
    public class CityDao
    {
        public List<City> GetCities()
        {
            List<City> cities = new List<City>();
            using (var context = new PurchaseOrdersEntities())
            {
                var query = (from d in context.City select d).ToList();
                foreach (var item in query)
                {
                    City city = new City();
                    city.Id = item.Id;
                    city.Name = item.Name;

                    cities.Add(city);
                }
            }
            return cities;
        }
    }
}