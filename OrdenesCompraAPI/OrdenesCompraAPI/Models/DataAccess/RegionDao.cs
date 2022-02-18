using OrdenesCompraAPI.Models.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OrdenesCompraAPI.Models.DataAccess
{
    public class RegionDao
    {
        public List<Region> GetRegions()
        {
            List<Region> regions = new List<Region>();
            using (var context = new PurchaseOrdersEntities())
            {
                var query = (from d in context.Region select d).ToList();
                foreach (var item in query)
                {
                    Region region = new Region();
                    region.Id = item.Id;
                    region.Name = item.Name;

                    regions.Add(region);
                }
            }
            return regions;
        }
    }
}