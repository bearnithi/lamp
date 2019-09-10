import { Component, OnInit } from '@angular/core';
import { HttpHelperService } from 'src/app/services/http-helper.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  cardStats: Array<any>;
  dashboardres: any;
  constructor(private httpHelper: HttpHelperService) { }

  ngOnInit() {
    this.fetchDaseboard();
    this.cardStats = [{
      title: '50',
      desc: 'Lender',
      subdesc: 'Active Lenders',
      id: 'members-online',
      class: 'bg-teal',
      link: '/admin/lender'
    }, {
      title: '80',
      desc: 'Associate',
      subdesc: 'Active Associates',
      id: 'server-load',
      class: 'bg-pink',
      link: '/admin/associate'
    }, {
      title: '20',
      desc: 'Consultant',
      subdesc: 'Active Consultants',
      id: 'today-revenue',
      class: 'bg-blue',
      link: '/admin/consultant'
    }, {
      title: '250',
      desc: 'Buyer',
      subdesc: 'Active Buyers',
      id: 'buyers',
      class: 'bg-orange',
      link: '/admin/buyers'
    }]

  }

  fetchDaseboard() {
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
