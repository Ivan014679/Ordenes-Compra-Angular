using OrdenesCompraAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace OrdenesCompraAPI.Controllers
{
    [RoutePrefix("Api/PurchaseOrder")]
    public class PurchaseOrderController : ApiController
    {
        [HttpGet]
        [Route("Get")]
        public List<PurchaseOrder> GetPurchaseOrders()
        {
            PurchaseOrder purchaseorder = new PurchaseOrder();
            return purchaseorder.GetPurchaseOrders();
        }

        [HttpGet]
        [Route("Get/{Id}")]
        public PurchaseOrder GetPurchaseOrder(string Id)
        {
            PurchaseOrder purchaseorder = new PurchaseOrder();
            return purchaseorder.GetPurchaseOrder(Convert.ToInt32(Id));
        }

        [HttpPost]
        [Route("Set")]
        public IHttpActionResult SetPurchaseOrder(PurchaseOrder purchaseorder)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            purchaseorder.SetPurchaseOrder();
            return Ok(purchaseorder);
        }

        [HttpPut]
        [Route("Update")]
        public IHttpActionResult UpdatePurchaseOrder(PurchaseOrder purchaseorder)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            purchaseorder.UpdatePurchaseOrder();
            return Ok(purchaseorder);
        }

        [HttpDelete]
        [Route("Delete")]
        public IHttpActionResult DeletePurchaseOrder(int id)
        {
            PurchaseOrder purchaseorder = new PurchaseOrder();
            purchaseorder.DeletePurchaseOrder(id);

            return Ok(purchaseorder);
        }
    }
}
