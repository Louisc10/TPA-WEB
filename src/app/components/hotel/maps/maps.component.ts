import { Component, OnInit } from '@angular/core';
import { MapsService } from 'src/app/service/maps.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.sass']
})
export class MapsComponent implements OnInit {
  lat: string = '';
  lng: string = '';

  location: Object;

  constructor(private maps: MapsService) { }

  ngOnInit() {  
    this.maps.getLocation().subscribe(data => {
      this.lat =  data.latitude;
      this.lng = data.longitude;
      
    })
  }

}
