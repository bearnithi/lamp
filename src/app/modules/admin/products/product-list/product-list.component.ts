import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { Location } from '@angular/common';
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  filterObj: any = {};
  selectedProduct: any;
  productdetailssubscribtion: any;

  constructor(private routes: ActivatedRoute, private router: Router,
    private http: HttpHelperService,
    public location: Location, private store: StoreService) { }

  ngOnInit() {
    this.routes.params.subscribe((params: Params) => {
      if (params['id'] !== undefined) {
        this.filterObj['lenderId'] = params['id'];
      }
    });

    this.productdetailssubscribtion = this.store.showproductdetails.subscribe((res) => {
      this.selectedProduct = this.store.setValue('Selected_Product', res);
      this.router.navigate(['admin', 'product-details']);
    });

  }

  addProperty() {
    this.router.navigate(['admin', 'add-product', 'add']);
  }

  ngOnDestroy(): void {
    if (this.productdetailssubscribtion) {
      this.productdetailssubscribtion.unsubscribe();
    }
  }

}
