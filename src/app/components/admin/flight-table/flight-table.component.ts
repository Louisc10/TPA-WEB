import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Pesawat } from 'src/app/models/pesawat';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { Router } from '@angular/router';
import { ConfirmationBoxComponent } from '../other/confirmation-box/confirmation-box.component';
import { UpdateFlightFormComponent } from './update-flight-form/update-flight-form.component';
import { InsertFlightFormComponent } from './insert-flight-form/insert-flight-form.component';

export interface PesawatTable {
  id: number
  maskapai: string
  source: string
  destination: string
  price: number
  code: string
  transit: string
  departTime: Date
  arriveTime: Date
}

let EXAMPLE_DATA: PesawatTable[] = []
@Component({
  selector: 'app-flight-table',
  templateUrl: './flight-table.component.html',
  styleUrls: ['./flight-table.component.sass']
})
export class FlightTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  rawData: Pesawat[];
  data = new MatTableDataSource();

  complete: boolean = false

  displayedColumns: string[] = ['name', 'departTime', 'arriveTime', 'class', 'actions'];

  constructor(private apolo: BackendServiceService, private dialog: MatDialog, private route: Router) { }

  ngAfterViewInit() {
    this.apolo.getAllPesawat().subscribe(async Query => {
      this.rawData = Query.data.getAllPesawat
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
        this.apolo.deletePesawat(element.id).subscribe(async Query => {
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
      let xVal: PesawatTable
      xVal = {
        id: element.id,
        maskapai: element.maskapai,
        source: element.src,
        destination: element.dst,
        code: element.code,
        transit: element.transit,
        price: element.price,
        departTime: new Date(element.timeGo),
        arriveTime: new Date(element.timeArrive),
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
    const dialogRef = this.dialog.open(InsertFlightFormComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      alert("Refresh")
      location.reload()
    });
  }

  update_e(element) {
    const dialogRef = this.dialog.open(UpdateFlightFormComponent, {
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

