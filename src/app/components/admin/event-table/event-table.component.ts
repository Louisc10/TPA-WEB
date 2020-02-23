import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { Entertainment } from 'src/app/models/entertainment';

export interface TrainTable {
  name: String
  image: String
  location: String
  date: Date
}

let EXAMPLE_DATA: TrainTable[] 

@Component({
  selector: 'app-event-table',
  templateUrl: './event-table.component.html',
  styleUrls: ['./event-table.component.sass']
})

export class EventTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  rawData: Entertainment[];
  data= new MatTableDataSource();

  complete: boolean = false

  displayedColumns: string[] = ['name', 'image', 'location', 'date'];
  
  constructor(private apolo: BackendServiceService) {}

  ngAfterViewInit() {
    this.apolo.getAllEntertainment().subscribe(async Query => {
      this.rawData = Query.data.getAllEvent
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
        image: element.photoLink1,
        location: element.location,
        date: new Date(element.dateLast)
      }
      EXAMPLE_DATA.push(xVal)
    });
    console.table(this.rawData);

    this.data = new MatTableDataSource(EXAMPLE_DATA)
    this.data.paginator = this.paginator
    this.data.sort = this.sort

    
  }
}
