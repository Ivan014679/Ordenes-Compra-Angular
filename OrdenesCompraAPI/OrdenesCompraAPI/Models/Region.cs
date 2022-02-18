using OrdenesCompraAPI.Models.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OrdenesCompraAPI.Models
{
    public class Region
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public List<Region> GetRegions()
        {
            RegionDao rdao = new RegionDao();
            return rdao.GetRegions();
        }
    }
}