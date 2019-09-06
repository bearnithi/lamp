import { Component, OnInit } from '@angular/core';
import { HttpHelperService } from 'src/app/services/http-helper.service';

@Component({
  selector: 'app-buyers-interests',
  templateUrl: './buyers-interests.component.html',
  styleUrls: ['./buyers-interests.component.scss']
})
export class BuyersInterestsComponent implements OnInit {
  buyerInterests: Array<any> = [];
  constructor(private http: HttpHelperService) { }

  ngOnInit() {
    this.fetchInterests();
  }

  fetchInterests() {
    this.http.find('dashboard', {
       query: {type: 'userinterests' }
    }).then((res) => {
      this.buyerInterests = res.data;
    });
  }

}
