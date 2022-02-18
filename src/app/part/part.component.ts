import { Component, OnInit } from '@angular/core';
import { PartService } from './part.service';
import { Observable } from 'rxjs';
import { Part } from './part';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent implements OnInit {
  allParts: Observable<Part[]>;
  title: string;
  strqueary :string;
  constructor(private partService:PartService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getParts();
  }

  getParts = () =>{
    this.allParts=this.partService.getAllParts();
  }

  loadPartToEdit = (partid: string) =>{
    this.router.navigate(['/parts/update/'+partid]);
  }

  deletePart(partid: string){
    if (confirm("¿Estás seguro que deseas eliminar esto?")) {   
      this.partService.deletePart(partid).subscribe(() => {  
        location.reload();
      });
    }
  }
}
