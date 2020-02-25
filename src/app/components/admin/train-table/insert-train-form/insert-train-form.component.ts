import { Component, OnInit, Inject } from '@angular/core';
import { Time } from '@angular/common';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { Train } from 'src/app/models/train';
import { Mutation } from 'apollo-angular';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatInputModule} from '@angular/material';

@Component({
  selector: 'app-insert-train-form',
  templateUrl: './insert-train-form.component.html',
  styleUrls: ['./insert-train-form.component.sass']
})
export class InsertTrainFormComponent implements OnInit {
  name: string =""
  src: string =""
  dst: string =""
  price: number = 0
  kelas: string =""
  go: Time = null
  arrive: Time = null

  datas

  constructor(private apollo: BackendServiceService,
    public dialogRef: MatDialogRef<InsertTrainFormComponent>) { }

  ngOnInit() {
  }

  openDialog(){
    if(this.name == ""){
      alert("Name is Empty")
    }
    else if(this.src == ""){
      alert("Source is Empty")
    }
    else if(this.dst == ""){
      alert("Destination is Empty")
    }
    else if(this.price == 0){
      alert("Price is Empty")
    }
    else if(this.kelas == ""){
      alert("Kelas is Empty")
    }
    else if(this.go == null){
      alert("Time Deature is Empty")
    }
    else if(this.arrive == null){
      alert("Time Arrive is Empty")
    }
    else{
      let train = new Train()
      train.dst = this.dst
      train.src = this.src
      train.kelas = this.kelas
      train.name = this.name
      train.price = this.price
      train.tipe = this.name
      
      let date = new Date()
      date.setHours(this.go.hours)
      date.setMinutes(this.go.minutes)
  
      train.timeGo = date.toString()
      
      date = new Date()
      date.setHours(this.arrive.hours)
      date.setMinutes(this.arrive.minutes)
      if((this.arrive.hours * 60 + this.arrive.minutes) < (this.go.hours * 60 + this.go.minutes)){
        date.setDate(date.getDate() + 1)
      }
  
      train.timeArrive = date.toString()
      
      console.log(this.arrive)

      console.log(this.arrive.hours)
      console.log(this.arrive.minutes)
  
      console.log(date)
      console.log(train.timeArrive)
  
  
  
  
  
  
  
      this.apollo.createTrain(train).subscribe(
        async Query=>{
          this.datas = Query.data.createTrain
          await console.table(this.datas)
        }
      );
      
      this.dialogRef.close()
    }}

}
