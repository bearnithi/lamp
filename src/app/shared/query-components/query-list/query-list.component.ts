import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from "@angular/core";
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: "app-query-list",
  templateUrl: "./query-list.component.html",
  styleUrls: ["./query-list.component.scss"]
})
export class QueryListComponent implements OnInit {
  @Input() assetId: string;
  queries: Array<any> = [];
  selectedQuery: any = {};
  showDetail: boolean;
  loggedInUserID: string;
  @Output() back = new EventEmitter<any>();

  constructor(private http: HttpHelperService,
              private authentication: AuthenticationService) { }

  ngOnInit() {
    // this.queries = [
    //   {
    //     to: "Consultant",
    //     userInfo: {
    //       firstName: "Jane",
    //       lastName: "Statham"
    //     },
    //     type: "Follow-Up",
    //     query: "I will update the documents",
    //     replies: [
    //       {
    //         message: "I need HIS document",
    //         userInfo: {
    //           firstName: "Jane",
    //           lastName: "Statham"
    //         },
    //         type: "received"
    //       },
    //       {
    //         message: "Okey I ll arrage it in 2 days.",
    //         type: "sent"
    //       },
    //       {
    //         message: "Lets create a shedule to meet",
    //         userInfo: {
    //           firstName: "Jane",
    //           lastName: "Statham"
    //         },
    //         type: "received"
    //       }
    //     ]
    //   },
    //   {
    //     to: "Consultant",
    //     type: "Follow-Up",
    //     userInfo: {
    //       firstName: "Jane",
    //       lastName: "Statham"
    //     },
    //     query: "I will update the documents"
    //   },
    //   {
    //     to: "Consultant",
    //     type: "Follow-Up",
    //     userInfo: {
    //       firstName: "Jane",
    //       lastName: "Statham"
    //     },
    //     query: "I will update the documents"
    //   },
    //   {
    //     to: "Consultant",
    //     type: "Follow-Up",
    //     userInfo: {
    //       firstName: "Jane",
    //       lastName: "Statham"
    //     },
    //     query: "I will update the documents"
    //   }
    // ];

    this.loggedInUserID = this.authentication.getUserInfo()._id;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.assetId !== '') {
      this.fetchActivities();
    }
  }

  fetchActivities() {

    this.http.find('followup', { query: { assetId: this.assetId } }).then((res) => {
      this.queries = res.data;

      for (const query of this.queries) {
        this.fetchUser(query);

        for(const reply of query.replies) {
          this.formatReply(reply);
        }
      }
    });
  }

  fetchUser(query) {
    this.http.find('users', { query: { _id: query.from } }).then((res) => {
      query.userInfo = res.data[0];
    });
  }

  formatReply(reply) {
      if(reply.userId === this.loggedInUserID) {
        reply.type = 'sent';
      } else {
        reply.type = 'received';
        this.http.find('users', { query: { _id: reply.userId } }).then((res) => {
          reply.userInfo = res.data[0];
        });
      }
  }

  select(query) {
    this.selectedQuery = query;
    this.showDetail = true;
  }
}
