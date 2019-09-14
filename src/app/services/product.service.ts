import { Injectable } from '@angular/core';
import { HttpHelperService } from './http-helper.service';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  lenderId: any;
  constructor(private httpService: HttpHelperService, private storageService: StoreService) {
     this.lenderId = this.storageService.getValue('selected_user')['_id'];
  }


  saveProductInfo(data) {
    this.storageService.showLoader.next(true);
    return new Promise((resolve, reject) => {
      data['lenderId'] = this.lenderId;
      this.httpService.create('assets', data).then(res => {
        this.storageService.showLoader.next(false);
        resolve(res);
      }).catch((err) => {
        this.storageService.showLoader.next(false);
        reject(err)
      })
    })


  }
}
