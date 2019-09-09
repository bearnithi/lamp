import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { StoreService } from 'src/app/services/store.service';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/shared/dialog-notification-components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-consultant-auction',
  templateUrl: './auction-master.component.html',
  styleUrls: ['./auction-master.component.scss']
})
export class AuctionMasterComponent implements OnInit {
  auctionList: Array<any> = [];
  selectedAuction: any;
  constructor(public router: Router,
    private httpHelper: HttpHelperService, private store: StoreService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.auctionList = [
      {
        _id: "1",
        auctionInfo: {
          date: "22/11/2018"
        },
        lenderInfo: {
          bankName: "Indian Bank"
        },
        assetInfo: {
          assetType: "Residential Home",
          assetDetails: {
            floorPrice: '2000'
          }
        }
      },
      {
        _id: "1",
        auctionInfo: {
          date: "22/11/2018"
        },
        lenderInfo: {
          bankName: "Indian Bank"
        },
        assetInfo: {
          assetType: "Residential Home",
          assetDetails: {
            floorPrice: '2000'
          }
        }
      }
    ];

    this.fetchAuctions();
  }

  fetchAuctions() {
    this.httpHelper.find('auctions', {}).then((res) => {
      console.log(res);
    })
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
        });

      }
    });
  }


}
