import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { async } from '@angular/core/testing';
import { Query } from 'src/app/models/query';

export interface City {
  name: string;
  id: Number;
  longitude: string;
  latitude: string;
}

@Component({
  selector: 'widget-pesawat',
  templateUrl: './pesawat.component.html',
  styleUrls: ['./pesawat.component.sass']
})
export class PesawatWidget implements OnInit {

  date1;
  date2;
  selectedCity: string = "";

  cities: City[] = [
    {name: 'Bandung', id: 1, longitude: '106.816635', latitude: '-6.595038'}
  ]
  


  constructor(private apollo: BackendServiceService) {
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
    let val = document.getElementById("date1");
    // val.text
    alert(this.date1)
  }
}
