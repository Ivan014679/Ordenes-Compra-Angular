using OrdenesCompraAPI.Models.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OrdenesCompraAPI.Models
{
    public class PurchaseOrder
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Vendor { get; set; }
        public string Bill_Number { get; set; }

        public List<PurchaseOrder> GetPurchaseOrders()
        {
            PurchaseOrderDao podao = new PurchaseOrderDao();
            return podao.GetPurchaseOrders();
        }

        public PurchaseOrder GetPurchaseOrder(int id)
        {
            PurchaseOrderDao podao = new PurchaseOrderDao();
            return podao.GetPurchaseOrder(id);
        }

        public void SetPurchaseOrder()
        {
            PurchaseOrderDao podao = new PurchaseOrderDao();
            podao.SetPurchaseOrder(this);
        }

        public void UpdatePurchaseOrder()
        {
            PurchaseOrderDao podao = new PurchaseOrderDao();
            podao.UpdatePurchaseOrder(this);
        }

        public void DeletePurchaseOrder(int id)
        {
            PurchaseOrderDao podao = new PurchaseOrderDao();
            podao.DeletePurchaseOrder(id);
        }
    }
}