import { Component, OnInit } from "@angular/core";
import { HttpHelperService } from "src/app/services/http-helper.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  showSignup: boolean;
  sliders: Array<any> = [];
  productSliders: Array<any> = [];
  newOffers: Array<any> = [];
  auctionList: Array<any> = [];
  soldList: Array<any> = [];
  constructor(private http: HttpHelperService) { }

  ngOnInit() {
    this.setSliders();
    this.fetchNewOffers();
    this.fetchAuctions();
    this.fetchSoldItems();
  }

  fetchNewOffers() {
    this.http
      .find("assets", { query: { $limit: 10, $sort: { _id: -1 } } })
      .then(res => {
        this.newOffers = res.data;
      });
  }

  setSliders() {
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

  fetchAuctions() {
    const query = { type: 'auctioninfo', $limit: 10, $sort: { _id: -1 } };
    this.http.find('dashboard', { query }).then((res) => {
      this.auctionList = res;
    });
  }

  fetchSoldItems() {
    const query = { type: 'auctioninfo', $limit: 10, $sort: { _id: -1 } };
    this.http.find('dashboard', { query }).then((res) => {
      this.soldList = res;
    });
  }
}
