import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { CarFilterService } from 'src/app/service/car-filter.service';
import { BoughtService } from 'src/app/service/bought.service';

@Component({
  selector: 'app-sewa-mobil',
  templateUrl: './sewa-mobil.component.html',
  styleUrls: ['./sewa-mobil.component.sass']
})
export class SewaMobilComponent implements OnInit {
  private datas: Car[];
  private list: Car[];
  private item: Car;
  private detail: boolean = false;
  private click: boolean = false;
  private urutkan = "Harga Terendah"

  constructor(
    private apollo: BackendServiceService,
    private data: CarFilterService,
    private bought: BoughtService) { }
  


  ngOnInit() {
    this.apollo.getAllTrain().subscribe(
      async Query => {
        this.datas = Query.data.getAllTrain
        await this.newlyVar();
      }
    );

  }

  doClick() {
    this.click = true;
  }

  newlyVar() {
    this.list = this.datas;
    console.table(this.list)
    
  }

  msg = [""]
  openDetail(item) {
    this.detail = true;
    this.item = item
    console.log(item)
    this.bought.train = item
    
  }

  closeDetail() {
    this.detail = false;
    this.item = null

  }

  test(item) {
    var date = new Date(item)
    return ((date.getHours() < 10 ? "0" : "") + date.getHours() + ":" + (date.getMinutes() < 10 ? "0" : "") + date.getMinutes())
  }

  dif(item) {
    var date = new Date(item.timeGo)
    var date1 = new Date(item.timeArrive)

    var day = date1.getDay() - date.getDay()
    var hour = date1.getHours() - date.getHours()
    var min = date1.getMinutes() - date.getMinutes()

    if (min < 0) {
      hour--
      min += 60
    }
    if (hour < 0) {
      hour += 24
      day--
    }
    return (hour > 0 ? hour + "j " : "") + (min > 0 ? (hour > 0 ? " + " : "") + min + "m" : "") + (day > 0 ? (hour > 0 || min > 0 ? " + " : "") + day + "D" : "")
  }
  gDuration(item) {
    var date = new Date(item.timeGo)
    var date1 = new Date(item.timeArrive)

    var day = date1.getDay() - date.getDay()
    var hour = date1.getHours() - date.getHours()
    var min = date1.getMinutes() - date.getMinutes()
    return (hour * 60) + min + (day * 24 * 60)
  }

  gT(item) {
    var date = new Date(item)
    return (date.getHours() * 60) + date.getMinutes() + (date.getDay() * 24 * 60)
  }

  gDate(item) {
    var date = new Date(item)
    return (date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear())
  }
  timeCount(text, con) {
    var temp;
    if (con == 1) {
      for (var i = 0; i < this.list.length; i++) {
        for (var j = this.list.length - 1; j > i; j--) {
          if (this.gT(this.list[j][text]) < this.gT(this.list[j - 1][text])) {
            temp = this.list[j];
            this.list[j] = this.list[j - 1]
            this.list[j - 1] = temp
          }
        }
      }

    }
    else {
      for (var i = 0; i < this.list.length; i++) {
        for (var j = this.list.length - 1; j > i; j--) {
          if (this.gT(this.list[j][text]) > this.gT(this.list[j - 1][text])) {
            temp = this.list[j];
            this.list[j] = this.list[j - 1]
            this.list[j - 1] = temp
          }
        }
      }
    }
  }
  duration() {
    var temp;
    for (var i = 0; i < this.list.length; i++) {
      for (var j = this.list.length - 1; j > i; j--) {
        if (this.gDuration(this.list[j]) < this.gDuration(this.list[j - 1])) {
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
