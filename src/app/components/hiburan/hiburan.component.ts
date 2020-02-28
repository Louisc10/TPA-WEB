import { Component, AfterViewInit } from '@angular/core';
import { Entertainment } from 'src/app/models/entertainment';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { EntertainmentFilterServiceService } from 'src/app/service/entertainment-filter-service.service';
import * as L from 'leaflet';
import { BoughtService } from 'src/app/service/bought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hiburan',
  templateUrl: './hiburan.component.html',
  styleUrls: ['./hiburan.component.sass']
})
export class HiburanComponent implements AfterViewInit {
  private datas: Entertainment[];
  private list: Entertainment[];
  // private show: Entertainment[];
  private item: Entertainment;
  private detail = false;
  private click = false;
  private urutkan = "Rekomendasi"
  private imageChoosen = "Rekomendasi"

  private map: any;
  private latitude: any = -6.201987;
  private longitude: any = 106.781616;

  // private notscrolly = true
  // private notEmptyPost = true

  constructor(
    private apollo: BackendServiceService, 
    private data: EntertainmentFilterServiceService, 
    private b: BoughtService, 
    private router: Router) { 
  }

  ngAfterViewInit() {
    this.apollo.getAllEntertainment().subscribe(
      async Query => {
        this.datas = Query.data.getAllEntertainment
        await this.newlyVar();
      }
    );

  }
  array = [];
  sum = 15;
  scrollDistance = 0.1;

  appendItems(startIndex, endIndex) {
    for (let i = startIndex; i < this.sum; ++i) {
      this.array = [...this.array, ...[this.list[i]]];
    }
  }
  
  onScrollDown (ev) {
    console.log('scrolled down!!', ev);
    const start = this.sum;
    this.sum += 20;
    if(this.sum > this.list.length)
    this.sum = this.list.length
    this.appendItems(start, this.sum);
  }

  initMap() {
    console.log("Lat: " + this.latitude);
    console.log("Long: " + this.longitude);
    // this.latitude =  this.item.latitude
    // this.longitude = this.item.longitude
    this.map = L.map('map').setView([this.latitude, this.longitude], 13);


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // L.marker([this.latitude, this.longitude]).addTo(this.map).openPopup();
  }

  changeUrutkan(x) {
    this.urutkan = x
    if (x == ("Harga: Rendah ke Tinggi")) {
      this.cheapToExpensive()
    }
    else if (x == ("Harga: Tinggi ke Rendah")) {
      this.expensiveToCheap()
    }
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

  doClick() {
    this.click = true;
  }

  newlyVar() {
    this.list = this.datas;
    console.table(this.list)
    this.appendItems(0, this.sum);
    // console.table(this.array)
  }

  doFilter() {
    var min = this.data.value;
    var max = this.data.value1;

    var date1 = this.data.date1;
    var date2 = this.data.date2;

    var activities = this.data.activities;
    var attractions = this.data.attractions;
    var events = this.data.events;

    var penawaran = this.data.penawaran;

    var temp = []
    this.list = this.datas;
    for (var i = 0; i < this.datas.length; i++) {
      if (this.datas[i]["price"] >= min && this.datas[i]["price"] <= max) {
        temp.push(this.datas[i])
      }
    }
    this.list = temp;

    if (date1 != null) {
      temp = []
      // for(var i  = 0; i < this.list.length; i ++){
      //   if(this.list[i]["price"] >= ){
      //     temp.push(this.list[i])
      //   }
      // }
      // this.list = temp
    }

    if (date2 != null) {
      temp = []
      // for(var i  = 0; i < this.list.length; i ++){
      //   if(this.list[i]["price"] >= ){
      //     temp.push(this.list[i])
      //   }
      // }
      // this.list = temp
    }

    // console.log("activities " + activities)
    // console.log("attractions " + attractions)
    // console.log("events " + events)
    // console.log("penawaran " + penawaran)
    if (activities == true || attractions == true || events == true) {
      // console.log("===============")
      temp = []
      if (activities == true) {
        // console.log("212231")
        for (var i = 0; i < this.list.length; i++) {
          console.log(this.list[i]["category"])
          if (this.list[i]["category"] == "activities") {
            // console.log("=ZZZ=")
            temp.push(this.list[i])
          }
        }
      }
      if (attractions == true) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i]["category"] == "attractions") {
            temp.push(this.list[i])
          }
        }
      }
      if (events == true) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i]["category"] == "events") {
            temp.push(this.list[i])
          }
        }
      }
      this.list = temp
    }

    if (penawaran) {
      temp = []
      // for(var i  = 0; i < this.list.length; i ++){
      //   if(this.list[i]["penawaran"].equals("events")){
      //     temp.push(this.list[i])
      //   }
      // }
      // this.list = temp
    }

    this.changeUrutkan(this.urutkan);
  }

  openDetail(item) {
    // this.detail = true;
    this.item = item
    console.log(item)
    this.b.entertainment = item
    this.imageChoosen = item.photoLink1
    this.router.navigate(['hiburan/detail'])
    console.log(this.detail)
    // this.initMap()
  }

  closeDetail() {
    this.detail = false;
    this.item = null

  }

  expensiveToCheap() {
    var temp;
    for (var i = 0; i < this.list.length; i++) {
      for (var j = this.list.length - 1; j > i; j--) {
        if (this.list[j]["price"] > this.list[j - 1]["price"]) {
          temp = this.list[j];
          this.list[j] = this.list[j - 1]
          this.list[j - 1] = temp
        }
      }
    }
  }

  cheapToExpensive() {
    var temp;
    for (var i = 0; i < this.list.length; i++) {
      for (var j = this.list.length - 1; j > i; j--) {
        if (this.list[j]["price"] < this.list[j - 1]["price"]) {
          temp = this.list[j];
          this.list[j] = this.list[j - 1]
          this.list[j - 1] = temp
        }
      }
    }
  }
}
