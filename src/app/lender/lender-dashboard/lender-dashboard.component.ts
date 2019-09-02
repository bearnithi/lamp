import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lender-dashboard',
  templateUrl: './lender-dashboard.component.html',
  styleUrls: ['./lender-dashboard.component.scss']
})
export class LenderDashboardComponent implements OnInit {
  cardStats: Array<any>;
  constructor() { }

  ngOnInit() {
    this.fetchCardStats();
  }

  fetchCardStats() {
    this.cardStats = [{
      title: '50',
      desc: 'Lenders',
      subdesc: 'Active Lenders',
      id: 'members-online',
      class: 'bg-teal'
    }, {
      title: '80',
      desc: 'Associates',
      subdesc: 'Active Associates',
      id: 'server-load',
      class: 'bg-pink'
    }, {
      title: '20',
      desc: 'Consultants',
      subdesc: 'Active Consultants',
      id: 'today-revenue',
      class: 'bg-blue'
    }, {
      title: '250',
      desc: 'Buyers',
      subdesc: 'Active Buyers',
      id: 'buyers',
      class: 'bg-orange'
    }]
  }

}
