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

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pesawat', component: PesawatComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'keretaapi', component: KeretaApiComponent },
  { path: 'sewamobil', component: SewaMobilComponent },
  { path: 'hiburan', component: HiburanComponent },
  { path: 'tixpoint', component: TixPointComponent },
  { path: 'cekorder', component: CekOrderComponent },
  { path: 'daftarlogin', component: DaftarLoginComponent },
  { path: 'unduhaplikasi', component: UnduhAplikasiComponent },
  { path: 'promo', component: PromoListComponent },
  { path: 'help', component: HelpCenterComponent },
  { path: 'texteditor', component: TextEditorComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'hiburan/detail', component: EntertaimentItemComponent },
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
]