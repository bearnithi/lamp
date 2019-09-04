import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  store: any = {};

  constructor() { }

  setValue(key, value) {
    this.store[key] = value;
  }

  getValue(key) {
    return this.store[key];
  }
}
