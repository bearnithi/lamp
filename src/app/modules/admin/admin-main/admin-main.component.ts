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
    this.menu = [
      {
        name: 'Dashboard',
        link: '/admin/admin-dashboard'
      }, {
        name: 'Lenders',
        link: '/admin/lender'
      }, {
        name: 'Associate',
        link: '/admin/associate'
      }, {
        name: 'Consultant',
        link: '/admin/consultant'
      }, {
        name: 'E-Auctions',
        link: '/admin/auctions'
      }];
  }

}
