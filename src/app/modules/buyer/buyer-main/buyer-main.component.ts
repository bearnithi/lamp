import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyer-main',
  templateUrl: './buyer-main.component.html',
  styleUrls: ['./buyer-main.component.scss']
})
export class BuyerMainComponent implements OnInit {
  menu: any;
  constructor() { }

  ngOnInit() {
    this.menu = [
      {
        name: 'Dashboard',
        link: '/buyer/buyer-dashboard'
      },
      {
        name: 'Assets',
        link: '/buyer/products'
      }, {
        name: 'Send Email',
        link: '/buyer/contact'
      }];

  }

}
