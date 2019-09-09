import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  cardStats: Array<any>;
  constructor() { }

  ngOnInit() {
    this.cardStats = [{
      title: '50',
      desc: 'Lenders',
      subdesc: 'Active Lenders',
      id: 'members-online',
      class: 'bg-teal',
      link: '/admin/lender'
    }, {
      title: '80',
      desc: 'Associates',
      subdesc: 'Active Associates',
      id: 'server-load',
      class: 'bg-pink',
      link: '/admin/associate'
    }, {
      title: '20',
      desc: 'Consultants',
      subdesc: 'Active Consultants',
      id: 'today-revenue',
      class: 'bg-blue',
      link: '/admin/consultant'
    }, {
      title: '250',
      desc: 'Buyers',
      subdesc: 'Active Buyers',
      id: 'buyers',
      class: 'bg-orange',
      link: '/admin/buyers'
    }]
  }

}
