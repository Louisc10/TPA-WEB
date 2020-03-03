import { Component, OnInit, Inject } from '@angular/core';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PesawatTable } from '../flight-table.component';
import { Pesawat } from 'src/app/models/pesawat';

@Component({
  selector: 'app-update-flight-form',
  templateUrl: './update-flight-form.component.html',
  styleUrls: ['./update-flight-form.component.sass']
})
export class UpdateFlightFormComponent implements OnInit {

  datas
  
  constructor(private apollo: BackendServiceService,
    public dialogRef: MatDialogRef<UpdateFlightFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PesawatTable) { }
    

  ngOnInit() {
  }

  openDialog() {
    if (this.data.maskapai == "") {
      alert("Company is Empty")
    }
    else if (this.data.source == "") {
      alert("Source is Empty")
    }
    else if (this.data.destination == "") {
      alert("Destination is Empty")
    }
    else if (this.data.transit == "") {
      alert("Transit is Empty")
    }
    else if (this.data.price == 0) {
      alert("Price is Empty")
    }
    else if (this.data.departTime == null) {
      alert("Time Deature is Empty")
    }
    else if (this.data.arriveTime == null) {
      alert("Time Arrive is Empty")
    }
    else {
      let train = new Pesawat()
      train.id = this.data.id
      train.maskapai = this.data.maskapai
      train.dst = this.data.destination
      train.src = this.data.source
      train.price = this.data.price
      train.code = this.data.code
      train.transit = this.data.transit
      train.timeGo = this.data.departTime.toString()
      train.timeArrive = this.data.arriveTime.toString()


      this.apollo.updatePesawat(train).subscribe(
        async Query => {
          this.datas = Query.data.updatePesawat
          await this.c()
        }
      );
    }
  }
  c() {
    this.dialogRef.close()
    location.reload(true)
  }

  closeDialog() {
    this.dialogRef.close()
  }
}
