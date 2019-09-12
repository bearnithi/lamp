import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpHelperService } from 'src/app/services/http-helper.service';

@Component({
  selector: 'app-query-detail',
  templateUrl: './query-detail.component.html',
  styleUrls: ['./query-detail.component.scss']
})
export class QueryDetailComponent implements OnInit {
  @Input() query: any = {};
  @Output() back = new EventEmitter<any>();
  message: string;
  constructor(private authentication: AuthenticationService,
              private http: HttpHelperService) { }

  ngOnInit() {

  }

  sendMessage() {
    if (this.message.trim() !== '') {
      this.query.replies.push({
        message: this.message,
        userId: this.authentication.getUserInfo()._id
      });

      this.http.patch('followup', this.query._id, this.query).then((res) => {
        console.log('msg sent');
      });
    }
  }


}
