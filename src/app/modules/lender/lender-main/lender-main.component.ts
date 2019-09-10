import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lender-main',
  templateUrl: './lender-main.component.html',
  styleUrls: ['./lender-main.component.scss']
})
export class LenderMainComponent implements OnInit {
  menu: any;
  constructor() { }

  ngOnInit() {
    this.menu = [
      {
        name: 'Dashboard',
        link: '/lender/lender-dashboard'
      },
      {
        name: 'List Products',
        link: '/lender/products'
      }, {
        name: 'Add Product',
        link: '/lender/add-product'
      }, {
        name: 'Assign Consultant',
        link: '/lender/consultant'
      }, {
        name: 'Assign Associate',
        link: '/lender/consultant'
      }
    ];
    }

}
