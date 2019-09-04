import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatButtonModule,
  MatDialogModule
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
import { AuctionItemComponent } from './auction-item/auction-item.component';
import { AuctionCarouselComponent } from './auction-carousel/auction-carousel.component';
import { RouterModule } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { HomeFeaturesComponent } from './features/home-features/home-features.component';
import { EquipmentFeaturesComponent } from './features/equipment-features/equipment-features.component';
import { VehicleFeaturesComponent } from './features/vehicle-features/vehicle-features.component';
import { SoldItemComponent } from './sold-item/sold-item.component';
import { SoldCarouselComponent } from './sold-carousel/sold-carousel.component';


@NgModule({
  declarations: [
    PropertyItemComponent,
    SearchComponent,
    StatCardComponent,
    PageHeaderComponent,
    NavbarComponent,
    CarouselComponent,
    ProductCarouselComponent,
    ContentHeaderComponent,
    AuctionItemComponent,
    AuctionCarouselComponent,
    UserInfoComponent,
    ConfirmDialogComponent,
    HomeFeaturesComponent,
    EquipmentFeaturesComponent,
    VehicleFeaturesComponent,
    SoldItemComponent,
    SoldCarouselComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    CarouselModule,
    RouterModule
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
    ContentHeaderComponent,
    PropertyItemComponent,
    AuctionCarouselComponent,
    UserInfoComponent,
    ConfirmDialogComponent,
    SoldItemComponent,
    SoldCarouselComponent
  ],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
