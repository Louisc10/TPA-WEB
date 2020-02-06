import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MapsService } from 'src/app/service/maps.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.sass']
})
export class MapsComponent implements OnInit {
  @ViewChild('mapRef', { static: true }) mapElement: ElementRef;
  ipAddress: any;
  latitude: any = -6.201987;
  longitude: any = 106.781616;
  
  constructor(private http: HttpClient) {
    this.http.get('https://jsonip.com').subscribe((ipOfNetwork) =>
      this.ipAddress = ipOfNetwork['ip']
    );
  };

  ngOnInit() {
    this.renderMap();
  }

  loadMap = () => {
    var map = new window['google'].maps.Map(this.mapElement.nativeElement, {
      center: { lat: this.latitude, lng: this.longitude },
      zoom: 8
    });

    var marker = new window['google'].maps.Marker({
      position: { lat: this.latitude, lng: this.longitude },
      map: map,
      title: 'Location!',
      draggable: false,
      animation: window['google'].maps.Animation.DROP,
    });

    var contentString = '<div id="content">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h3 id="thirdHeading" class="thirdHeading">W3path.com</h3>' +
      '<div id="bodyContent">' +
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>' +
      '</div>' +
      '</div>';

    var infowindow = new window['google'].maps.InfoWindow({
      content: contentString
    });

    marker.addListener('click', function () {
      infowindow.open(map, marker);
    });

  }
  renderMap() {

    window['initMap'] = () => {
      this.loadMap();
    }
    if (!window.document.getElementById('google-map-script')) {
      var s = window.document.createElement("script");
      s.id = "google-map-script";
      s.type = "text/javascript";
      s.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA78FwfXaY_ZtA0yGJTSlzD3mUtSA13u9U&callback=initMap";

      window.document.body.appendChild(s);
    } else {
      this.loadMap();
    }
  }
}
