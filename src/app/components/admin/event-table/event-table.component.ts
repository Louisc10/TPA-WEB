import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { Entertainment } from 'src/app/models/entertainment';
import { timeInterval } from 'rxjs/operators';

export interface EventTable {
  name: String
  image: String
  loc: String
  time: Date
}

let EXAMPLE_DATA: EventTable[] =[]  

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

  displayedColumns: string[] = ['name', 'image', 'loc', 'time'];
  
  constructor(private apolo: BackendServiceService) {}

  ngAfterViewInit() {
    this.apolo.getAllEntertainment().subscribe(async Query => {
      this.rawData = Query.data.getAllEntertainment
      await this.insertData()

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
      let xVal: EventTable
      xVal = {
        name: element.name,
        image: element.photoLink1,
        loc: element.location,
        time: new Date(element.dateLast)
      }
      EXAMPLE_DATA.push(xVal)
      let x= new Date()
      x.getMonth()
    });
    console.table(this.rawData);

    this.data = new MatTableDataSource(EXAMPLE_DATA)
    this.data.paginator = this.paginator
    this.data.sort = this.sort

    this.cg()
  }
}
