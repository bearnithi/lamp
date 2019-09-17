import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.scss']
})
export class AuctionListComponent implements OnInit {
  @Input() auctionList: Array<any> = [];
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() CloseAuctionpopup = new EventEmitter<any>();
  constructor(private authentication: AuthenticationService) { }
  selectedrole: any;
  ngOnInit() {
    this.selectedrole = this.authentication.getUserInfo() || {};
  }


  editAuction(data) {
    this.edit.emit(data);
  }

  deleteAuction(deletedata) {
    this.delete.emit(deletedata);
  }

  CloseAuction(data) {
      this.CloseAuctionpopup.emit(data);
  }



}
