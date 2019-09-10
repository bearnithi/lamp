import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';

import {
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatButtonModule,
  MatDialogModule
} from '@angular/material';

import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';



import {
  AuctionItemComponent,
  AuctionCarouselComponent,
  AuctionListComponent
} from './auction-components';

import {
  ConfirmDialogComponent,
  GrowlComponent,
  FormLoaderComponent
} from './dialog-notification-components';

import {
  ProductListComponent,
  ProductCarouselComponent,
  PropertyItemComponent,
  ProductListItemComponent,
  SearchComponent,
  SearchFilterCarsComponent,
  SearchFilterHomeComponent,
  SearchFilterMachineryComponent,
  SearchFilterTakeOverComponent,
  SearchFilterStockLotsComponent,
  ProductDetailsComponent,
  ProductTeamAssignComponent
} from './product-components';

import {
  AddressGroupComponent,
  ContactFormGroupComponent
} from './formgroups';

import {
  AddProductComponent,
  AddPropertyComponent,
  MachineryComponent,
  EquipmentsComponent,
  VehiclesComponent,
  JewelleryComponent,
  StockLotsComponent,
  TakeOverComponent,
  ResidentialFlatComponent,
  ResidentialHouseComponent,
  CommercialBuildingComponent,
  CarsComponent,
  LcvComponent
} from './add-product';

import {
  StatCardComponent,
  SalesChartComponent,
} from './chart-components';

import {
  SoldListComponent,
  SoldCarouselComponent,
  SoldItemComponent
} from './sales-close-components';


import { PageHeaderComponent } from './page-header/page-header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HomeFeaturesComponent } from './features/home-features/home-features.component';
import { EquipmentFeaturesComponent } from './features/equipment-features/equipment-features.component';
import { VehicleFeaturesComponent } from './features/vehicle-features/vehicle-features.component';
import { NewsAnnouncementsComponent } from './news-announcements/news-announcements.component';
import { FollowUpFormComponent } from './follow-up-form/follow-up-form.component';



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
    SoldCarouselComponent,
    NewsAnnouncementsComponent,
    SalesChartComponent,
    ProductListComponent,
    AddProductComponent,
    AddPropertyComponent,
    MachineryComponent,
    EquipmentsComponent,
    VehiclesComponent,
    JewelleryComponent,
    StockLotsComponent,
    TakeOverComponent,
    ResidentialFlatComponent,
    ResidentialHouseComponent,
    CommercialBuildingComponent,
    CarsComponent,
    LcvComponent,
    GrowlComponent,
    FormLoaderComponent,
    ProductListItemComponent,
    AuctionListComponent,
    AddressGroupComponent,
    SearchFilterCarsComponent,
    SearchFilterHomeComponent,
    SearchFilterMachineryComponent,
    SearchFilterTakeOverComponent,
    SearchFilterStockLotsComponent,
    FollowUpFormComponent,
    ContactFormGroupComponent,
    ProductDetailsComponent,
    SoldListComponent,
    ProductTeamAssignComponent],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    SoldCarouselComponent,
    NewsAnnouncementsComponent,
    SalesChartComponent,
    ProductListComponent,
    AddProductComponent,
    GrowlComponent,
    FormLoaderComponent,
    AuctionListComponent,
    AddressGroupComponent,
    ContactFormGroupComponent,
    SoldListComponent,
    ProductTeamAssignComponent,
    ProductDetailsComponent,
    ContactFormGroupComponent
  ],
  entryComponents: [
    ConfirmDialogComponent,
    ProductTeamAssignComponent
  ]
})
export class SharedModule { }
