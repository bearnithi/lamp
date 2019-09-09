import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHelperService } from 'src/app/services/http-helper.service';

@Component({
  selector: 'app-consultant-auction',
  templateUrl: './auction-master.component.html',
  styleUrls: ['./auction-master.component.scss']
})
export class AuctionMasterComponent implements OnInit {
  auctionList: Array<any> = [];
  constructor(public router: Router,
              private httpHelper: HttpHelperService) { }

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


}
