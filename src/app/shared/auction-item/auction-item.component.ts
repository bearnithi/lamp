import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auction-item',
  templateUrl: './auction-item.component.html',
  styleUrls: ['./auction-item.component.scss']
})
export class AuctionItemComponent implements OnInit {
  @Input() auctionInfo: any = {};
  constructor() { }

  ngOnInit() {
  }

}
