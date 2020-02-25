import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { log } from 'util';

const iconRetinaUrl = 'assets/img/marker_2x.png';
const iconUrl = 'assets/img/marker.png';
const shadowUrl = 'assets/img/markers_shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-maps-leaflet',
  templateUrl: './maps-leaflet.component.html',
  styleUrls: ['./maps-leaflet.component.sass']
})
export class MapsLeafletComponent implements OnInit {
  map: any;
  latitude: any = -6.201987;
  longitude: any = 106.781616;
  userPosition

  constructor() {
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((suc) => {
      this.userPosition = suc
      this.map = L.map('map').setView([this.userPosition.coords.latitude, this.userPosition.coords.longitude], 13);


      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
  
      L.marker([this.userPosition.coords.latitude, this.userPosition.coords.longitude]).addTo(this.map).openPopup();
    })


  }

}
