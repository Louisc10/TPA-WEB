import { Component, OnInit, Inject } from '@angular/core';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventTable } from '../event-table.component';
import { Entertainment } from 'src/app/models/entertainment';

@Component({
  selector: 'app-update-event-form',
  templateUrl: './update-event-form.component.html',
  styleUrls: ['./update-event-form.component.sass']
})
export class UpdateEventFormComponent implements OnInit {
  name: string = ""
  src: string = ""
  dst: string = ""
  price: number = 0
  kelas: string = ""

  datas

  constructor(private apollo: BackendServiceService,
    public dialogRef: MatDialogRef<UpdateEventFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EventTable) { }

  ngOnInit() {
  }

  openDialog() {
    if (this.data.name == "") {
      alert("Name is Empty")
    }
    else if (this.data.loc == "") {
      alert("Kelas is Empty")
    }
    else if (this.data.latitude == "") {
      alert("Source is Empty")
    }
    else if (this.data.longitude == "") {
      alert("Destination is Empty")
    }
    else if (this.data.price == 0) {
      alert("Price is Empty")
    }
    else {
      let train = new Entertainment()
      train.name = this.data.name
      train.price = this.data.price
      train.id = this.data.id
      train.longitude = this.data.longitude
      train.latitude = this.data.latitude
      train.location = this.data.loc







      this.apollo.updateEntertainment(train).subscribe(
        async Query => {
          this.datas = Query.data.updateEntertainment
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

