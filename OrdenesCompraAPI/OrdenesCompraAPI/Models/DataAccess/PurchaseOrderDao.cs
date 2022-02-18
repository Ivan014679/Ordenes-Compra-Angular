using OrdenesCompraAPI.Models.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OrdenesCompraAPI.Models.DataAccess
{
    public class PurchaseOrderDao
    {
        public List<PurchaseOrder> GetPurchaseOrders()
        {
            List<PurchaseOrder> purchaseorders = new List<PurchaseOrder>();
            using (var context = new PurchaseOrdersEntities())
            {
                var query = (from d in context.PurchaseOrder select d).ToList();
                foreach (var item in query)
                {
                    PurchaseOrder purchaseorder = new PurchaseOrder();
                    purchaseorder.Id = item.Id;
                    purchaseorder.Date = item.Date;
                    purchaseorder.Vendor = item.Vendor1.Name;
                    purchaseorder.Bill_Number = item.Bill_Number;

                    purchaseorders.Add(purchaseorder);
                }
            }
            return purchaseorders;
        }

        public PurchaseOrder GetPurchaseOrder(int id)
        {
            using (var context = new PurchaseOrdersEntities())
            {
                PurchaseOrder purchaseorder = new PurchaseOrder();
                var record = (from d in context.PurchaseOrder select d).Where(d => d.Id.Equals(id)).FirstOrDefault();
                purchaseorder.Id = record.Id;
                purchaseorder.Date = record.Date;
                purchaseorder.Vendor = Convert.ToString(record.Vendor);
                purchaseorder.Bill_Number = record.Bill_Number;

                return purchaseorder;
            }
        }

        public void SetPurchaseOrder(PurchaseOrder purchaseorder)
        {
            using (var context = new PurchaseOrdersEntities())
            {
                DataModel.PurchaseOrder po = new DataModel.PurchaseOrder();
                po.Id = purchaseorder.Id;
                po.Date = purchaseorder.Date;
                po.Vendor = Convert.ToInt32(purchaseorder.Vendor);
                po.Bill_Number = purchaseorder.Bill_Number;

                context.PurchaseOrder.Add(po);
                context.SaveChanges();
            }
        }

        public void UpdatePurchaseOrder(PurchaseOrder purchaseorder)
        {
            using (var context = new PurchaseOrdersEntities())
            {
                var query = (from d in context.PurchaseOrder select d).Where(d => d.Id.Equals(purchaseorder.Id)).FirstOrDefault();
                query.Date = purchaseorder.Date;
                query.Vendor = Convert.ToInt32(purchaseorder.Vendor);
                query.Bill_Number = purchaseorder.Bill_Number;

                context.SaveChanges();
            }
        }

        public void DeletePurchaseOrder(int id)
        {
            using (var context = new PurchaseOrdersEntities())
            {
                var record = (from d in context.PurchaseOrder select d).Where(d => d.Id.Equals(id)).FirstOrDefault();
                context.PurchaseOrder.Remove(record);
                context.SaveChanges();
            }
        }
    }
}