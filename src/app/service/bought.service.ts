import { Injectable } from '@angular/core';
import { Entertainment } from '../models/entertainment';
import { Train } from '../models/train';

@Injectable({
  providedIn: 'root'
})
export class BoughtService {

  constructor() { }
  entertainment: Entertainment = null
  train: Train = null
  quantity: number = null
  date_1: Date = null
  date_2: Date = null

}
