import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class UserCacheService {

  constructor() { }
  user: Admin
	currency: string ="IDR"
	language: string = "ID"
  
}
