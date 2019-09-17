import { Component, OnInit } from '@angular/core';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-consultant-dashboard',
  templateUrl: './consultant-dashboard.component.html',
  styleUrls: ['./consultant-dashboard.component.scss']
})
export class ConsultantDashboardComponent implements OnInit {
  cardStats: Array<any>;
  dashboardres: any;
  query: any = {};
  userInfo: any;
  auctionList: any;

  constructor(private httpHelper: HttpHelperService,
    private authentication: AuthenticationService) { }

  ngOnInit() {
    this.userInfo = this.authentication.getUserInfo();
    this.fetchDaseboard();
    this.fetchAuctions();
    this.cardStats = [{
      title: '50',
      desc: 'total_property',
      subdesc: 'Total Properties',
      id: 'members-online',
      class: 'bg-teal',
      link: '/consultant/properties'
    }, {
      title: '20',
      desc: 'working_property',
      subdesc: 'Properties which you are handling',
      id: 'server-load',
      class: 'bg-pink',
      link: '/admin/associate'
    }]

  }

  fetchDaseboard() {
    this.httpHelper.find('dashboard', { query: { type: 'consultantdashboard', id: this.userInfo._id } }).then((res) => {
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

  fetchAuctions() {
    this.httpHelper.find('dashboard', { query: { type: 'auctioninfo' } }).then((res) => {
      this.auctionList = res;
    });
  }

}
