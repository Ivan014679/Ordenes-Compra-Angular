using OrdenesCompraAPI.Models.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OrdenesCompraAPI.Models.DataAccess
{
    public class PartDao
    {
        public List<Part> GetParts()
        {
            List<Part> parts = new List<Part>();
            using (var context = new PurchaseOrdersEntities())
            {
                var query = (from d in context.Part select d).ToList();
                foreach (var item in query)
                {
                    Part part = new Part();
                    part.Id = item.Id;
                    part.Description = item.Description;

                    parts.Add(part);
                }
            }
            return parts;
        }

        public Part GetPart(int id)
        {
            using (var context = new PurchaseOrdersEntities())
            {
                Part part = new Part();
                var record = (from d in context.Part select d).Where(d => d.Id.Equals(id)).FirstOrDefault();
                part.Id = record.Id;
                part.Description = record.Description;

                return part;
            }
        }

        public void SetPart(Part part)
        {
            using (var context = new PurchaseOrdersEntities())
            {
                DataModel.Part p = new DataModel.Part();
                p.Description = part.Description;

                context.Part.Add(p);
                context.SaveChanges();
            }
        }

        public void UpdatePart(Part part)
        {
            using (var context = new PurchaseOrdersEntities())
            {
                var query = (from d in context.Part select d).Where(d => d.Id.Equals(part.Id)).FirstOrDefault();
                query.Description = part.Description;

                context.SaveChanges();
            }
        }

        public void DeletePart(int id)
        {
            using (var context = new PurchaseOrdersEntities())
            {
                var record = (from d in context.Part select d).Where(d => d.Id.Equals(id)).FirstOrDefault();
                context.Part.Remove(record);
                context.SaveChanges();
            }
        }
    }
}