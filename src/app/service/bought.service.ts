import { Injectable } from '@angular/core';
import { Entertainment } from '../models/entertainment';
import { Train } from '../models/train';

@Injectable({
  providedIn: 'root'
})
export class BoughtService {

  constructor() { }
  entertainment: Entertainment
  train: Train
  quantity: number
  date_1: Date
  date_2: Date

}
