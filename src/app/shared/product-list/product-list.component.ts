import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public productList: any;
  role: string;
  constructor(private http: HttpHelperService,
    private authentication: AuthenticationService) { }

  @Input()
  filter: any;

  ngOnInit() {
    this.productList = [{
      title: 'Apartment',
      src: 'assets/images/homesliders/architectural-design-architecture-country-home-2287310.jpg',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt explicabo in dolorem reiciendis excepturi maxime mollitia ad voluptas natus doloribus, eos vero corporis quos corrupti facilis? Inventore iste quo sunt.',
      price: '2000',
      type: 'LAND',
      location: 'Tirunelveli',
      baths: 2,
      beds: 2,
      area: 1000,
      parking: 1,
      date: '20/12/2019'
    }, {
      title: 'Flat',
      src: 'assets/images/homesliders/apartment-apartment-building-architecture-323705.jpg',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt explicabo in dolorem reiciendis excepturi maxime mollitia ad voluptas natus doloribus, eos vero corporis quos corrupti facilis? Inventore iste quo sunt.',
      price: '1000000',
      type: 'LAND',
      location: 'Tirunelveli',
      baths: 3,
      beds: 2,
      area: 2000,
      parking: 1,
      date: '20/12/2019'
    }, {
      title: 'Home',
      src: 'assets/images/homesliders/apartment-ceiling-chairs-1571460.jpg',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt explicabo in dolorem reiciendis excepturi maxime mollitia ad voluptas natus doloribus, eos vero corporis quos corrupti facilis? Inventore iste quo sunt.',
      price: '3000000',
      type: 'LAND',
      location: 'Tirunelveli',
      baths: 2,
      beds: 2,
      area: 1000,
      parking: 1,
      date: '20/12/2019'
    }, {
      title: 'Villa',
      src: 'assets/images/homesliders/architecture-beautiful-exterior-106399.jpg',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt explicabo in dolorem reiciendis excepturi maxime mollitia ad voluptas natus doloribus, eos vero corporis quos corrupti facilis? Inventore iste quo sunt.',
      price: '200000',
      type: 'LAND',
      location: 'Tirunelveli',
      baths: 3,
      beds: 4,
      area: 5000,
      parking: 2,
      date: '20/12/2019'
    }, {
      title: 'Car',
      src: 'assets/images/homesliders/automobile-automotive-car-116675.jpg',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt explicabo in dolorem reiciendis excepturi maxime mollitia ad voluptas natus doloribus, eos vero corporis quos corrupti facilis? Inventore iste quo sunt.',
      price: '250000',
      type: 'CAR',
      location: 'Tirunelveli',
      baths: 3,
      beds: 4,
      area: 5000,
      parking: 2,
      date: '20/12/2019'
    }, {
      title: 'MRI',
      src: 'assets/images/homesliders/care-chair-clean-305567.jpg',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt explicabo in dolorem reiciendis excepturi maxime mollitia ad voluptas natus doloribus, eos vero corporis quos corrupti facilis? Inventore iste quo sunt.',
      price: '500000',
      type: 'EQUIPMENT',
      location: 'Tirunelveli',
      baths: 3,
      beds: 4,
      area: 5000,
      parking: 2,
      date: '20/12/2019'
    }, {
      title: 'CT',
      src: 'assets/images/homesliders/commerce-connection-data-132700.jpg',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt explicabo in dolorem reiciendis excepturi maxime mollitia ad voluptas natus doloribus, eos vero corporis quos corrupti facilis? Inventore iste quo sunt.',
      price: '600000',
      type: 'EQUIPMENT',
      location: 'Tirunelveli',
      baths: 3,
      beds: 4,
      area: 5000,
      parking: 2,
      date: '20/12/2019'
    }];
    this.role = this.authentication.getUserInfo().role;
    this.fetchProducts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.filter) {
      if (Object.keys(this.filter).length > 0) {
        this.fetchProducts();
      }
    }
  }

  fetchProducts() {
    this.http.find('assets', { query: this.filter }).then((res) => {
      this.productList = res.data;
    });
  }

  searchFilters(searchData) {
    const propertyFilter = {};

    for (const key in searchData) {
      if (searchData[key] !== '') {
        propertyFilter[key] = searchData[key];
      }
    }

    this.filter = propertyFilter;
    this.fetchProducts();
  }

}
