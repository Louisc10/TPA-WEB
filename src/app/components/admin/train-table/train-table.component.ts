import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Train } from 'src/app/models/train';
import { InsertTrainFormComponent } from './insert-train-form/insert-train-form.component';
import { NgIf, Time } from '@angular/common';
import { async } from '@angular/core/testing';
import { ConfirmationBoxComponent } from '../other/confirmation-box/confirmation-box.component';
import { UpdateTrainFormComponent } from './update-train-form/update-train-form.component';
import { Router } from '@angular/router';

export interface TrainTable {
  name: string
  departTime: Date
  arriveTime: Date
  class: string
  id: number
  price: number
  source: string
  destination: string
}

export let EXAMPLE_DATA: TrainTable[] = [];
@Component({
  selector: 'app-train-table',
  templateUrl: './train-table.component.html',
  styleUrls: ['./train-table.component.sass']
})
export class TrainTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  rawData: Train[];
  data = new MatTableDataSource();

  complete: boolean = false

  displayedColumns: string[] = ['name', 'departTime', 'arriveTime', 'class', 'actions'];

  constructor(private apolo: BackendServiceService, private dialog: MatDialog, private route: Router) { }

  ngAfterViewInit() {
    this.apolo.getAllTrain().subscribe(async Query => {
      this.rawData = Query.data.getAllTrain
      await this.insertData()

      // await this.delay(5000)

      // await this.cg()

    });
  }
  animal: string;

  delete_e(element): void {
    this.animal = ""
    const dialogRef = this.dialog.open(ConfirmationBoxComponent, {
      width: '250px',
      data: { animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      console.log("CONS: " + this.animal)
      if (this.animal == "CONFIRM") {
        this.apolo.deleteTrain(element.id).subscribe(async Query => {
          await alert("Success")
          await location.reload()
        })

      }
    });
  }

  cg() {
    this.complete = true
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  insertData() {
    this.rawData.forEach(element => {
      let xVal: TrainTable
      xVal = {
        name: element.name,
        departTime: new Date(element.timeGo),
        arriveTime: new Date(element.timeArrive),
        class: element.kelas,
        id: element.id,
        price: element.price,
        source: element.src,
        destination: element.dst
      }
      EXAMPLE_DATA.push(xVal)
    });
    console.table(this.rawData);

    this.data = new MatTableDataSource(EXAMPLE_DATA)
    this.data.paginator = this.paginator
    this.data.sort = this.sort

    this.cg()
  }

  insert() {
    const dialogRef = this.dialog.open(InsertTrainFormComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      alert("Refresh")
      location.reload()
    });
  }

  update_e(element) {
    const dialogRef = this.dialog.open(UpdateTrainFormComponent, {
      width: '250px',
      data: { name: element.name, departTime: element.departTime, arriveTime: element.arriveTime, class: element.class, id: element.id , price: element.price, source: element.source, destination: element.destination}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      element = result;
      console.log("CONS: " + this.animal)
      if (this.animal == "CONFIRM") {
        this.apolo.deleteTrain(element.id).subscribe(async Query => {
          await alert("Success")
          await location.reload()
        })

      }
    });
  }

}
