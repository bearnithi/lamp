import { Component, OnInit } from '@angular/core';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { ConfirmDialogComponent } from 'src/app/shared/dialog-notification-components';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import { MatDialog } from '@angular/material';
import { CloseAuctionComponent } from 'src/app/shared/close-auction/close-auction.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  cardStats: Array<any>;
  dashboardres: any;
  auctionList: Array<any> = [];
  selectedAuction: any = {};
  showLoader: boolean;
  formMessage: any;
  constructor(private httpHelper: HttpHelperService,
    private router: Router,
    private store: StoreService,
    private dialog: MatDialog) { }

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
    this.fetchAuctions();
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




  fetchAuctions() {
    this.httpHelper.find('dashboard', { query: { type: 'auctioninfo' } }).then((res) => {
      this.auctionList = res;
    });
  }

  editAuctionList(value) {
    this.selectedAuction = this.store.setValue('selected_auction', value);
    this.router.navigate(['admin', 'add-auction', 'edit'])
  }

  confirmDelete(deleteAuction: any) {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        message: 'Are you sure to delete this auction ?'
      }
    });

    dialog.afterClosed().subscribe((isDelete: boolean) => {
      if (isDelete) {
        this.httpHelper.remove('auctions', deleteAuction._id).then((res) => {
          this.store.showGrowl.next({
            text: 'E-Auction has been deleted successfully',
            title: 'Success',
            type: 'success'
          });
          this.fetchAuctions();
        });

      }
    });
  }


  showpopup(Auction: any) {
    const dialog = this.dialog.open(CloseAuctionComponent, {
      width: '400px',
    });

    dialog.afterClosed().subscribe((data: any) => {
      if (data) {
        const savedata = {
          'Amount': data,
          'AuctionEndDate': new Date(),
          'Status': 'Closed'
        }
        this.httpHelper.patch('auctions', Auction._id, savedata)
          .then((response: any) => {
            this.onSuccess();
          }).catch((err) => {
            this.onFailure();
          });

      }
    });
  }


  onSuccess() {
    this.store.showLoader.next(false);
    this.showLoader = false;
    this.formMessage = 'Added successfully';
    this.store.showGrowl.next({
      text: 'Profile updated successfully',
      title: 'Success',
      type: 'success'
    });
    this.router.navigate(['buyer/buyer-dashboard']);
  }

  onFailure() {
    this.store.showLoader.next(false);
    this.showLoader = false;
    this.formMessage = 'Unexpected error occured';
    this.store.showGrowl.next({
      text: 'Error while updating profile',
      title: 'Error',
      type: 'danger'
    });
  }

}
