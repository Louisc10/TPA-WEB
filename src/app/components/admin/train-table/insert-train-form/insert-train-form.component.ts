import { Component, OnInit, Inject } from '@angular/core';
import { Time } from '@angular/common';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { Train } from 'src/app/models/train';
import { Mutation } from 'apollo-angular';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatInputModule } from '@angular/material';
import { ChattingService } from 'src/app/service/chatting.service';

@Component({
  selector: 'app-insert-train-form',
  templateUrl: './insert-train-form.component.html',
  styleUrls: ['./insert-train-form.component.sass']
})
export class InsertTrainFormComponent implements OnInit {
  name: string = ""
  src: string = ""
  dst: string = ""
  price: number = 0
  kelas: string = ""
  go: Time = null
  arrive: Time = null

  datas

  constructor(private apollo: BackendServiceService,
    public dialogRef: MatDialogRef<InsertTrainFormComponent>,
    public note: ChattingService) { }

  ngOnInit() {
    this.note.listen('train').subscribe(m => {
      alert(m);
    });
  }

  openDialog() {
    if (this.name == "") {
      alert("Name is Empty")
    }
    else if (this.src == "") {
      alert("Source is Empty")
    }
    else if (this.dst == "") {
      alert("Destination is Empty")
    }
    else if (this.price == 0) {
      alert("Price is Empty")
    }
    else if (this.kelas == "") {
      alert("Kelas is Empty")
    }
    else if (this.go == null) {
      alert("Time Deature is Empty")
    }
    else if (this.arrive == null) {
      alert("Time Arrive is Empty")
    }
    else {
      let train = new Train()
      train.dst = this.dst
      train.src = this.src
      train.kelas = this.kelas
      train.name = this.name
      train.price = this.price
      train.tipe = this.name


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







      this.apollo.createTrain(train).subscribe(
        async Query => {
          this.datas = Query.data.createTrain
          await this.c()
        }
      );
    }
  }
  c() {
    // alert("[!] New Train!")

    this.note.emit('train', '[!] New Train!');
    this.dialogRef.close()
    // location.reload()
  }

}
