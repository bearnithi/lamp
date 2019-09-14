import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-query-contacts',
  templateUrl: './query-contacts.component.html',
  styleUrls: ['./query-contacts.component.scss']
})
export class QueryContactsComponent implements OnInit {
  contacts: Array<any> = [];
  productInfo: any = {};
  @Output() selectedContact = new EventEmitter<any>();
  search: string;
  loggedInUser: any = {};

  constructor(private store: StoreService,
              private httpHelper: HttpHelperService,
              private authentication: AuthenticationService) { }

  ngOnInit() {
    this.productInfo = this.store.getValue('selected_product');
    this.loggedInUser = this.authentication.getUserInfo();
    this.fetchContacts();
  }

  fetchContacts() {
    const userIDs = []
    for (const id in this.productInfo.stakeHolders) {
      if (this.productInfo.stakeHolders.hasOwnProperty(id)) {
        userIDs.push(this.productInfo.stakeHolders[id]);
      }
    }


    this.httpHelper.find('users', { query: { role: { $in: ['Associate', 'Consultant', 'Buyer'] } } }).then((res: any) => {
      const result = [];
      if (res.data.length > 0) {
        for (const id of userIDs) {
          for (const user of res.data) {
            if (user._id === id && user._id !== this.loggedInUser._id) {
              result.push(user);
            }
          }
        }
      }
      this.contacts = result || [];
      this.contacts.unshift({
        firstName: 'All',
        role: 'All'
      });
    });
  }

  selectContact(contact) {
    this.selectedContact.emit(contact);
  }

}
