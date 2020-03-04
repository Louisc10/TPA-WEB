import { Component, OnInit, HostListener } from '@angular/core';
import { ChattingService } from 'src/app/service/chatting.service';
import { Pesawat } from 'src/app/models/pesawat';
import { Router } from '@angular/router';
import { BoughtService } from 'src/app/service/bought.service';
import { FlightFilterService } from 'src/app/services/flight-filter.service';
import { BackendServiceService } from 'src/app/service/backend-service.service';

@Component({
  selector: 'app-pesawat',
  templateUrl: './pesawat.component.html',
  styleUrls: ['./pesawat.component.sass']
})
export class PesawatComponent implements OnInit {

  datas: Pesawat[]
  urutkan: string = "Harga Terendah"
  list: Pesawat[] = []
  click: boolean = false
  detail: boolean = false
  item

  constructor(
    private apollo: BackendServiceService,
    private data: FlightFilterService,
    private bought: BoughtService,
    private route: Router,
    private note: ChattingService) {
    this.note.listen('plane').subscribe(M => alert(M))
  }

  ngOnInit() {
    this.apollo.getAllPesawat().subscribe(
      async Query => {
        this.datas = Query.data.getAllPesawat
        await this.newlyVar();
      }
    );
  }

  array = [];
  sum = 5;
  scrollDistance = 0.1;

  @HostListener("window:scroll", [])
  onScrollDown(ev): void {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      let start = this.sum;
      this.sum += 5;
      if (this.sum > this.list.length)
        this.sum = this.list.length

      this.appendItems(start, this.sum);
    }
  }

  appendItems(startIndex, endIndex) {
    for (let i = startIndex; i < this.sum; ++i) {
      this.array = [...this.array, ...[this.list[i]]];
    }
  }

  getName(item){
    if(item == "Garuda"){
      return "garuda.jpg"
    }else if(item == "Sriwijaya"){
      return "sriwijaya.jpg"
    }else {
      return "favicon.ico"
    }
  }


  changeUrutkan(x) {
    this.urutkan = x
    if (x == "Harga Terendah") {
      this.cheapToExpensive()
    }
    else if (x == "Durasi Tercepat") {
      this.duration()
    }
    else if (x == "Keberangkatan Paling Awal") {
      this.timeCount("timeGo", 1)
    }
    else if (x == "Keberangkatan Paling Akhir") {
      this.timeCount("timeGo", 2)
    }
    else if (x == "Kedatangan Paling Awal") {
      this.timeCount("timeArrive", 1)
    }
    else if (x == "Kedatangan Paling Akhir") {
      this.timeCount("timeArrive", 2)
    }

    this.array = []
    this.sum = 5
    this.appendItems(0, this.sum)
  }

  doClick() {
    this.click = true;
  }

  newlyVar() {
    this.list = this.datas;
    console.table(this.list)
    this.doFilter()
  }

  doFilter() {
    this.list = this.datas

    this.list[i]
    if (this.data.transit0 || this.data.transit1 || this.data.transit2) {
      var temp = []
      var re = /Transit/gi
      var no = /No/gi
      var re1 = /,/gi
      if (this.data.transit0) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i]["transit"].search(no) == -1) {
            temp.push(this.list[i])
          }
        }
      }
      if (this.data.transit1) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i]["transit"].search(no) == -1 && this.list[i]["transit"].search(re) != -1 && this.list[i]["transit"].search(re1) == -1) {
            temp.push(this.list[i])
          }
        }
      }
      if (this.data.transit2) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i]["transit"].search(no) == -1 &&  this.list[i]["transit"].search(re) != -1 && this.list[i]["transit"].search(re1) != -1) {
            temp.push(this.list[i])
          }
        }
      }
      this.list = temp
    }

    if (this.data.berangkatTime1 || this.data.berangkatTime2 || this.data.berangkatTime3 || this.data.berangkatTime4) {
      var temp = []
      for (var i = 0; i < this.list.length; i++) {
        let date = new Date(this.list[i].timeGo)
        if (this.data.berangkatTime1) {
          if (0 <= date.getHours() && date.getHours() < 6) {
            temp.push(this.list[i])
          }
        }
        if (this.data.berangkatTime2) {
          if (6 <= date.getHours() && date.getHours() < 12) {
            temp.push(this.list[i])
          }
        }
        if (this.data.berangkatTime3) {
          if (12 <= date.getHours() && date.getHours() < 18) {
            temp.push(this.list[i])
          }
        }
        if (this.data.berangkatTime4) {
          if (18 <= date.getHours() && date.getHours() < 24) {
            temp.push(this.list[i])
          }
        }
      }

      this.list = temp
    }

    if (this.data.tibaTime1 || this.data.tibaTime2 || this.data.tibaTime3 || this.data.tibaTime4) {
      var temp = []
      for (var i = 0; i < this.list.length; i++) {
        let date = new Date(this.list[i].timeArrive)
        if (this.data.tibaTime1) {
          if (0 <= date.getHours() && date.getHours() < 6) {
            temp.push(this.list[i])
          }
        }
        if (this.data.tibaTime2) {
          if (6 <= date.getHours() && date.getHours() < 12) {
            temp.push(this.list[i])
          }
        }
        if (this.data.tibaTime3) {
          if (12 <= date.getHours() && date.getHours() < 18) {
            temp.push(this.list[i])
          }
        }
        if (this.data.tibaTime4) {
          if (18 <= date.getHours() && date.getHours() < 24) {
            temp.push(this.list[i])
          }
        }
      }

      this.list = temp
    }


    if (this.data.garuda || this.data.sriwijaya) {
      var temp = []
      if (this.data.sriwijaya) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i].maskapai == "Sriwijaya") {
            temp.push(this.list[i])
          }
        }
      }
      if (this.data.garuda) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i].maskapai == "Garuda") {
            temp.push(this.list[i])
          }
        }
      }
      this.list = temp
    }


    if (this.data.transit0 && !this.data.transit1 && !this.data.transit2) {
      var re = /jakarta/gi
      var temp = []
      if (this.data.jakarta) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i]["transit"].search(re) != -1) {
            temp.push(this.list[i])
          }
        }
      }
      this.list = temp
    }


    var temp = []
    for (var i = 0; i < this.list.length; i++) {
      let dur = this.getDate(this.list[i])
      if (this.data.durasiFlightMin <= dur && dur <= this.data.durasiFlightMax) {
        temp.push(this.list[i])
      }
    }
    this.list = temp

    this.changeUrutkan(this.urutkan);
  }

  getDate(e: Pesawat) {
    var d = new Date(e.timeGo);

    var d2 = new Date(e.timeArrive);

    var dif = d2.getTime() - d.getTime();

    var time = dif / (1000);

    var hour = time / (60 * 60)

    return Math.floor(hour)
  }

  msg = [""]

  openTransit(item: Pesawat) {
    if (this.msg[item.id] == "") {
      this.msg[item.id] = item.transit
    }
    else {
      this.msg[item.id] = ""
    }
  }
  openDetail(item) {
    this.detail = true;
    this.item = item
    console.log(item)
    this.bought.train = item
    this.route.navigate(['payment'])
  }

  closeDetail() {
    this.detail = false;
    this.item = null

  }

  openPrice(item){
    if (this.msg[item.id] == "") {
      this.msg[item.id] = "Price: " + (item.price * 90 / 100) + "<br>Tax: "  + (item.price * 10 / 100) + "<br>Total: "  + item.price  
    }
    else {
      this.msg[item.id] = ""
    }
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
