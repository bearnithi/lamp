import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-consultant-products',
  templateUrl: './consultant-products.component.html',
  styleUrls: ['./consultant-products.component.scss']
})
export class ConsultantProductsComponent implements OnInit {
  filterObj: any = {};
  activitySubscription: Subscription;
  showActivity: boolean;
  constructor(private store: StoreService) { }

  ngOnInit() {
    this.activitySubscription = this.store.showActivity.subscribe((res: any) => {
      this.showActivity = res.show || false;
    });
  }

}
