import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.sass']
})
export class HotelItemComponent implements OnInit {

  private imageChoosen: String
  private map: any;
  private latitude: any = -6.201987;
  private longitude: any = 106.781616;
  private item: Hotel

  private qty = 0
  private date = null

  rawData: Hotel[]
  array: Hotel[] = []
  hotel: Hotel
  id

  constructor(private act: ActivatedRoute, private route: Router, private apollo: BackendServiceService) { 
  }

  ngOnInit() {
    this.id = this.act.snapshot.paramMap.get('id')
    this.apollo.getHotel(this.id).subscribe(
      async Query => {
        this.rawData = Query.data.getHotel
        await console.log("Test")
      }
    )
  }

  closeDetail(){
    this.route.navigate(['hotel'])
  }
  
  initMap() {
    this.map = L.map('map').setView([this.item.latitude, this.item.longitude], 13);


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([this.item.latitude, this.item.longitude]).addTo(this.map).openPopup();
  }


}
