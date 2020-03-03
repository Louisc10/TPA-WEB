import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { MatDialogRef } from '@angular/material';
import { Pesawat } from 'src/app/models/pesawat';
import { Time } from '@angular/common';

@Component({
  selector: 'app-insert-flight-form',
  templateUrl: './insert-flight-form.component.html',
  styleUrls: ['./insert-flight-form.component.sass']
})
export class InsertFlightFormComponent implements OnInit {
  maskapai: string
  destination: string
  source: string
  price: number
  transit: string
  departTime : Date
  arriveTime : Date
  departTime1 : Time
  arriveTime1 : Time

  datas

  constructor(private apollo: BackendServiceService,
    public dialogRef: MatDialogRef<InsertFlightFormComponent>) { }

  ngOnInit() {
  }

  openDialog() {
    if (this.maskapai == "") {
      alert("Company is Empty")
    }
    else if (this.source == "") {
      alert("Source is Empty")
    }
    else if (this.destination == "") {
      alert("Destination is Empty")
    }
    else if (this.transit == "") {
      alert("Transit is Empty")
    }
    else if (this.price == 0) {
      alert("Price is Empty")
    }
    else if (this.departTime == null) {
      alert("Time Deature is Empty")
    }
    else if (this.arriveTime == null) {
      alert("Time Arrive is Empty")
    }
    else {
      let train = new Pesawat()
      train.maskapai = this.maskapai
      train.dst = this.destination
      train.src = this.source
      train.price = this.price
      train.code = this.makeid(5)
      train.transit = this.transit

      var up = (<HTMLInputElement>document.getElementById("go1")).value;
      var hour = up.split(":")[0];
      var minute = up.split(":")[1];
      this.departTime.setHours(parseInt(hour));
      this.departTime .setMinutes(parseInt(minute));

      train.timeGo = this.departTime.toString()

      var up = (<HTMLInputElement>document.getElementById("arrive1")).value;
      var hour = up.split(":")[0];
      var minute = up.split(":")[1];
      this.arriveTime.setHours(parseInt(hour));
      this.arriveTime.setMinutes(parseInt(minute))
      
      train.timeArrive = this.arriveTime.toString()







      this.apollo.createPesawat(train).subscribe(
        async Query => {
          this.datas = Query.createPesawat
          await this.c()
        }
      );
    }
  }
  c() {
    alert("[!] New Pesawat!")
    location.reload()
  }
  makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

}
