import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PriceService } from '../price.service';
import { VendorService } from '../../vendor/vendor.service';
import { PartService } from '../../part/part.service';
import { Price } from '../price';
import { Vendor } from '../../vendor/vendor';
import { Part } from '../../part/part';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewPriceComponent implements OnInit {
  dataSaved = false;
  pricesForm: any;
  allVendors: Observable<Vendor[]>;
  allParts: Observable<Part[]>;
  ids: string[];
  vendor: string;
  part: string;
  message = null; 

  constructor(
    private formbuilder: FormBuilder,
    private priceServices: PriceService,
    private vendorServices: VendorService,
    private partServices: PartService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getVendors();
    this.getParts();
    this.pricesForm = this.formbuilder.group({
      Vendor: ['', [Validators.required]],
      Part: ['', [Validators.required]],
      CatalogNo: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(1)]],
      Value: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(1)]],
    });
    this.route.paramMap.subscribe(
      (params: ParamMap)=>{
        this.ids=params.getAll('ids')[0].split(',');
        if(this.ids != null){
          this.getPrice();
        }
      }
    );
  }

  getVendors = () =>{
    this.allVendors=this.vendorServices.getAllVendors();
  }

  getParts = () =>{
    this.allParts=this.partServices.getAllParts();
  }

  onFormSubmit(){
    this.dataSaved = false;  
    const price = this.pricesForm.value;
    this.addPrice(price);  
    this.pricesForm.reset();
    this.priceServices.setPrice(this.pricesForm);
  }

  getPrice = () =>
  {
    this.priceServices.getPrice(parseInt(this.ids[0]), parseInt(this.ids[1])).subscribe(
      p => {
        this.pricesForm.controls['Vendor'].setValue(p.Vendor);
        this.pricesForm.controls['Part'].setValue(p.Part);
        this.pricesForm.controls['CatalogNo'].setValue(p.CatalogNo);
        this.pricesForm.controls['Value'].setValue(p.Value);
      }
    );
  }

  addPrice(price: Price) {  
    if (this.ids == null) {  
      this.priceServices.setPrice(price).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.message = 'Precio guardado exitosamente';    
          this.ids = null;
          this.pricesForm.reset();  
        }
      );  
    } else {
      this.priceServices.updatePrice(price).subscribe(() => {  
        this.dataSaved = true;  
          this.message = 'Precio actualizado exitosamente';    
          this.ids = null;
          this.pricesForm.reset();  
      });  
    }  
  }
}
