import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntertainmentFilterServiceService {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100000000;
  min = 0;
  showTicks = false;
  step = 100000;
  thumbLabel = false;
  value = 0;
  value1 = 100000000;
  vertical = false;
  tickInterval = 1;

  date1: Date;
  date2: Date;

  activities = false;
  attractions = false;
  events = false;

  penawaran = false;
}
