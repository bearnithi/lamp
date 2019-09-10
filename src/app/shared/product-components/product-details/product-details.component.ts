import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  sliders: any[] = [];
  selectedProduct: any;
  amenties: any[] = [];
  constructor(private store: StoreService) { }

  ngOnInit() {
    this.selectedProduct = this.store.getValue('Selected_Product');
    if (this.selectedProduct && this.selectedProduct.assetDetails.amenties) {
      this.amenties = this.selectedProduct.assetDetails.amenties.split(',');
      // if (this.amenties.indexOf(tempval) === -1) {
      //   this.amenties.push(tempval);
      // }
    }

    this.sliders = [
      {
        width: "100%",
        height: "500px",
        src:
          "assets/images/homesliders/architectural-design-architecture-country-home-2287310.jpg"
      },
      {
        width: "100%",
        height: "500px",
        src:
          "assets/images/homesliders/apartment-apartment-building-architecture-323705.jpg"
      },
      {
        width: "100%",
        height: "500px",
        src: "assets/images/homesliders/apartment-ceiling-chairs-1571460.jpg"
      },
      {
        width: "100%",
        height: "500px",
        src:
          "assets/images/homesliders/architecture-beautiful-exterior-106399.jpg"
      },
      {
        width: "100%",
        height: "500px",
        src: "assets/images/homesliders/automobile-automotive-car-116675.jpg"
      },
      {
        width: "100%",
        height: "500px",
        src: "assets/images/homesliders/care-chair-clean-305567.jpg"
      },
      {
        width: "100%",
        height: "500px",
        src: "assets/images/homesliders/commerce-connection-data-132700.jpg"
      }
    ];
  }

}
