import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Train } from 'src/app/models/train';
import { InsertTrainFormComponent } from './insert-train-form/insert-train-form.component';
import { NgIf } from '@angular/common';
import { async } from '@angular/core/testing';

export interface TrainTable {
  name: String
  departTime: Date
  arriveTime: Date
  class: String
  id: Number
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
  data= new MatTableDataSource();

  complete: boolean = false

  displayedColumns: string[] = ['name', 'departTime', 'arriveTime', 'class','actions'];
  
  constructor(private apolo: BackendServiceService, private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.apolo.getAllTrain().subscribe(async Query => {
      this.rawData = Query.data.getAllTrain
      await this.insertData()

      // await this.delay(5000)

      // await this.cg()

    });
  }

  cg(){
    this.complete = true
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  insertData() {
    this.rawData.forEach(element => {
      let xVal: TrainTable
      xVal = {
        name: element.name,
        departTime: new Date(element.timeGo),
        arriveTime: new Date(element.timeArrive),
        class: element.kelas,
        id: element.id
      }
      EXAMPLE_DATA.push(xVal)
    });
    console.table(this.rawData);

    this.data = new MatTableDataSource(EXAMPLE_DATA)
    this.data.paginator = this.paginator
    this.data.sort = this.sort

    this.cg()
  }

  insert(){
    const dialogRef = this.dialog.open(InsertTrainFormComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      alert("Refresh")
    });
  }

  delete_e(element){
    console.log(element)
    this.apolo.deleteTrain(element.id).subscribe(async Query => {
      await console.log(this.data)
    })
  }
  update_e(element){

  }

}
