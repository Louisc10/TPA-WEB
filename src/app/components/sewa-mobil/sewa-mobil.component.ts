import { Component, OnInit, HostListener } from '@angular/core';
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
    this.apollo.getAllCar().subscribe(
      async Query => {
        this.datas = Query.data.getAllCar
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



  changeUrutkan(x) {
    this.urutkan = x
    if (x == "Harga Terendah") {
      this.cheapToExpensive()
    }
    else if (x == "Harga Tertinggi") {
      this.expensiveToCheap()
    }
    else {
    }

    this.array = []
    this.sum = 5
    this.appendItems(0, this.sum)
  }

  doClick() {
    this.click = true;
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

  newlyVar() {
    this.list = this.datas;
    console.table(this.list)
    this.doFilter()
  }

  doFilter() {
    this.list = this.datas

    this.list[i]
    if (this.data.less5 || this.data.or6 || this.data.more6) {
      var temp = []
      if (this.data.less5) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i].capacity < 5) {
            temp.push(this.list[i])
          }
        }
      }
      if (this.data.or6) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i].capacity == 5 || this.list[i].capacity == 6) {
            temp.push(this.list[i])
          }
        }
      }
      if (this.data.more6) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i].capacity > 6) {
            temp.push(this.list[i])
          }
        }
      }
      this.list = temp
    }

    if (this.data.toyota || this.data.daihatsu || this.data.wuling || this.data.suzuki || this.data.nisasan) {
      var re1 = /toyota/gi
      var re2 = /daihatsu/gi
      var re3 = /wuling/gi
      var re4 = /suzuki/gi
      var re5 = /nisan/gi
      var temp = []
      for (var i = 0; i < this.list.length; i++) {
        if (this.data.toyota) {
          if (this.list[i].name.search(re1) != -1) {
            temp.push(this.list[i])
          }
        }
        if (this.data.daihatsu) {
          if (this.list[i].name.search(re2) != -1) {
            temp.push(this.list[i])
          }
        }
        if (this.data.wuling) {
          if (this.list[i].name.search(re3) != -1) {
            temp.push(this.list[i])
          }
        }
        if (this.data.suzuki) {
          if (this.list[i].name.search(re4) != -1) {
            temp.push(this.list[i])
          }
        }
        if (this.data.nisasan) {
          if (this.list[i].name.search(re5) != -1) {
            temp.push(this.list[i])
          }
        }
      }

      this.list = temp
    }

    if (this.data.apv || this.data.agya || this.data.all_new_alphard || this.data.all_new_avanza) {
      var re1 = /apv/gi
      var re2 = /agya/gi
      var re3 = /all new alphard/gi
      var re4 = /all new avanza/gi
      var temp = []
      for (var i = 0; i < this.list.length; i++) {
        if (this.data.apv) {
          if (this.list[i].name.search(re1) != -1) {
            temp.push(this.list[i])
          }
        }
        if (this.data.agya) {
          if (this.list[i].name.search(re2) != -1) {
            temp.push(this.list[i])
          }
        }
        if (this.data.all_new_alphard) {
          if (this.list[i].name.search(re3) != -1) {
            temp.push(this.list[i])
          }
        }
        if (this.data.all_new_avanza) {
          if (this.list[i].name.search(re4) != -1) {
            temp.push(this.list[i])
          }
        }
      }

      this.list = temp
    }
    this.changeUrutkan(this.urutkan);
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
  openTransit(item: Car) {
    if (this.msg[item.id] == "") {
      this.msg[item.id] = "Capacity: " + item.capacity + ", Bagasi: " + item.bagasi
    }
    else {
      this.msg[item.id] = ""
    }

  }
}
