import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-associate-dashboard',
  templateUrl: './associate-dashboard.component.html',
  styleUrls: ['./associate-dashboard.component.scss']
})
export class AssociateDashboardComponent implements OnInit {
  cardStats: Array<any>;
  constructor() { }

  ngOnInit() {

    this.cardStats = [{
      title: '150',
      desc: 'Properties',
      subdesc: 'Active Properties',
      id: 'members-online',
      class: 'bg-teal',
      link: '/admin/lender'
    }, {
      title: '250',
      desc: 'Buyer',
      subdesc: 'Active Buyers',
      id: 'buyers',
      class: 'bg-orange',
      link: '/admin/buyers'
    }]
  }

}
