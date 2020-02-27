import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { Train } from 'src/app/models/train';
import { TrainFilterService } from 'src/app/service/train-filter.service';
import { BoughtService } from 'src/app/service/bought.service';

@Component({
  selector: 'app-kereta-api',
  templateUrl: './kereta-api.component.html',
  styleUrls: ['./kereta-api.component.sass']
})
export class KeretaApiComponent implements OnInit {
  private datas: Train[];
  private list: Train[];
  private item: Train;
  private detail: boolean = false;
  private click: boolean = false;
  private urutkan = "Harga Terendah"

  constructor(private apollo: BackendServiceService, private data: TrainFilterService, private bought: BoughtService) { }

  ngOnInit() {
    this.apollo.getAllTrain().subscribe(
      async Query => {
        this.datas = Query.data.getAllTrain
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
    console.table(this.array)
    console.log(this.array[0].name)
  }
  
  onScrollDown (ev) {
    console.log('scrolled down!!', ev);
    const start = this.sum;
    this.sum += 20;
    if(this.sum > this.list.length)
    this.sum = this.list.length
    this.array = [...[this.list[this.sum]]]
    // this.appendItems(start, this.sum);
  }


  doFilter() {
    this.list = this.datas
    if (this.data.bisnis || this.data.ekonomi || this.data.eksekutif) {
      var temp = []
      if (this.data.bisnis) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i]["kelas"] == "bisnis") {
            temp.push(this.list[i])
          }
        }
      }
      if (this.data.ekonomi) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i]["kelas"] == "ekonomi") {
            temp.push(this.list[i])
          }
        }
      }
      if (this.data.eksekutif) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i]["kelas"] == "eksekutif") {
            temp.push(this.list[i])
          }
        }
      }
      this.list = temp
    }

    if (this.data.timeP1 || this.data.timeP2 || this.data.timeP3 || this.data.timeP4) {
      var temp = []
      for (var i = 0; i < this.list.length; i++) {
        let date = new Date(this.list[i].timeGo)
        if (this.data.timeP1) {
          if (0 <= date.getHours() && date.getHours() < 6) {
            temp.push(this.list[i])
          }
        }
        if (this.data.timeP2) {
          if (6 <= date.getHours() && date.getHours() < 12) {
            temp.push(this.list[i])
          }
        }
        if (this.data.timeP3) {
          if (12 <= date.getHours() && date.getHours() < 18) {
            temp.push(this.list[i])
          }
        }
        if (this.data.timeP4) {
          if (18 <= date.getHours() && date.getHours() < 24) {
            temp.push(this.list[i])
          }
        }
      }

      this.list = temp
    }


    if (this.data.tayo || this.data.parayangan || this.data.serayu || this.data.thomas) {
      var temp = []
      if (this.data.tayo) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i]["tipe"] == "tayo") {
            temp.push(this.list[i])
          }
        }
      }
      if (this.data.parayangan) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i]["tipe"] == "parayangan") {
            temp.push(this.list[i])
          }
        }
      }
      if (this.data.serayu) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i]["tipe"] == "serayu") {
            temp.push(this.list[i])
          }
        }
      }
      if (this.data.thomas) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i]["tipe"] == "thomas") {
            temp.push(this.list[i])
          }
        }
      }
      this.list = temp
    }

    this.changeUrutkan(this.urutkan);
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
  }

  doClick() {
    this.click = true;
  }

  newlyVar() {
    this.list = this.datas;
    console.table(this.list)
    this.cheapToExpensive()
    this.data.parayanganPresent = false
    this.data.serayuPresent = false
    this.data.tayoPresent = false
    this.data.thomasPresent = false
    for (var j = 0; j < this.list.length; j++) {
      if (this.list[j]["tipe"] == "parayangan") {
        this.data.parayanganPresent = true
      }
      if (this.list[j]["tipe"] == "serayu") {
        this.data.serayuPresent = true
      }
      if (this.list[j]["tipe"] == "tayo") {
        this.data.tayoPresent = true
      }
      if (this.list[j]["tipe"] == "thomas") {
        this.data.thomasPresent = true
      }
    }
    this.appendItems(0, this.sum)
  }

  msg = [""]

  openTransit(item: Train){
    if(this.msg[item.id] == ""){
      this.msg[item.id] = "No Transit"
    }
    else{
      this.msg[item.id] = ""
    }
  }
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