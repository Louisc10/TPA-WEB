import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { City } from '../hotel/hotel.component';
import { Router } from '@angular/router';
import { BoughtService } from 'src/app/service/bought.service';

@Component({
  selector: 'widget-kereta-api',
  templateUrl: './kereta-api.component.html',
  styleUrls: ['./kereta-api.component.sass']
})
export class KeretaApiWidget implements OnInit {
  date1;
  date2;
  selectedTamu
  selectedRoom
  selectedCity1: string = "";
  selectedCity2: string = "";

  cities: City[] = [
    {name: 'Bandung', id: 1, longitude: '106.816635', latitude: '-6.595038'}
  ]
  


  constructor(private apollo: BackendServiceService,
    private route: Router, private bought: BoughtService) {
  }
  
  ngOnInit() {
    this.date1 = new Date();
    this.date2 = new Date();
    this.date2.setDate(this.date2.getDate() + 1) ;

    this.apollo.getAllCity().subscribe(
      async Query=>{
        this.cities = Query.data.getAllCity
        await console.table(this.cities)
      }
    )
  }

  myFilter1 = (d: Date): boolean => {
    let now = new Date();
    now.setDate(now.getDate()-1);
    let now1 = new Date();
    now1.setFullYear(now.getFullYear()+1) ;
    return d > now && d < now1;
  }

  myFilter2 = (d: Date): boolean => {
    let now = this.date1;
    now.setDate(now.getDate() + 1);
    let tres = this.date1
    tres.setDate(tres.getDate() + 16);
    return d > now && d < tres;
  }

  kik(){
    this.bought.date_1 = this.date1
    this.bought.quantity = this.selectedRoom + this.selectedTamu

    if(this.route.url != "/keretaapi")
    this.route.navigate(["/keretaapi"]);

  }
}
