import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { map, delay } from 'rxjs/operators'
import { Observable, of as observableOf, merge } from 'rxjs'
import { Hotel } from 'src/app/models/hotel';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { ConfirmationBoxComponent } from '../other/confirmation-box/confirmation-box.component';
import { UpdateHotelFormComponent } from './update-hotel-form/update-hotel-form.component';

export interface HotelTable {
  name: String
  image: String
  rating: number
  tipe: String
  location: String
  address: String
  information: String
  facilities: String
}

export let EXAMPLE_DATA: HotelTable[] = [];

@Component({
  selector: 'app-hotel-table',
  templateUrl: './hotel-table.component.html',
  styleUrls: ['./hotel-table.component.sass']
})
export class HotelTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  rawData: Hotel[];
  data= new MatTableDataSource();

  complete: boolean = false

  displayedColumns: string[] = ['name', 'image', 'location', 'rating', 'address', 'facilities', 'tipe', 'information'];
  
  constructor(private apolo: BackendServiceService, private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.apolo.getAllHotel().subscribe(async Query => {
      this.rawData = Query.data.getAllHotel
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
      let xVal: HotelTable
      let fac: String
      fac = this.facilitesBuilder(element)
      xVal = {
        name: element.name,
        image: element.image,
        rating: element.rating,
        tipe: element.tipe,
        location: element.location,
        address: element.address,
        information: element.information,
        facilities: fac
      }
      EXAMPLE_DATA.push(xVal)
    });
    console.table(this.rawData);

    this.data = new MatTableDataSource(EXAMPLE_DATA)
    this.data.paginator = this.paginator
    this.data.sort = this.sort

    this.cg()
  }

  facilitesBuilder(element: Hotel) {
    let x = ""
    if (element.resepsionis == "Yes") {
      x = "Resepsionis 24 Jam"
    }
    if (element.ac == "Yes") {
      if (x != "") {
        x = x + " + "
      }
      x = x + "AC"
    }
    if (element.lift == "Yes") {
      if (x != "") {
        x = x + " + "
      }
      x = x + "Lift"
    }
    if (element.tempatParkir == "Yes") {
      if (x != "") {
        x = x + " + "
      }
      x = x + "Tempat Parkir"
    }
    if (element.restorant == "Yes") {
      if (x != "") {
        x = x + " + "
      }
      x = x + "Restorant"
    }
    if (element.spa == "Yes") {
      if (x != "") {
        x = x + " + "
      }
      x = x + "SPA"
    }
    if (element.kolamRenang == "Yes") {
      if (x != "") {
        x = x + " + "
      }
      x = x + "Kolam Renang"
    }
    if (element.wifi == "Yes") {
      if (x != "") {
        x = x + " + "
      }
      x = x + "WIFI"
    }
    if (element.freeLunch == "Yes") {
      if (x != "") {
        x = x + " + "
      }
      x = x + "Free Lunch"
    }

    console.log(x)
    return x
  }
  
  animal
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
    const dialogRef = this.dialog.open(UpdateHotelFormComponent, {
      width: '250px',
      data: { id: element.id, name: element.name, rating: element.rating, price: element.price}
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

  insert(){
    
  }

}
