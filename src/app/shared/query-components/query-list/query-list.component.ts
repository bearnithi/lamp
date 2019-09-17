import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from "@angular/core";
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: "app-query-list",
  templateUrl: "./query-list.component.html",
  styleUrls: ["./query-list.component.scss"]
})
export class QueryListComponent implements OnInit {
  @Input() assetId: string;
  @Output() back = new EventEmitter<any>();

  messages: Array<any> = [];
  selectedQuery: any = {};
  showDetail: boolean;
  loggedInUser: any = {};
  contacts: Array<any> = [];
  selectedContact: any = {};
  productInfo: any = {};
  message: string;

  constructor(private http: HttpHelperService,
              private authentication: AuthenticationService,
              private store: StoreService) { }

  ngOnInit() {
    this.productInfo = this.store.getValue('selected_product');
    this.loggedInUser = this.authentication.getUserInfo();
    this.listenLive();
  }

  ngOnChanges(changes: SimpleChanges): void {

  }


  fetchMessages(contact) {
    let query = {}
    this.selectedContact = contact;
    if (contact.role !== 'All') {
      query = {
        query: {
          assetId: this.assetId,
          from: {
            $in: [contact._id, this.loggedInUser._id]
          },
          to: {
            $in: [contact._id, this.loggedInUser._id]
          },
          $sort: {
            _id: 1
          }
        }
      };
    } else {
      query = {
        query: {
          assetId: this.assetId,
          $or: [{
            from: this.loggedInUser._id
          }, { to: this.loggedInUser._id }],
          $sort: {
            _id: 1
          }
        }
      };
    }

    this.http.find('followup', query).then((res) => {
      this.messages = res.data;

      for (const message of this.messages) {
        this.fetchUser(message);
      }
    });
  }

  fetchUser(query) {
    this.http.find('users', { query: { _id: query.from } }).then((res) => {
      query.userInfo = res.data[0];
    });
  }


  select(query) {
    this.selectedQuery = query;
    this.showDetail = true;
  }

  listenLive() {
    this.http.feathersInstance().service('followup').on('created', message => {
     this.fetchMessages(this.selectedContact);
    });
  }

  sendMessage() {
    if (this.message.trim() !== '') {
      const query = {
        type: 'Reply',
        message: this.message,
        assetId: this.productInfo._id,
        from: this.authentication.getUserInfo()._id,
        to: this.selectedContact._id,
        lenderId: this.productInfo.lenderId,
        createdDate: new Date()
      };
      // this.messages.push(query);

      this.http.create('followup', query).then((res) => {
        console.log('msg sent');
        this.fetchMessages(this.selectedContact);
      });


    }
  }


  showFollowup() {
    this.store.showAction.next(this.productInfo);
  }

}
