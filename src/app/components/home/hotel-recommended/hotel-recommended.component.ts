import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/service/backend-service.service';

@Component({
  selector: 'app-hotel-recommended',
  templateUrl: './hotel-recommended.component.html',
  styleUrls: ['./hotel-recommended.component.sass']
})
export class HotelRecommendedComponent implements OnInit {

  datas = []
  list = []
  finish: boolean = false
  x: number[]
  constructor(
    private apollo: BackendServiceService,
    // private b: BoughtService,
    // private router: Router
    ) { }

  ngOnInit() {
    this.x = [1,2,3,4,5,6]
    this.apollo.getAllHotel().subscribe(
      async Query => {
        this.datas = Query.data.getAllHotel
        await console.table(this.datas);
        await this.newlyVar();
      }
    );
  }

  newlyVar() {
    var count = 0;

    var j, k, l, m, n, o, p, q = -1;
    for (; count < 8;) {
      let temp = Math.floor(Math.random() * this.datas.length)
      // if (count == 0) {
      //   j = temp
      //   count++
      // } else if (count == 1 && j != temp) {
      //   k = temp
      //   count++
      // } else if (count == 2 && j != temp && k != temp) {
      //   l = temp
      //   count++
      // } else if (count == 1 && j != temp && k != temp && l != temp) {
      //   m = temp
      //   count++
      // } else if (count == 2 && j != temp && k != temp && l != temp && m != temp) {
      //   n = temp
      //   count++
      // } else if (count == 1 && j != temp && k != temp && l != temp && m != temp && n != temp) {
      //   o = temp
      //   count++
      // } else if (count == 2 && j != temp && k != temp  && l != temp && m != temp && n != temp && o != temp) {
      //   p = temp
      //   count++
      // } else if (count == 1 && j != temp && k != temp  && l != temp && m != temp && n != temp && o != temp && p != temp) {
      //   q = temp
      //   count++
      // }
      console.log(this.datas[temp].rating)
      this.list.push(this.datas[temp])
      count++
    }
    // this.list.push(this.datas[j])
    // this.list.push(this.datas[k])
    // this.list.push(this.datas[l])
    // this.list.push(this.datas[m])
    // this.list.push(this.datas[n])
    // this.list.push(this.datas[o])
    // this.list.push(this.datas[p])
    // this.list.push(this.datas[q])

    this.finish = true
  }

}
