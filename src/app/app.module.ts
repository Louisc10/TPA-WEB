import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./module/material/material.module";
import { SocialmediaModule } from './module/socialmedia/socialmedia.module';
import { MainWidgetComponent } from './components/widget/main-widget/main-widget.component';
import { CardRightComponent } from './components/daftar-login/card-right/card-right.component';
import { PartnerEventComponent } from './components/hiburan/partner-event/partner-event.component';
import { SubscribionComponent } from './components/footer/subscribion/subscribion.component';
import { MapsComponent } from './components/hotel/maps/maps.component';
import { HotelWidget } from './components/widget/hotel/hotel.component'
import { EntertainmentWidget } from './components/widget/entertainment/entertainment.component';
import { SewaMobilWidget } from './components/widget/sewa-mobil/sewa-mobil.component';
import { PesawatWidget } from './components/widget/pesawat/pesawat.component';
import { KeretaApiWidget } from './components/widget/kereta-api/kereta-api.component';
import { DatePickerComponent } from './components/widget/other/date-picker/date-picker.component';
import { GraphQLModule } from './graphql.module';
import { ImageSliderComponent } from './components/home/image-slider/image-slider.component';
import { WhatsappComponent } from './components/other/whatsapp/whatsapp.component';
import { RegisterComponent } from './components/daftar-login/register/register.component';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { EntertaimentItemComponent } from './components/searchItem/entertaiment-item/entertaiment-item.component';
import { EntertaimentFilterComponent } from './components/searchFilter/entertaiment-filter/entertaiment-filter.component';
import { MapsLeafletComponent } from './components/maps-leaflet/maps-leaflet.component';
import { TrainFilterComponent } from './components/searchFilter/train-filter/train-filter.component';
import { HotelFilterComponent } from './components/searchFilter/hotel-filter/hotel-filter.component';
import { HotelTableComponent } from './components/admin/hotel-table/hotel-table.component';
import { FlightTableComponent } from './components/admin/flight-table/flight-table.component';
import { TrainTableComponent } from './components/admin/train-table/train-table.component';
import { BlogTableComponent } from './components/admin/blog-table/blog-table.component';
import { EventTableComponent } from './components/admin/event-table/event-table.component';
import { HiburanImageSliderComponent } from './components/hiburan/hiburan-image-slider/hiburan-image-slider.component';
import { InsertTrainFormComponent } from './components/admin/train-table/insert-train-form/insert-train-form.component';
import { MatFormFieldModule } from '@angular/material';
import { ProfilComponent } from './components/other/profil/profil.component';
import { TextEditorComponent } from './components/other/text-editor/text-editor.component';
import { CarFilterComponent } from './components/searchFilter/car-filter/car-filter.component';
import { ConfirmationBoxComponent } from './components/admin/other/confirmation-box/confirmation-box.component';
import { UpdateTrainFormComponent } from './components/admin/train-table/update-train-form/update-train-form.component';
import { PaymentComponent } from './components/other/payment/payment.component';

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
    DefaultFooterComponent,
    MainWidgetComponent,
    CardRightComponent,
    PartnerEventComponent,
    SubscribionComponent,
    MapsComponent,
    RoutingComponents,
    HotelWidget,
    KeretaApiWidget,
    PesawatWidget,
    EntertainmentWidget,
    SewaMobilWidget,
    DatePickerComponent,
    ImageSliderComponent,
    WhatsappComponent,
    RegisterComponent,
    EntertaimentItemComponent,
    EntertaimentFilterComponent,
    MapsLeafletComponent,
    TrainFilterComponent,
    HotelFilterComponent,
    HotelTableComponent,
    FlightTableComponent,
    TrainTableComponent,
    BlogTableComponent,
    EventTableComponent,
    HiburanImageSliderComponent,
    InsertTrainFormComponent,
    ProfilComponent,
    TextEditorComponent,
    CarFilterComponent,
    ConfirmationBoxComponent,
    UpdateTrainFormComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SocialmediaModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA78FwfXaY_ZtA0yGJTSlzD3mUtSA13u9U'
    }),
    GraphQLModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    MatFormFieldModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    MainWidgetComponent,
    HotelWidget,
    SewaMobilWidget,
    EntertainmentWidget,
    PesawatWidget,
    KeretaApiWidget,
    CardRightComponent,
    RegisterComponent,
    InsertTrainFormComponent,
    ProfilComponent,
    TextEditorComponent,
    ConfirmationBoxComponent,
    UpdateTrainFormComponent,
    EntertaimentItemComponent,
  ]
})
export class AppModule { }
 
platformBrowserDynamic().bootstrapModule(AppModule);