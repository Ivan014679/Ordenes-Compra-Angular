import { Component, OnInit } from '@angular/core';
import { VendorService } from './vendor.service';
import { Observable } from 'rxjs';
import { Vendor } from './vendor';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  allVendors: Observable<Vendor[]>;
  title: string;
  strqueary :string;
  constructor(private vendorService:VendorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getVendors();
  }

  getVendors = () => {
    this.allVendors=this.vendorService.getAllVendors();
  }

  loadVendorToEdit = (vendorid: string) =>{
    this.router.navigate(['/vendors/update/'+vendorid]);
  }

  deleteVendor(vendorid: string){
    if (confirm("¿Estás seguro que deseas eliminar esto?")) {   
      this.vendorService.deleteVendor(vendorid).subscribe(() => {  
        location.reload();
      });
    }
  }
}
