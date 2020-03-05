import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PesawatComponent } from './components/pesawat/pesawat.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { KeretaApiComponent } from './components/kereta-api/kereta-api.component';
import { SewaMobilComponent } from './components/sewa-mobil/sewa-mobil.component';
import { HiburanComponent } from './components/hiburan/hiburan.component';
import { DaftarLoginComponent } from './components/daftar-login/daftar-login.component';
import { CekOrderComponent } from './components/cek-order/cek-order.component';
import { TixPointComponent } from './components/tix-point/tix-point.component';
import { UnduhAplikasiComponent } from './components/unduh-aplikasi/unduh-aplikasi.component';
import { PromoListComponent } from './components/promo-list/promo-list.component';
import { HelpCenterComponent } from './components/help-center/help-center.component';
import { HotelWidget } from './components/widget/hotel/hotel.component'
import { EntertaimentItemComponent } from './components/searchItem/entertaiment-item/entertaiment-item.component';
import { AdminComponent } from './components/admin/admin.component';
import { TextEditorComponent } from './components/other/text-editor/text-editor.component';
import { PaymentComponent } from './components/other/payment/payment.component';
import { BayarComponent } from './components/other/bayar/bayar.component';
import { SuccessComponent } from './components/other/success/success.component';
import { InsertEventFormComponent } from './components/admin/event-table/insert-event-form/insert-event-form.component';
import { EventOrderComponent } from './components/searchItem/entertainmentItem/event-order/event-order.component';
import { EventBayarComponent } from './components/searchItem/entertainmentItem/event-order/event-bayar/event-bayar.component';
import { InsertHotelFormComponent } from './components/admin/hotel-table/insert-hotel-form/insert-hotel-form.component';
import { BlogHomeComponent } from './components/blog/blog-home/blog-home.component';
import { BlogDetailComponent } from './components/blog/blog-detail/blog-detail.component';
import { ChattingComponent } from './components/other/chatting/chatting.component';
import { FileUploadComponent } from './components/other/file-upload/file-upload.component';
import { HotelItemComponent } from './components/searchItem/hotel-item/hotel-item.component';
import { HomeChatroomComponent } from './components/other/chatting/home-chatroom/home-chatroom.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'admin/insertEvent', component: InsertEventFormComponent },
  { path: 'admin/insertHotel', component: InsertHotelFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pesawat', component: PesawatComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'hotel/detail/:id', component: HotelItemComponent },
  { path: 'keretaapi', component: KeretaApiComponent },
  { path: 'sewamobil', component: SewaMobilComponent },
  { path: 'hiburan', component: HiburanComponent },
  { path: 'tixpoint', component: TixPointComponent },
  { path: 'cekorder', component: CekOrderComponent },
  { path: 'daftarlogin', component: DaftarLoginComponent },
  { path: 'fileupload', component: FileUploadComponent },
  { path: 'unduhaplikasi', component: UnduhAplikasiComponent },
  { path: 'promo/detail/:id', component: PromoListComponent },
  { path: 'help', component: HelpCenterComponent },
  { path: 'texteditor', component: TextEditorComponent },
  { path: 'ticketOrder', component: EventOrderComponent },
  { path: 'ticketOrder/bayar', component: EventBayarComponent },
  { path: 'chat', component: HomeChatroomComponent },
  { path: 'chat/:id', component: ChattingComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'payment/bayar', component: BayarComponent },
  { path: 'payment/bayar/success', component: SuccessComponent },
  { path: 'hiburan/detail', component: EntertaimentItemComponent },
  { path: 'blog/view/home', component: BlogHomeComponent },
  { path: 'blog/view/detail/:id', component: BlogDetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  HotelWidget,
  HomeComponent,
  PesawatComponent,
  HotelComponent,
  KeretaApiComponent,
  SewaMobilComponent,
  HiburanComponent,
  TixPointComponent,
  CekOrderComponent,
  DaftarLoginComponent,
  UnduhAplikasiComponent,
  PromoListComponent,
  HelpCenterComponent,
  EntertaimentItemComponent,
  AdminComponent,
  PaymentComponent,
  BayarComponent,
  SuccessComponent,
  EventBayarComponent,
  EventOrderComponent,
  InsertHotelFormComponent,
  InsertEventFormComponent,
]