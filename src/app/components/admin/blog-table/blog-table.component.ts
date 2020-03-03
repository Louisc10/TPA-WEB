import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Train } from 'src/app/models/train';
import { NgIf, Time } from '@angular/common';
import { async } from '@angular/core/testing';
import { ConfirmationBoxComponent } from '../other/confirmation-box/confirmation-box.component';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { InsertBlogFormComponent } from './insert-blog-form/insert-blog-form.component';
import { UpdateBlogFormComponent } from './update-blog-form/update-blog-form.component';

export interface BlogTable {
  id: number
  image: string
  title: string
  context: string
  view: number
}

export let EXAMPLE_DATA: BlogTable[] = [];
@Component({
  selector: 'app-blog-table',
  templateUrl: './blog-table.component.html',
  styleUrls: ['./blog-table.component.sass']
})
export class BlogTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  rawData: Blog[];
  data = new MatTableDataSource();

  complete: boolean = false

  displayedColumns: string[] = ['image', 'title', 'context', 'view', 'actions'];

  constructor(private apolo: BackendServiceService, private dialog: MatDialog, private route: Router) { }

  ngAfterViewInit() {
    this.apolo.getAllBlog().subscribe(async Query => {
      this.rawData = Query.data.getAllBlog
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
        this.apolo.deleteBlog(element.id).subscribe(async Query => {
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
    console.table(this.rawData)
    this.rawData.forEach(element => {
      let xVal: BlogTable
      xVal = {
        id: element.id,
        image: element.image,
        context: element.content,
        title: element.title,
        view: element.view
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
    const dialogRef = this.dialog.open(InsertBlogFormComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      alert("[!] New Blog Post!")
      location.reload()
    });
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();
  }

  update_e(element) {
    console.table(element)
    const dialogRef = this.dialog.open(UpdateBlogFormComponent, {
      width: '600px',
      data: { id: element.id, image: element.image, title: element.title, context: element.context, view: element.view }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   element = result;
    //   console.log("CONS: " + this.animal)
    //   if (this.animal == "CONFIRM") {
    //     this.apolo.deleteTrain(element.id).subscribe(async Query => {
    //       await alert("Success")
    //       await location.reload()
    //     })

    //   }
    // });
  }

}
