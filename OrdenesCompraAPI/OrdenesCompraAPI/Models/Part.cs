using OrdenesCompraAPI.Models.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OrdenesCompraAPI.Models
{
    public class Part
    {
        public int Id { get; set; }
        public string Description { get; set; }

        public List<Part> GetParts()
        {
            PartDao pdao = new PartDao();
            return pdao.GetParts();
        }

        public Part GetPart(int id)
        {
            PartDao pdao = new PartDao();
            return pdao.GetPart(id);
        }

        public void SetPart()
        {
            PartDao pdao = new PartDao();
            pdao.SetPart(this);
        }

        public void UpdatePart()
        {
            PartDao pdao = new PartDao();
            pdao.UpdatePart(this);
        }

        public void DeletePart(int id)
        {
            PartDao pdao = new PartDao();
            pdao.DeletePart(id);
        }
    }
}