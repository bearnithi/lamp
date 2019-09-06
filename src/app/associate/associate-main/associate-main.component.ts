import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-associate-main',
  templateUrl: './associate-main.component.html',
  styleUrls: ['./associate-main.component.scss']
})
export class AssociateMainComponent implements OnInit {
  menu: any;
  constructor() { }

  ngOnInit() {
    this.menu = {
      home: {
        name: 'Dashboard',
        link: '/associate/associate-dashboard'
      },
      group: [{
        name: 'Products',
        items: [{
          name: 'Buyers Interest',
          link: '/associate/buyers-interests'
        }]
      }]
    };
  }

}
