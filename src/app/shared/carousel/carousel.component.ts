import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() carouselID: string;
  @Input() sliders: Array<any> = [];
  constructor() { }

  ngOnInit() {
  }

}
