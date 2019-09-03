import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatButtonModule
} from '@angular/material';
import { PropertyItemComponent } from './property-item/property-item.component';
import { SearchComponent } from './search/search.component';
import { StatCardComponent } from './stat-card/stat-card.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { ContentHeaderComponent } from './content-header/content-header.component';


@NgModule({
  declarations: [
    PropertyItemComponent,
    SearchComponent,
    StatCardComponent,
    PageHeaderComponent,
    NavbarComponent,
    CarouselComponent,
    ProductCarouselComponent,
    ContentHeaderComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    CarouselModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    StatCardComponent,
    PageHeaderComponent,
    NavbarComponent,
    CarouselComponent,
    ProductCarouselComponent,
    SearchComponent,
    ContentHeaderComponent
  ]
})
export class SharedModule { }
