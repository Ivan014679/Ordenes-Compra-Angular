import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { VendorService } from '../vendor.service';
import { CityService } from '../../city/city.service';
import { RegionService } from '../../region/region.service';
import { Vendor } from '../vendor';
import { City } from '../../city/city';
import { Region } from '../../region/region';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewVendorComponent implements OnInit {
  dataSaved = false;
  vendorsForm: any;
  allCities: Observable<City[]>;
  allRegions: Observable<Region[]>;
  vendorid: string;
  message = null;

  constructor(
    private formbuilder: FormBuilder,
    private vendorServices: VendorService,
    private cityServices: CityService,
    private regionServices: RegionService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getCities();
    this.getRegions();
    this.vendorsForm = this.formbuilder.group({
      Name: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
      Address: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]],
      City: ['', [Validators.required]],
      Phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(1)]],
      Region: ['', [Validators.required]]
    });
    this.route.paramMap.subscribe(
      (params: ParamMap)=>{
        this.vendorid=params.get('id');
        if(this.vendorid != null){
          this.getVendor();
        }
      }
    );
  }

  getCities = () =>{
    this.allCities=this.cityServices.getAllCities();
  }

  getRegions = () =>{
    this.allRegions=this.regionServices.getAllRegions();
  }

  onFormSubmit(){
    this.dataSaved = false;  
    const vendor = this.vendorsForm.value;
    this.addVendor(vendor);  
    this.vendorsForm.reset();
    this.vendorServices.setVendor(this.vendorsForm);
  }

  getVendor = () =>
  {
    this.vendorServices.getVendor(this.vendorid).subscribe(
      v => {
        this.vendorsForm.controls['Name'].setValue(v.Name);
        this.vendorsForm.controls['Address'].setValue(v.Address);
        this.vendorsForm.controls['City'].setValue(v.City);
        this.vendorsForm.controls['Phone'].setValue(v.Phone);
        this.vendorsForm.controls['Region'].setValue(v.Region);
      }
    );
  }

  addVendor(vendor: Vendor) {  
    if (this.vendorid == null) {  
      this.vendorServices.setVendor(vendor).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.message = 'Vendedor guardado exitosamente';    
          this.vendorid = null;
          this.vendorsForm.reset();  
        }
      );  
    } else {  
      vendor.Id = parseInt(this.vendorid);
      this.vendorServices.updateVendor(vendor).subscribe(() => {  
        this.dataSaved = true;  
          this.message = 'Vendedor actualizado exitosamente';    
          this.vendorid = null;  
          this.vendorsForm.reset();  
      });  
    }
  }
}
