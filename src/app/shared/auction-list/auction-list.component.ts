import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.scss']
})
export class AuctionListComponent implements OnInit {
  @Input() auctionList: Array<any> = [];
  constructor() { }

  ngOnInit() {
   
  }

}
