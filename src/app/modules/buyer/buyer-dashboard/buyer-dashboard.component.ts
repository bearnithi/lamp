import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-buyer-dashboard',
  templateUrl: './buyer-dashboard.component.html',
  styleUrls: ['./buyer-dashboard.component.scss']
})
export class BuyerDashboardComponent implements OnInit {
  cardStats: Array<any>;
  userInfo: any = {};
  productList: any;
  profileSubscription: Subscription;
  auctionList: Array<any> = [];

  constructor(private authentication: AuthenticationService,
    private http: HttpHelperService) { }

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
    }];

    this.userInfo = this.authentication.getUserInfo();
    this.authentication.profileUpdated.subscribe((userInfo: any) => {
      this.userInfo = userInfo;
    //  this.fetchProducts();
    });

    if(this.userInfo) {
    //  this.fetchProducts();
    }

    this.fetchAuctions();

  }

  ngOnDestroy(): void {
    if (this.profileSubscription) {
      this.profileSubscription.unsubscribe();
    }

  }

  fetchProducts() {
    this.http.find('assets', { query: {
      assetType: this.userInfo.preference.propertyType
    } }).then((res) => {
      this.productList = res.data;
    });
  }


  fetchAuctions() {
    this.http.find('dashboard', { query: {type: 'auctioninfo' }}).then((res) => {
      this.auctionList = res;
    });
  }

}
