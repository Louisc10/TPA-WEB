import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightFilterService {

  constructor() { }

  transit0: boolean
  transit1: boolean
  transit2: boolean
  
  durasiTransitMin: number =  0
  durasiTransitMax: number = 10

  berangkatTime1: boolean
  berangkatTime2: boolean
  berangkatTime3: boolean
  berangkatTime4: boolean

  tibaTime1: boolean
  tibaTime2: boolean
  tibaTime3: boolean
  tibaTime4: boolean

  garuda: boolean
  sriwijaya: boolean

  bagasi: boolean
  hiburan: boolean
  makanan: boolean

  jakarta: boolean

  durasiFlightMin: number =  0
  durasiFlightMax: number = 20

  cityFrom: string
  cityGo: string
  passenger: number
  dateGo: Date
  
}
