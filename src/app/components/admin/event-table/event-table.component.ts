import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { Entertainment } from 'src/app/models/entertainment';
import { timeInterval } from 'rxjs/operators';
import { ConfirmationBoxComponent } from '../other/confirmation-box/confirmation-box.component';
import { UpdateEventFormComponent } from './update-event-form/update-event-form.component';
import { InsertEventFormComponent } from './insert-event-form/insert-event-form.component';
import { Router } from '@angular/router';

export interface EventTable {
  name: String
  image: String
  loc: String
  time: Date
  id: number
  latitude: String
  longitude: String
  price: number
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

  displayedColumns: string[] = ['name', 'image', 'loc', 'time', 'actions'];
  
  constructor(private apolo: BackendServiceService, private dialog: MatDialog, private route: Router) {}

  email
  ngAfterViewInit() {
    this.email = localStorage.getItem("user");
    this.email = (this.email == null) ? "" : this.email
    if(this.email != "admin@admin.com"){
      this.route.navigate([''])
    }
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
        time: new Date(element.dateLast),
        id: element.id,
        latitude: element.latitude,
        longitude: element.longitude,
        price: element.price
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
        this.apolo.deleteEntertainment(element.id).subscribe(async Query => {
          await alert("Success")
          await location.reload()
        })

      }
    });
  }
  
  update_e(element) {
    const dialogRef = this.dialog.open(UpdateEventFormComponent, {
      width: '250px',
      data: { id: element.id, name: element.name, loc: element.loc, latitude: element.latitude, longitude: element.longitude, price: element.price}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // element = result;
      // console.log("CONS: " + this.animal)
      // if (this.animal == "CONFIRM") {
        this.apolo.deleteTrain(element.id).subscribe(async Query => {
          await alert("Success")
          await location.reload()
        })

      // }
    });
  }

  insert() {
    // const dialogRef = this.dialog.open(InsertEventFormComponent, {
    //   width: '600px'
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   alert("Refresh")
    //   location.reload()
    // });
    this.route.navigate(['admin/insertEvent'])
  }

  

}
