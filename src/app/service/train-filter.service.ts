import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainFilterService {

  constructor() { }
  ekonomi: boolean
  bisnis: boolean
  eksekutif: boolean
  timeP1: boolean
  timeP2: boolean
  timeP3: boolean
  timeP4: boolean
  serayu: boolean
  thomas: boolean
  tayo: boolean
  parayangan: boolean
  serayuPresent: boolean
  thomasPresent: boolean
  tayoPresent: boolean
  parayanganPresent: boolean

}
