
import { Component, OnInit, Injectable } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { CarFilterService } from 'src/app/service/car-filter.service';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.sass']
})
export class CarFilterComponent implements OnInit {

  constructor(private data: CarFilterService) {
  }

  ngOnInit() {
  }

  value: number = 0
  value1: number = 2000000
  less5: boolean = false
  or6: boolean = false
  more6: boolean = false

  toyota: boolean = false
  daihatsu: boolean = false
  wuling: boolean = false
  suzuki: boolean = false
  nissan: boolean = false

  apv: boolean = false
  agya: boolean = false
  all_new_alphard: boolean = false
  all_new_avanza: boolean = false
  grand_livina: boolean = false


  // autoTicks = this.data.autoTicks;
  // disabled = this.data.disabled;
  // invert = this.data.invert;
  // max = this.data.max;
  // min = this.data.min;
  // showTicks = this.data.showTicks;
  // step = this.data.step;
  // thumbLabel = this.data.thumbLabel;
  // value = this.data.value;
  // value1 = this.data.value1;
  // vertical = this.data.vertical;
  // tickInterval = this.data.tickInterval;

  // date1 = this.data.date1;
  // date2 = this.data.date2;

  // activities = this.data.activities;
  // attractions = this.data.attractions;
  // events = this.data.events;

  // penawaran = this.data.penawaran;



  getSliderTickInterval(): number | 'auto' {
    return this.data.showTicks ? (this.data.autoTicks ? 'auto' : this.data.tickInterval) : 0;
  }

  changeSlider(event: any) {
    if (this.data.value1 < event.value) {
      this.data.value = this.data.value1
    } else {
      this.data.value = event.value
    }
  }

  changeSlider1(event: any) {
    if (this.data.value > event.value) {
      this.data.value1 = this.data.value
    } else {
      this.data.value1 = event.value
    }
  }

  myFilter1 = (d: Date): boolean => {
    let now = new Date();
    now.setDate(now.getDate() - 1);
    let now1 = new Date();
    now1.setFullYear(now.getFullYear() + 1);
    return d > now && d < now1;
  }

  myFilter2 = (d: Date): boolean => {
    let now = this.data.date1;
    let tres = now;
    tres.setDate(tres.getDate() + 16);

    console.log("Now: " + now)
    console.log("Tre: " + tres)
    return d > now && d < tres;

  }


  reset(): void {
    this.data.autoTicks = false;
    this.data.disabled = false;
    this.data.invert = false;
    this.data.max = 2000000;
    this.data.min = 0;
    this.data.showTicks = false;
    this.data.step = 50000;
    this.data.thumbLabel = false;
    this.data.value = 0;
    this.data.value1 = 2000000;
    this.data.vertical = false;
    this.data.tickInterval = 1;

    this.data.date1 = null;
    this.data.date2 = null;

    this.data.activities = false;
    this.data.attractions = false;
    this.data.events = false;

    this.data.penawaran = false;

    this.data.less5 = false
    this.data.or6 = false
    this.data.more6 = false
    this.data.toyota = false
    this.data.daihatsu = false
    this.data.wuling = false
    this.data.suzuki = false
    this.data.nisasan = false
    this.data.apv = false
    this.data.agya = false
    this.data.all_new_alphard = false

  }
}