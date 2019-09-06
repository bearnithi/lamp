import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyer-dashboard',
  templateUrl: './buyer-dashboard.component.html',
  styleUrls: ['./buyer-dashboard.component.scss']
})
export class BuyerDashboardComponent implements OnInit {
  cardStats: Array<any>;
  constructor() { }

  ngOnInit() {
    this.cardStats = [{
      title: '20',
      desc: 'Interested Properties',
      subdesc: 'Properties you are willing to buy.',
      id: 'members-online',
      class: 'bg-teal',
      link: '/buyer/products'
    }, {
      title: '50',
      desc: 'Total Properties',
      subdesc: 'Total Active Properties for you to buy.',
      id: 'server-load',
      class: 'bg-pink',
      link: '/buyer/products'
    }, {
      title: '2',
      desc: 'Properties Bought',
      subdesc: 'Properties you have bought.',
      id: 'today-revenue',
      class: 'bg-blue',
      link: '/buyer/products'
    }, {
      title: '250',
      desc: 'Properties',
      subdesc: 'All properties including sold.',
      id: 'buyers',
      class: 'bg-orange',
      link: '/buyer/products'
    }]
  }

}
