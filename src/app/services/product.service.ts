import { Injectable } from '@angular/core';
import { HttpHelperService } from './http-helper.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpService:HttpHelperService) { }


  saveProductInfo(data){
    return new Promise((resolve,reject)=>{
      console.log(data)
    })
    
    
  }
}
