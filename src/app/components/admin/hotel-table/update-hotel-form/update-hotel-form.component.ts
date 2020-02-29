import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { HotelTable } from '../hotel-table.component';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-update-hotel-form',
  templateUrl: './update-hotel-form.component.html',
  styleUrls: ['./update-hotel-form.component.sass']
})
export class UpdateHotelFormComponent implements OnInit {

  name: string = ""
  src: string = ""
  dst: string = ""
  price: number = 0
  kelas: string = ""

  datas

  constructor(private apollo: BackendServiceService,
    public dialogRef: MatDialogRef<UpdateHotelFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HotelTable) { }

  ngOnInit() {
  }

  openDialog() {
    if (this.data.name == "") {
      alert("Name is Empty")
    }
    else if (this.data.rating == 0) {
      alert("Kelas is Empty")
    }
    else if (this.data.price == 0) {
      alert("Price is Empty")
    }
    else {
      let train = new Hotel()
      train.name = this.data.name
      train.price = this.data.price
      train.id = this.data.id
      train.rating = this.data.rating
      







      this.apollo.updateHotel(train).subscribe(
        async Query => {
          this.datas = Query.data.updateHotel
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

