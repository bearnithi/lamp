import { Component, OnInit } from '@angular/core';
import { HttpHelperService } from 'src/app/services/http-helper.service';

@Component({
  selector: 'app-lender-dashboard',
  templateUrl: './lender-dashboard.component.html',
  styleUrls: ['./lender-dashboard.component.scss']
})
export class LenderDashboardComponent implements OnInit {
  cardStats: Array<any>;
  constructor(private httpHelper: HttpHelperService) { }

  ngOnInit() {
    this.fetchCardStats();
    this.fetchDaseboardTitle();
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



  fetchDaseboardTitle() {
    this.httpHelper.find('dashboard', { query: { type: 'admindashboard' } }).then((res) => {
      this.changeTitle(res[0]);
    });
  }

  changeTitle(dashboardCount) {
    this.cardStats.forEach((currenttitle) => {
      for (const key in dashboardCount) {
        if (currenttitle.desc === key) {
          currenttitle.title = dashboardCount[key] || 0;
        }
      }
    });
  }

}
