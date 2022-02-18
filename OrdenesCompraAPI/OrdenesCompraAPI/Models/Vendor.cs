using OrdenesCompraAPI.Models.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OrdenesCompraAPI.Models
{
    public class Vendor
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Phone { get; set; }
        public string Region { get; set; }

        public List<Vendor> GetVendors()
        {
            VendorDao vdao = new VendorDao();
            return vdao.GetVendors();
        }

        public Vendor GetVendor(int id)
        {
            VendorDao vdao = new VendorDao();
            return vdao.GetVendor(id);
        }

        public void SetVendor()
        {
            VendorDao vdao = new VendorDao();
            vdao.SetVendor(this);
        }

        public void UpdateVendor()
        {
            VendorDao vdao = new VendorDao();
            vdao.UpdateVendor(this);
        }

        public void DeleteVendor(int id)
        {
            VendorDao vdao = new VendorDao();
            vdao.DeleteVendor(id);
        }
    }
}