import { Component, OnInit } from '@angular/core';
import { FlightFilterService } from 'src/app/services/flight-filter.service';

@Component({
  selector: 'app-flight-filter',
  templateUrl: './flight-filter.component.html',
  styleUrls: ['./flight-filter.component.sass']
})
export class FlightFilterComponent implements OnInit {

  constructor(private data: FlightFilterService) { }

  ngOnInit() {
  }
  
  // transit0: boolean
  // transit1: boolean
  // transit2: boolean
  // durasiTransitMin: boolean
  // durasiTransitMax: boolean
  // berangkatTime1: boolean
  // berangkatTime2: boolean
  // berangkatTime3: boolean
  // berangkatTime4: boolean
  // tibaTime1: boolean
  // tibaTime2: boolean
  // tibaTime3: boolean
  // tibaTime4: boolean
  // garuda: boolean
  // sriwijaya: boolean
  changeSlider(event: any) {
    if (this.data.durasiTransitMax < event.value) {
      this.data.durasiTransitMin = this.data.durasiTransitMax
    } else {
      this.data.durasiTransitMin = event.value
    }
  }

  changeSlider1(event: any) {
    if (this.data.durasiTransitMin > event.value) {
      this.data.durasiTransitMax = this.data.durasiTransitMin
    } else {
      this.data.durasiTransitMax = event.value
    }
  }
  changeSlider3(event: any) {
    if (this.data.durasiFlightMax < event.value) {
      this.data.durasiFlightMin = this.data.durasiFlightMax
    } else {
      this.data.durasiFlightMin = event.value
    }
  }

  changeSlider4(event: any) {
    if (this.data.durasiFlightMin > event.value) {
      this.data.durasiFlightMax = this.data.durasiFlightMin
    } else {
      this.data.durasiFlightMax = event.value
    }
  }

  reset(){
    this.data.transit0 = false
    this.data.transit1 = false
    this.data.transit2 = false
    this.data.durasiTransitMin = 0
    this.data.durasiTransitMax = 10
    this.data.berangkatTime1 = false
    this.data.berangkatTime2 = false
    this.data.berangkatTime3 = false
    this.data.berangkatTime4 = false
    this.data.tibaTime1 = false
    this.data.tibaTime2 = false
    this.data.tibaTime3 = false
    this.data.tibaTime4 = false
    this.data.garuda = false
    this.data.sriwijaya = false

    this.data.bagasi = false
    this.data.hiburan = false
    this.data.makanan = false

    this.data.jakarta = false

    this.data.durasiFlightMin = 0
    this.data.durasiFlightMax = 20
    
  }


}
