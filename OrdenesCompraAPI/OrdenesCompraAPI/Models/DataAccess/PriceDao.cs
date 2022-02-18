using OrdenesCompraAPI.Models.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OrdenesCompraAPI.Models.DataAccess
{
    public class PriceDao
    {
        public List<Price> GetPrices()
        {
            List<Price> prices = new List<Price>();
            using (var context = new PurchaseOrdersEntities())
            {
                var query = (from d in context.Price select d).ToList();
                foreach (var item in query)
                {
                    Price price = new Price();
                    price.Vendor = item.Vendor;
                    price.Vendor_Name = item.Vendor1.Name;
                    price.Part = item.Part;
                    price.Part_Description = item.Part1.Description;
                    price.CatalogNo = item.CatalogNo;
                    price.Value = item.Price1;

                    prices.Add(price);
                }
            }
            return prices;
        }

        public Price GetPrice(int vendor, int part)
        {
            using (var context = new PurchaseOrdersEntities())
            {
                Price price = new Price();
                var record = (from d in context.Price select d).Where(d => d.Vendor.Equals(vendor) && d.Part.Equals(part)).FirstOrDefault();
                price.Vendor = record.Vendor;
                price.Vendor_Name = record.Vendor1.Name;
                price.Part = record.Part;
                price.Part_Description = record.Part1.Description;
                price.CatalogNo = record.CatalogNo;
                price.Value = record.Price1;

                return price;
            }
        }

        public void SetPrice(Price price)
        {
            using (var context = new PurchaseOrdersEntities())
            {
                DataModel.Price p = new DataModel.Price();
                p.Vendor = price.Vendor;
                p.Part = price.Part;
                p.CatalogNo = price.CatalogNo;
                p.Price1 = price.Value;

                context.Price.Add(p);
                context.SaveChanges();
            }
        }

        public void UpdatePrice(Price price)
        {
            using (var context = new PurchaseOrdersEntities())
            {                
                var query = (from d in context.Price where d.Vendor == price.Vendor && d.Part == price.Part select d).FirstOrDefault();
                query.Vendor = price.Vendor;
                query.Part = price.Part;
                query.CatalogNo = price.CatalogNo;
                query.Price1 = price.Value;

                context.SaveChanges();
            }
        }

        public void DeletePrice(int vendor, int part)
        {
            using (var context = new PurchaseOrdersEntities())
            {
                var record = (from d in context.Price select d).Where(d => d.Vendor.Equals(vendor) && d.Part.Equals(part)).FirstOrDefault();
                context.Price.Remove(record);
                context.SaveChanges();
            }
        }
    }
}