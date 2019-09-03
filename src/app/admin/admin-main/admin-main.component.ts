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
      group: {
        name: 'Masters',
        items: [{
          name: 'Lenders',
          link: '/admin/admin-dashboard/lenders'
        }, {
          name: 'Associate',
          link: '/admin/admin-dashboard/associate'
        }, {
          name: 'Consultant',
          link: 'consultant'
        }]
      }
    }
  }

}
