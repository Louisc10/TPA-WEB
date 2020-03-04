import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { BoughtService } from 'src/app/service/bought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.sass']
})
export class BestComponent implements OnInit {

  datas = []
  list = []
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

    var j, k, l = -1;
    for (; count < 3;) {
      let temp = Math.floor(Math.random() * this.datas.length)
      if (count == 0) {
        j = temp
        count++
      } else if (count == 1 && j != temp) {
        k = temp
        count++
      } else if (count == 2 && j != temp && k != temp) {
        l = temp
        count++
      }
    }
    this.list.push(this.datas[j])
    this.list.push(this.datas[k])
    this.list.push(this.datas[l])
  }

  openDetail(item) {
    this.b.entertainment = item
    this.router.navigate(['hiburan/detail'])
  }

}
