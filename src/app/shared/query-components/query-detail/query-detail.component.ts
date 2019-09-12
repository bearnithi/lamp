import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-query-detail',
  templateUrl: './query-detail.component.html',
  styleUrls: ['./query-detail.component.scss']
})
export class QueryDetailComponent implements OnInit {
  @Input() query: any = {};
  @Output() back = new EventEmitter<any>();
  message: string;
  constructor() { }

  ngOnInit() {

  }

  sendMessage() {
    if(this.message.trim() !== '') {
      this.query.replies.push({
        type: 'sent',
        message: this.message
      });
    }
  }

}
