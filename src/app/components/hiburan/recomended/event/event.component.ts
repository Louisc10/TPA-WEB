import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { Router } from '@angular/router';
import { BoughtService } from 'src/app/service/bought.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.sass']
})
export class EventComponent implements OnInit {

  datas
  list =[]
  constructor(
    private apollo: BackendServiceService,
    private b: BoughtService,
    private router: Router) { }

  ngOnInit() {
    this.apollo.getAllEntertainment().subscribe(
      async Query => {
        this.datas = Query.data.getAllEntertainment
        await this.newlyVar();
      }
    );
  }

  newlyVar() {
    var count = 0;
    console.log("XSXSXS")
    console.table(this.datas)
    console.log("XSXSXS")
    for (var i = 0; i < this.datas.length && count < 3; i++) {
      console.log(this.datas[i]["category"])
      if (this.datas[i]["category"] == "events") {
        this.list.push(this.datas[i])
        count++
      }
    }
  }

  openDetail(item) {
    this.b.entertainment = item
    this.router.navigate(['hiburan/detail'])
  }

}
