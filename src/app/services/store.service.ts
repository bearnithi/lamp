import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  store: any = {};
  showGrowl = new Subject<any>();
  showLoader = new Subject<boolean>();
  constructor() { }

  setValue(key, value) {
    this.store[key] = value;
  }

  getValue(key) {
    return this.store[key];
  }
}
