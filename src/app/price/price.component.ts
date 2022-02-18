import { Component, OnInit } from '@angular/core';
import { PriceService } from './price.service';
import { Observable } from 'rxjs';
import { Price } from './price';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  allPrices: Observable<Price[]>;
  title: string;
  strqueary :string;
  constructor(private priceService:PriceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getPrices();
  }

  getPrices = () => {
    this.allPrices=this.priceService.getAllPrices();
  }

  loadPriceToEdit = (ids: string[]) =>{
    this.router.navigate(['/prices/update/'+ids]);
  }

  deletePrice(vendor: string, part: string){
    if (confirm("¿Estás seguro que deseas eliminar esto?")) {   
      this.priceService.deletePrice(vendor, part).subscribe(() => {  
        location.reload(); 
      });
    }
  }
}
