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
    this.productList = [];
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
