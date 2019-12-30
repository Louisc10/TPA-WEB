import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarBottomComponent } from './components/navbar/navbar-bottom/navbar-bottom.component';
import { NavbarTopComponent } from './components/navbar/navbar-top/navbar-top.component';
import { HomeComponent } from './components/home/home.component';
import { PesawatComponent } from './components/pesawat/pesawat.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { KeretaApiComponent } from './components/kereta-api/kereta-api.component';
import { SewaMobilComponent } from './components/sewa-mobil/sewa-mobil.component';
import { HiburanComponent } from './components/hiburan/hiburan.component';
import { TixPointComponent } from './components/tix-point/tix-point.component';
import { CekOrderComponent } from './components/cek-order/cek-order.component';
import { DaftarLoginComponent } from './components/daftar-login/daftar-login.component';
import { PromoListComponent } from './components/promo-list/promo-list.component';
import { HelpCenterComponent } from './components/help-center/help-center.component';
import { UnduhAplikasiComponent } from './components/unduh-aplikasi/unduh-aplikasi.component';
import { AdminComponent } from './components/admin/admin.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainFooterComponent } from './components/footer/main-footer/main-footer.component';
import { DefaultFooterComponent } from './components/footer/default-footer/default-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarBottomComponent,
    NavbarTopComponent,
    HomeComponent,
    PesawatComponent,
    KeretaApiComponent,
    HotelComponent,
    SewaMobilComponent,
    HiburanComponent,
    TixPointComponent,
    CekOrderComponent,
    DaftarLoginComponent,
    PromoListComponent,
    HelpCenterComponent,
    UnduhAplikasiComponent,
    AdminComponent,
    FooterComponent,
    MainFooterComponent,
    DefaultFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
