using OrdenesCompraAPI.Models.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OrdenesCompraAPI.Models.DataAccess
{
    public class VendorDao
    {
        public List<Vendor> GetVendors()
        {
            List<Vendor> vendors = new List<Vendor>();
            using (var context = new PurchaseOrdersEntities())
            {
                var query = (from d in context.Vendor select d).ToList();
                foreach (var item in query)
                {
                    Vendor vendor = new Vendor();
                    vendor.Id = item.Id;
                    vendor.Name = item.Name;
                    vendor.Address = item.Address;
                    vendor.City = item.City1.Name;
                    vendor.Phone = item.Phone;
                    vendor.Region = item.Region1.Name;

                    vendors.Add(vendor);
                }
            }
            return vendors;
        }

        public Vendor GetVendor(int id)
        {
            using (var context = new PurchaseOrdersEntities())
            {
                Vendor vendor = new Vendor();
                var record = (from d in context.Vendor select d).Where(d => d.Id.Equals(id)).FirstOrDefault();
                vendor.Id = record.Id;
                vendor.Name = record.Name;
                vendor.Address = record.Address;
                vendor.City = Convert.ToString(record.City);
                vendor.Phone = record.Phone;
                vendor.Region = Convert.ToString(record.Region);
                return vendor;
            }
        }

        public void SetVendor(Vendor vendor)
        {
            using (var context = new PurchaseOrdersEntities())
            {
                DataModel.Vendor v = new DataModel.Vendor();
                v.Name = vendor.Name;
                v.Address = vendor.Address;
                v.City = Convert.ToInt32(vendor.City);                
                v.Phone = vendor.Phone;
                v.Region = Convert.ToInt32(vendor.Region);
                context.Vendor.Add(v);
                context.SaveChanges();
            }
        }

        public void UpdateVendor(Vendor vendor)
        {
            using (var context = new PurchaseOrdersEntities())
            {
                var query = (from d in context.Vendor select d).Where(d => d.Id.Equals(vendor.Id)).FirstOrDefault();
                query.Name = vendor.Name;
                query.Address = vendor.Address;
                query.City = Convert.ToInt32(vendor.City);
                query.Phone = vendor.Phone;
                query.Region = Convert.ToInt32(vendor.Region);
                context.SaveChanges();
            }
        }

        public void DeleteVendor(int id)
        {
            using (var context = new PurchaseOrdersEntities())
            {
                var record = (from d in context.Vendor select d).Where(d => d.Id.Equals(id)).FirstOrDefault();
                context.Vendor.Remove(record);
                context.SaveChanges();
            }
        }
    }
}