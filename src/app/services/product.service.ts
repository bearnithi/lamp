import { Injectable } from '@angular/core';
import { HttpHelperService } from './http-helper.service';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  lenderId : any;
  constructor(private httpService:HttpHelperService,private storageService:StoreService) { 
  // this.lenderId = this.storageService.getValue('selected_user')['_id'];
  }


  saveProductInfo(data){
    return new Promise((resolve,reject)=>{
      data['lenderId'] = this.lenderId;
      this.httpService.create('assets',data).then(res => {
        resolve(res)
      }).catch((err)=>{
        reject(err)
      })
    })
    
    
  }
}
