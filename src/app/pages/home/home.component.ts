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
  constructor(private http: HttpHelperService) {}

  ngOnInit() {
    this.fetchNewOffers();
    this.auctionList = [
      {
        _id: "1",
        auctionInfo: {
          date: "22/11/2018"
        },
        lenderInfo: {
          bankName: "Indian Bank"
        },
        assetInfo: {
          assetType: "Residential Home",
          assetDetails: {
            floorPrice: '2000'
          }
        }
      },
      {
        _id: "1",
        auctionInfo: {
          date: "22/11/2018"
        },
        lenderInfo: {
          bankName: "Indian Bank"
        },
        assetInfo: {
          assetType: "Residential Home",
          assetDetails: {
            floorPrice: '2000'
          }
        }
      }
    ];

    this.setSliders();

    this.productSliders = [
      {
        title: "Apartment",
        src:
          "assets/images/homesliders/architectural-design-architecture-country-home-2287310.jpg",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt explicabo in dolorem reiciendis excepturi maxime mollitia ad voluptas natus doloribus, eos vero corporis quos corrupti facilis? Inventore iste quo sunt.",
        price: "2000",
        type: "LAND",
        location: "Tirunelveli",
        baths: 2,
        beds: 2,
        area: 1000,
        parking: 1,
        date: "20/12/2019"
      },
      {
        title: "Flat",
        src:
          "assets/images/homesliders/apartment-apartment-building-architecture-323705.jpg",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt explicabo in dolorem reiciendis excepturi maxime mollitia ad voluptas natus doloribus, eos vero corporis quos corrupti facilis? Inventore iste quo sunt.",
        price: "1000000",
        type: "LAND",
        location: "Tirunelveli",
        baths: 3,
        beds: 2,
        area: 2000,
        parking: 1,
        date: "20/12/2019"
      },
      {
        title: "Home",
        src: "assets/images/homesliders/apartment-ceiling-chairs-1571460.jpg",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt explicabo in dolorem reiciendis excepturi maxime mollitia ad voluptas natus doloribus, eos vero corporis quos corrupti facilis? Inventore iste quo sunt.",
        price: "3000000",
        type: "LAND",
        location: "Tirunelveli",
        baths: 2,
        beds: 2,
        area: 1000,
        parking: 1,
        date: "20/12/2019"
      },
      {
        title: "Villa",
        src:
          "assets/images/homesliders/architecture-beautiful-exterior-106399.jpg",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt explicabo in dolorem reiciendis excepturi maxime mollitia ad voluptas natus doloribus, eos vero corporis quos corrupti facilis? Inventore iste quo sunt.",
        price: "200000",
        type: "LAND",
        location: "Tirunelveli",
        baths: 3,
        beds: 4,
        area: 5000,
        parking: 2,
        date: "20/12/2019"
      },
      {
        title: "Car",
        src: "assets/images/homesliders/automobile-automotive-car-116675.jpg",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt explicabo in dolorem reiciendis excepturi maxime mollitia ad voluptas natus doloribus, eos vero corporis quos corrupti facilis? Inventore iste quo sunt.",
        price: "250000",
        type: "CAR",
        location: "Tirunelveli",
        baths: 3,
        beds: 4,
        area: 5000,
        parking: 2,
        date: "20/12/2019"
      },
      {
        title: "MRI",
        src: "assets/images/homesliders/care-chair-clean-305567.jpg",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt explicabo in dolorem reiciendis excepturi maxime mollitia ad voluptas natus doloribus, eos vero corporis quos corrupti facilis? Inventore iste quo sunt.",
        price: "500000",
        type: "EQUIPMENT",
        location: "Tirunelveli",
        baths: 3,
        beds: 4,
        area: 5000,
        parking: 2,
        date: "20/12/2019"
      },
      {
        title: "CT",
        src: "assets/images/homesliders/commerce-connection-data-132700.jpg",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt explicabo in dolorem reiciendis excepturi maxime mollitia ad voluptas natus doloribus, eos vero corporis quos corrupti facilis? Inventore iste quo sunt.",
        price: "600000",
        type: "EQUIPMENT",
        location: "Tirunelveli",
        baths: 3,
        beds: 4,
        area: 5000,
        parking: 2,
        date: "20/12/2019"
      }
    ];
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
}
