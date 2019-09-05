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
import { NewsAnnouncementsComponent } from './news-announcements/news-announcements.component';
import { SalesChartComponent } from './sales-chart/sales-chart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddPropertyComponent } from './add-product/add-property/add-property.component';
import { MachineryComponent } from './add-product/machinery/machinery.component';
import { EquipmentsComponent } from './add-product/equipments/equipments.component';
import { VehiclesComponent } from './add-product/vehicles/vehicles.component';
import { JewelleryComponent } from './add-product/jewellery/jewellery.component';
import { StockLotsComponent } from './add-product/stock-lots/stock-lots.component';
import { TakeOverComponent } from './add-product/take-over/take-over.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidentialFlatComponent } from './add-product/residential-flat/residential-flat.component';
import { ResidentialHouseComponent } from './add-product/residential-house/residential-house.component';
import { CommercialBuildingComponent } from './add-product/commercial-building/commercial-building.component';
import { CarsComponent } from './add-product/cars/cars.component';
import { LcvComponent } from './add-product/lcv/lcv.component';
import { GrowlComponent } from './growl/growl.component';
import { FormLoaderComponent } from './form-loader/form-loader.component';



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
    FormLoaderComponent],
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
    FormLoaderComponent
  ],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
