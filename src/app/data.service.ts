import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  private data!: any;

  private baseUrl = "http://localhost:8080/api/v1/app-visa"

  public searchVisa(visaNumber: string, moiRef: string, holderPassportNumber: string){

   return this.http.get(this.baseUrl + "/" + visaNumber + "/" + moiRef + "/" + holderPassportNumber);

  }


  public setData(value: any): void {
     this.data = value;
   
   }
 
  public getData(): any {
     return this.data;
   }

}
