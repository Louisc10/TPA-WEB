import { Component, OnInit, Inject } from '@angular/core';
import { Time } from '@angular/common';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { Train } from 'src/app/models/train';
import { Mutation } from 'apollo-angular';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatInputModule } from '@angular/material';
import { TrainTable } from '../train-table.component';
@Component({
  selector: 'app-update-train-form',
  templateUrl: './update-train-form.component.html',
  styleUrls: ['./update-train-form.component.sass']
})
export class UpdateTrainFormComponent implements OnInit {
  name: string = ""
  src: string = ""
  dst: string = ""
  price: number = 0
  kelas: string = ""
  go: Time = null
  arrive: Time = null

  datas

  constructor(private apollo: BackendServiceService,
    public dialogRef: MatDialogRef<UpdateTrainFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TrainTable) { }

  ngOnInit() {
  }

  openDialog() {
    if (this.data.name == "") {
      alert("Name is Empty")
    }
    else if (this.data.source == "") {
      alert("Source is Empty")
    }
    else if (this.data.destination == "") {
      alert("Destination is Empty")
    }
    else if (this.data.price == 0) {
      alert("Price is Empty")
    }
    else if (this.data.class == "") {
      alert("Kelas is Empty")
    }
    else if (this.data.departTime == null) {
      alert("Time Deature is Empty")
    }
    else if (this.data.arriveTime == null) {
      alert("Time Arrive is Empty")
    }
    else {
      let train = new Train()
      train.dst = this.data.destination
      train.src = this.data.source
      train.kelas = this.data.class
      train.name = this.data.name
      train.price = this.data.price
      train.tipe = this.data.name
      train.id = this.data.id

      var up = (<HTMLInputElement>document.getElementById("go")).value;
      var hour = up.split(":")[0];
      var minute = up.split(":")[1];
      var date = new Date();
      date.setHours(parseInt(hour));
      date.setMinutes(parseInt(minute));

      train.timeGo = date.toString()

      var up = (<HTMLInputElement>document.getElementById("arrive")).value;
      var hour = up.split(":")[0];
      var minute = up.split(":")[1];
      var date = new Date();
      date.setHours(parseInt(hour));
      date.setMinutes(parseInt(minute))

      train.timeArrive = date.toString()







      this.apollo.updateTrain(train).subscribe(
        async Query => {
          this.datas = Query.data.updateTrain
          await this.c()
        }
      );
    }
  }
  c() {
    this.dialogRef.close()
    location.reload()
  }

  closeDialog() {
    this.dialogRef.close()
  }
}

