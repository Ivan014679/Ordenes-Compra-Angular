using OrdenesCompraAPI.Models.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OrdenesCompraAPI.Models
{
    public class Price
    {
        public int Vendor { get; set; }
        public string Vendor_Name { get; set; }
        public int Part { get; set; }
        public string Part_Description { get; set; }
        public string CatalogNo { get; set; }
        public decimal Value { get; set; }

        public List<Price> GetPrices()
        {
            PriceDao pdao = new PriceDao();
            return pdao.GetPrices();
        }

        public Price GetPrice(int vendor, int part)
        {
            PriceDao pdao = new PriceDao();
            return pdao.GetPrice(vendor, part);
        }

        public void SetPrice()
        {
            PriceDao pdao = new PriceDao();
            pdao.SetPrice(this);
        }

        public void UpdatePrice()
        {
            PriceDao pdao = new PriceDao();
            pdao.UpdatePrice(this);
        }

        public void DeletePrice(int vendor, int part)
        {
            PriceDao pdao = new PriceDao();
            pdao.DeletePrice(vendor, part);
        }
    }
}