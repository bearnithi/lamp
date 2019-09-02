import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showSignup: boolean;
  sliders: Array<any> = [];
  constructor() { }

  ngOnInit() {
    this.sliders = [{
      width: '100%',
      height: '500px',
      src: 'assets/images/homesliders/apartment-apartment-building-architecture-323705.jpg'
    }, {
      width: '100%',
      height: '500px',
      src: 'assets/images/homesliders/apartment-ceiling-chairs-1571460.jpg'
    }, {
      width: '100%',
      height: '500px',
      src: 'assets/images/homesliders/architectural-design-architecture-country-home-2287310.jpg'
    }, {
      width: '100%',
      height: '500px',
      src: 'assets/images/homesliders/architecture-beautiful-exterior-106399.jpg'
    }, {
      width: '100%',
      height: '500px',
      src: 'assets/images/homesliders/automobile-automotive-car-116675.jpg'
    }, {
      width: '100%',
      height: '500px',
      src: 'assets/images/homesliders/care-chair-clean-305567.jpg'
    }, {
      width: '100%',
      height: '500px',
      src: 'assets/images/homesliders/commerce-connection-data-132700.jpg'
    }];
  }

}
