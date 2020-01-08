import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { HotelWidget } from '../hotel/hotel.component';
import { PesawatWidget } from '../pesawat/pesawat.component';
import { KeretaApiWidget } from '../kereta-api/kereta-api.component';
import { SewaMobilWidget } from '../sewa-mobil/sewa-mobil.component';
import { EntertainmentWidget } from '../entertainment/entertainment.component';


@Component({
  selector: 'app-main-widget',
  templateUrl: './main-widget.component.html',
  styleUrls: ['./main-widget.component.sass']
})
export class MainWidgetComponent implements OnInit {
  _ref:any;
  @ViewChild('parent', { read: ViewContainerRef , static: true}) container: ViewContainerRef;
  
  constructor(private _cfr: ComponentFactoryResolver) { }

  ngOnInit() {
    this.showHotel();
  }

  showHotel(){
    this.removeObject();
    var comp = this._cfr.resolveComponentFactory(HotelWidget);
    var xComponent = this.container.createComponent(comp);
    this._ref = xComponent;

  }
  showPesawat(){
    this.removeObject();
    var comp = this._cfr.resolveComponentFactory(PesawatWidget);
    var xComponent = this.container.createComponent(comp);
    this._ref = xComponent;

  }
  showKeretaApi(){
    this.removeObject();
    var comp = this._cfr.resolveComponentFactory(KeretaApiWidget);
    var xComponent = this.container.createComponent(comp);
    this._ref = xComponent;

  }
  showSewaMobil(){
    this.removeObject();
    var comp = this._cfr.resolveComponentFactory(SewaMobilWidget);
    var xComponent = this.container.createComponent(comp);
    this._ref = xComponent;

  }
  showEntertainment(){
    this.removeObject();
    var comp = this._cfr.resolveComponentFactory(EntertainmentWidget);
    var xComponent = this.container.createComponent(comp);
    this._ref = xComponent;

  }

  removeObject(){
    if(this._ref != null){
      this._ref.destroy();
    }
  }
}
