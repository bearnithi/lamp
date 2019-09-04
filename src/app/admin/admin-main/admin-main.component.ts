import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss']
})
export class AdminMainComponent implements OnInit {
  menu: any;
  constructor() { }

  ngOnInit() {
    this.menu = {
      home: {
        name: 'Dashboard',
        link: '/admin/admin-dashboard'
      },
      group: [{
        name: 'Masters',
        items: [{
          name: 'Lenders',
          link: '/admin/lender'
        }, {
          name: 'Associate',
          link: '/admin/associate'
        }, {
          name: 'Consultant',
          link: '/admin/consultant'
        }]
      }, {
        name: 'Products',
        items: [{
          name: 'List Products',
          link: '/admin/products'
        }, {
          name: 'Add Product',
          link: '/admin/add-product'
        }, {
          name: 'Assign Consultant',
          link: '/admin/consultant'
        }, {
          name: 'Assign Associate',
          link: '/admin/consultant'
        }]
      }]
    }
  }

}
