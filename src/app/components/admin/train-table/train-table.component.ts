import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Train } from 'src/app/models/train';

export interface TrainTable {
  name: String
  departTime: Date
  arriveTime: Date
  class: String
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

  displayedColumns: string[] = ['name', 'departTime', 'arriveTime', 'class'];
  
  constructor(private apolo: BackendServiceService) {}

  ngAfterViewInit() {
    this.apolo.getAllTrain().subscribe(async Query => {
      this.rawData = Query.data.getAllTrain
      await this.insertData()

      await this.delay(5000)

      await this.cg()

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
        class: element.kelas
      }
      EXAMPLE_DATA.push(xVal)
    });
    console.table(this.rawData);

    this.data = new MatTableDataSource(EXAMPLE_DATA)
    this.data.paginator = this.paginator
    this.data.sort = this.sort

    
  }
}
