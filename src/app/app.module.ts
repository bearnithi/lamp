import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './pages/home/home.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { HomeHeaderComponent } from './pages/home-header/home-header.component';
import { SharedModule } from './shared/shared.module';
import { HttpHelperService } from './services/http-helper.service';
import { StoreService } from './services/store.service';
import { ValidationService } from './services/validation.service';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticationComponent,
    HomeHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    HttpHelperService,
    StoreService,
    HttpHelperService,
    ValidationService,
    AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
