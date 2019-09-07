import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultant-auction',
  templateUrl: './auction-master.component.html',
  styleUrls: ['./auction-master.component.scss']
})
export class AuctionMasterComponent implements OnInit {
  auctionList: Array<any> = [];
  constructor(public router: Router) { }

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
  }

}
