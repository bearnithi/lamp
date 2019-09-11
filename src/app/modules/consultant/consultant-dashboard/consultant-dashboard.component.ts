import { Component, OnInit } from '@angular/core';
import { HttpHelperService } from 'src/app/services/http-helper.service';

@Component({
  selector: 'app-consultant-dashboard',
  templateUrl: './consultant-dashboard.component.html',
  styleUrls: ['./consultant-dashboard.component.scss']
})
export class ConsultantDashboardComponent implements OnInit {
  cardStats: Array<any>;
  dashboardres: any;
  query: any = {};
  constructor(private httpHelper: HttpHelperService) { }

  ngOnInit() {
  //  this.fetchDaseboard();
    this.cardStats = [{
      title: '50',
      desc: 'Properties',
      subdesc: 'Total Properties',
      id: 'members-online',
      class: 'bg-teal',
      link: '/consultant/properties'
    }, {
      title: '20',
      desc: 'Working Properties',
      subdesc: 'Properties which you are handling',
      id: 'server-load',
      class: 'bg-pink',
      link: '/admin/associate'
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
