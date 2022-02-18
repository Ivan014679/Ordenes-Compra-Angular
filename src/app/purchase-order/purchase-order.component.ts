import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from './purchase-order.service';
import { Observable } from 'rxjs';
import { PurchaseOrder } from './purchase-order';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {
  allPurchaseOrders: Observable<PurchaseOrder[]>;
  title: string;
  strqueary :string;
  constructor(private purchaseOrderService:PurchaseOrderService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getPurchaseOrders();
  }

  getPurchaseOrders = () => {
    this.allPurchaseOrders=this.purchaseOrderService.getAllPurchaseOrders();
  }

  loadPurchaseOrderToEdit = (purchaseorderid: string) =>{
    this.router.navigate(['/purchase-orders/update/'+purchaseorderid]);
  }

  deletePurchaseOrder(purchaseorderid: string){
    if (confirm("¿Estás seguro que deseas eliminar esto?")) {   
      this.purchaseOrderService.deletePurchaseOrder(purchaseorderid).subscribe(() => {  
        location.reload();
      });
    }
  }
}
