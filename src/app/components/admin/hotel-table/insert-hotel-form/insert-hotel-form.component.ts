import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { Hotel } from 'src/app/models/hotel';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-insert-hotel-form',
  templateUrl: './insert-hotel-form.component.html',
  styleUrls: ['./insert-hotel-form.component.sass']
})
export class InsertHotelFormComponent implements OnInit {

  account;
  name = ""
  photolink = ""
  rating = 0
  price = 0
  review = ""
  location = ""
  latitude = ""
  longitude = ""
  address = ""
  information = ""
  tipe = ""
  jaringan = ""
  Resepsionis = false
  AC = false
  Lift = false
  TempatParkir = false
  Restoran = false
  Spa = false
  KolanRenang = false
  Wifi = false
  FreeLunch = false

  facilities = new FormControl();

  constructor(private route: Router,
    private apolo: BackendServiceService) { }

  ngOnInit() {
  }

  back() {
    this.route.navigate(['admin'])
  }

  openDialog() {
    if (this.name == "") {
      alert("Input Name")
    }
    else if (this.photolink == "") {
      alert("Input photolink")
    }
    else if (this.price == 0) {
      alert("price can t be 0")
    }
    else if (this.rating < 0 || this.rating > 5) {
      alert("rating 0 - 5")
    }
    else if (this.review == "") {
      alert("Input review")
    }
    else if (this.location == "") {
      alert("Input location")
    }
    else if (this.latitude == "") {
      alert("Input latitude")
    }
    else if (this.longitude == "") {
      alert("Input longitude")
    }
    else if (this.address == "") {
      alert("Input description")
    }
    else if (this.information == "") {
      alert("Input Information")
    }
    else if (this.tipe == "") {
      alert("Choose Tipe")
    }
    else if (this.jaringan == "") {
      alert("Choose Jaringan")
    }
    else {
      var train: Hotel = new Hotel()
      train.name = this.name
      train.image = this.photolink
      train.rating = this.rating
      train.price = this.price
      train.review = this.review
      train.location = this.location
      train.latitude = this.latitude
      train.longitude = this.longitude
      train.address = this.address
      train.information = this.information
      train.tipe = this.tipe
      train.jaringanHotel = this.jaringan
      train.resepsionis = this.Resepsionis ? "Yes" : "No"
      train.ac = this.AC ? "Yes" : "No"
      train.lift = this.Lift ? "Yes" : "No"
      train.tempatParkir = this.TempatParkir ? "Yes" : "No"
      train.restorant = this.Restoran ? "Yes" : "No"
      train.spa = this.Spa ? "Yes" : "No"
      train.kolamRenang = this.KolanRenang ? "Yes" : "No"
      train.wifi = this.Wifi ? "Yes" : "No"
      train.freeLunch = this.FreeLunch ? "Yes" : "No"
      train

      console.table(train)
      this.apolo.createHotel(train).subscribe(
        async Query => {
          this.account = Query.data.createHotel
          await this.c()
        }
      );
    }
  }

  c() {
    alert("[!] New Hotel!")
    location.reload()

  }
}