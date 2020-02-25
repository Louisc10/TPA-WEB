import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { async } from '@angular/core/testing';
import { Query } from 'src/app/models/query';
import { Router } from '@angular/router';

export interface City {
  name: string;
  id: Number;
  longitude: string;
  latitude: string;
}

@Component({
  selector: 'widget-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.sass']
})

export class HotelWidget implements OnInit {

  date1;
  date2;
  selectedCity: string = "";

  cities: City[] = [
    {name: 'Bandung', id: 1, longitude: '106.816635', latitude: '-6.595038'}
  ]
  


  constructor(private apollo: BackendServiceService,
    private route: Router) {
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
    console.log("<<>> : " + this.date1)
    let tres = this.addDate(this.date1, 16)
    return d > now && d < tres;
  }

  private addDate(d : Date,day: any): Date{
    let date =  new Date(d.getTime() + (1000 * 60 * 60 * 24 * day))
    console.log("PP : " + date)
    return date
  }

  kik(){
    if(this.route.url != "/hotel")
    this.route.navigate(["/hote;"]);

  }
}
