import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PurchaseOrderService } from '../purchase-order.service';
import { VendorService } from '../../vendor/vendor.service';
import { PurchaseOrder } from '../purchase-order';
import { Vendor } from '../../vendor/vendor';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewPurchaseOrderComponent implements OnInit {
  dataSaved = false;
  purchaseOrdersForm: any;
  allVendors: Observable<Vendor[]>;
  purchaseorderid: string;
  message = null; 

  constructor(
    private formbuilder: FormBuilder,
    private purchaseOrderServices: PurchaseOrderService,
    private vendorServices: VendorService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getVendors();
    this.purchaseOrdersForm = this.formbuilder.group({
      Date: ['', [Validators.required]],
      Vendor: ['', [Validators.required]],
      Bill_Number: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(1)]]
    });
    this.route.paramMap.subscribe(
      (params: ParamMap)=>{
        this.purchaseorderid=params.get('id');
        if(this.purchaseorderid != null){
          this.getPurchaseOrder();
        }
      }
    );
  }

  getVendors = () =>{
    this.allVendors=this.vendorServices.getAllVendors();
  }

  onFormSubmit(){
    this.dataSaved = false;  
    const purchaseorder = this.purchaseOrdersForm.value;
    this.addPurchaseOrder(purchaseorder);  
    this.purchaseOrdersForm.reset();
    this.purchaseOrderServices.setPurchaseOrder(this.purchaseOrdersForm);
  }

  getPurchaseOrder = () =>
  {
    this.purchaseOrderServices.getPurchaseOrder(this.purchaseorderid).subscribe(
      po => {
        this.purchaseOrdersForm.controls['Date'].setValue(po.Date);
        this.purchaseOrdersForm.controls['Vendor'].setValue(po.Vendor);
        this.purchaseOrdersForm.controls['Bill_Number'].setValue(po.Bill_Number);
      }
    );
  }

  addPurchaseOrder(purchaseorder: PurchaseOrder) {  
    if (this.purchaseorderid == null) {  
      this.purchaseOrderServices.setPurchaseOrder(purchaseorder).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.message = 'Compra guardada exitosamente';    
          this.purchaseorderid = null;  
          this.purchaseOrdersForm.reset();  
        }
      );  
    } else {  
      purchaseorder.Id = parseInt(this.purchaseorderid);  
      this.purchaseOrderServices.updatePurchaseOrder(purchaseorder).subscribe(() => {  
        this.dataSaved = true;  
          this.message = 'Compra actualizada exitosamente';    
          this.purchaseorderid = null;  
          this.purchaseOrdersForm.reset();  
      });  
    }  
  }
}
