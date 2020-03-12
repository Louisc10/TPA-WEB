import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarFilterService {

  constructor() { }


  autoTicks = false;
  disabled = false;
  invert = false;
  max = 2000000;
  min = 0;
  showTicks = false;
  step = 50000;
  thumbLabel = false;
  value = 0;
  value1 = 2000000;
  vertical = false;
  tickInterval = 1;

  date1: Date;
  date2: Date;

  activities = false;
  attractions = false;
  events = false;

  penawaran = false;

  less5 = false
  or6 = false
  more6 = false
  toyota = false
  daihatsu = false
  wuling = false
  suzuki = false
  nisasan = false
  apv = false
  agya = false
  all_new_alphard = false
  all_new_avanza = false

}
