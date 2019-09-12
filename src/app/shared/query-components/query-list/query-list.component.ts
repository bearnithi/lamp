import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-query-list",
  templateUrl: "./query-list.component.html",
  styleUrls: ["./query-list.component.scss"]
})
export class QueryListComponent implements OnInit {
  queries: Array<any> = [];
  selectedQuery: any = {};
  showDetail: boolean;
  @Output() back = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    this.queries = [
      {
        to: "Consultant",
        userInfo: {
          firstName: "Jane",
          lastName: "Statham"
        },
        type: "Follow-Up",
        query: "I will update the documents",
        replies: [
          {
            message: "I need HIS document",
            userInfo: {
              firstName: "Jane",
              lastName: "Statham"
            },
            type: "received"
          },
          {
            message: "Okey I ll arrage it in 2 days.",
            type: "sent"
          },
          {
            message: "Lets create a shedule to meet",
            userInfo: {
              firstName: "Jane",
              lastName: "Statham"
            },
            type: "received"
          }
        ]
      },
      {
        to: "Consultant",
        type: "Follow-Up",
        userInfo: {
          firstName: "Jane",
          lastName: "Statham"
        },
        query: "I will update the documents"
      },
      {
        to: "Consultant",
        type: "Follow-Up",
        userInfo: {
          firstName: "Jane",
          lastName: "Statham"
        },
        query: "I will update the documents"
      },
      {
        to: "Consultant",
        type: "Follow-Up",
        userInfo: {
          firstName: "Jane",
          lastName: "Statham"
        },
        query: "I will update the documents"
      }
    ];
  }

  select(query) {
    this.selectedQuery = query;
    this.showDetail = true;
  }
}
