import { Component, OnInit } from '@angular/core';
import { Entertainment } from 'src/app/models/entertainment';
import { BoughtService } from 'src/app/service/bought.service';
import { Router } from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-entertaiment-item',
  templateUrl: './entertaiment-item.component.html',
  styleUrls: ['./entertaiment-item.component.sass']
})

export class EntertaimentItemComponent implements OnInit {

  private imageChoosen: String
  private map: any;
  private latitude: any = -6.201987;
  private longitude: any = 106.781616;
  private item: Entertainment

  private qty = 0
  private date = null

  constructor(private datas: BoughtService, private route: Router) { 
    this.item = datas.entertainment
  }

  ngOnInit() {
    if(this.item == null){
      this.route.navigate(['hiburan'])
    }
    this.initMap()
    this.imageChoosen = this.datas.entertainment.photoLink1
  }

  closeDetail(){
    this.route.navigate(['hiburan'])
  }
  
  initMap() {
    this.map = L.map('map').setView([this.item.latitude, this.item.longitude], 13);


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([this.item.latitude, this.item.longitude]).addTo(this.map).openPopup();
  }

  
  changePic(x) {
    if (x == 1) {
      x = this.item.photoLink1
    }
    else if (x == 2) {
      x = this.item.photoLink2
    }
    else if (x == 3) {
      x = this.item.photoLink3
    }
    else if (x == 4) {
      x = this.item.photoLink4
    }
    else if (x == 5) {
      x = this.item.photoLink5
    }
    else if (x == 6) {
      x = this.item.photoLink6
    }
    this.imageChoosen = x
  }

  check(){
    if(this.qty <= 0 ){
      alert("must be more than 0")
    }
    else if(this.date == null){
      alert("Pick Date")
    }
    else{
      this.datas.date_1 = this.date
      this.datas.quantity = this.qty
      this.route.navigate(['ticketOrder'])
    }
  }

}
