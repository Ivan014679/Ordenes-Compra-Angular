import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PartService } from '../part.service';
import { Part } from '../part';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewPartComponent implements OnInit {
  dataSaved = false;
  partsForm: any;
  partid: string;
  message = null; 

  constructor(
    private formbuilder: FormBuilder,
    private partServices: PartService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.partsForm = this.formbuilder.group({
      Description: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(1)]]
    });
    this.route.paramMap.subscribe(
      (params: ParamMap)=>{
        this.partid=params.get('id');
        if(this.partid != null){
          this.getPart();
        }
      }
    );
  }

  onFormSubmit(){
    this.dataSaved = false;  
    const part = this.partsForm.value;
    this.addPart(part);  
    this.partsForm.reset();
    this.partServices.setPart(this.partsForm);
  }

  getPart = () =>
  {
    this.partServices.getPart(this.partid).subscribe(
      p => {
        this.partsForm.controls['Description'].setValue(p.Description);
      }
    );
  }

  addPart(part: Part) {  
    if (this.partid == null) {  
      this.partServices.setPart(part).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.message = 'Parte guardada exitosamente';    
          this.partid = null;  
          this.partsForm.reset();  
        }
      );  
    } else {  
      part.Id = parseInt(this.partid);  
      this.partServices.updatePart(part).subscribe(() => {  
        this.dataSaved = true;  
          this.message = 'Parte actualizada exitosamente';    
          this.partid = null;  
          this.partsForm.reset();  
      });  
    }  
  }
}
