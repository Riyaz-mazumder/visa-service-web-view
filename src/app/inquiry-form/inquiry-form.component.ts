import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inquiry-form',
  templateUrl: './inquiry-form.component.html',
  styleUrls: ['./inquiry-form.component.scss']
})
export class InquiryFormComponent {


  constructor(
    private service: DataService,
    private router: Router,
    ){}

  searchedData!: any;

  submit(data: NgForm){
     this.service.searchVisa(data.value.visaNumber, data.value.moiRef, data.value.holderPassportNumber).subscribe({
      next: r =>{

        this.searchedData = r;

        if(this.searchedData.length <1){
           alert("Wrong Input Data");
        }else{
          this.service.setData(this.searchedData);
          console.log(this.searchedData[0]);
          this.router.navigate(['/inquiry-details']);
        }
        
      },error: e =>{
        alert("Somthing Went Wrong!");
      }
     })
  }

}
