import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'widget-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.sass']
})


export class HotelWidget implements OnInit {

  date1;
  date2;

  constructor() {
  }
  
  ngOnInit() {
    this.date1 = new Date();
    this.date2 = new Date();
    this.date2.setDate(this.date2.getDate + 1) ;
  }

  myFilter1 = (d: Date): boolean => {
    let now = new Date();
    now.setDate(now.getDate()-1);
    let now1 = new Date();
    now1.setFullYear(now.getFullYear()+1) ;
    return d > now && d < now1;
  }

  // myFilter2 = (d: Date): boolean => {
  //   let tres = this.date1
  //   tres.setDate(tres.getDate() + 15);
  //   return d < this.date1;
  // }

  kik(){
    let val = document.getElementById("date1");
    // val.text
    alert(this.date1)
  }
}
