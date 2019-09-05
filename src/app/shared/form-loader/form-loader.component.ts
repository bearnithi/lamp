import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-loader',
  templateUrl: './form-loader.component.html',
  styleUrls: ['./form-loader.component.scss']
})
export class FormLoaderComponent implements OnInit {
  showLoader: boolean;
  loaderSubscription: Subscription;
  constructor(public store: StoreService ) { }

  ngOnInit() {
   this.loaderSubscription =  this.store.showLoader.subscribe((show: boolean) => {
      this.showLoader = show;
    })
  }

  ngOnDestroy(): void {
    this.loaderSubscription.unsubscribe();
  }

}
