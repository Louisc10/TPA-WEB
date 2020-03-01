import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { async } from '@angular/core/testing';
import { Query } from 'src/app/models/query';
import { MatDialog } from '@angular/material';
import { InsertBlogFormComponent } from '../../admin/blog-table/insert-blog-form/insert-blog-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.sass']
})
export class BlogHomeComponent implements AfterViewInit {

  rawData: Blog[]
  reversed: Blog[] = []
  constructor(private apolo: BackendServiceService,
    private dialog: MatDialog,
    private route: Router) { }

  ngAfterViewInit() {
    this.apolo.getAllBlog().subscribe(
      async Query => {
        this.rawData = Query.data.getAllBlog
        await this.init()
      }
    )
  }
  array = [];
  sum = 10;
  scrollDistance = 0.1;

  @HostListener("window:scroll", [])
  onScrollDown(ev): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      let start = this.sum;
      this.sum += 5;
      if (this.sum > this.reversed.length)
        this.sum = this.reversed.length

      this.appendItems(start, this.sum);
    }
  }

  appendItems(startIndex, endIndex) {
    for (let i = startIndex; i < this.sum; ++i) {
      this.array = [...this.array, ...[this.reversed[i]]];
    }
  }

  init() {
    for (let i = this.rawData.length - 1; i >= 0; i--) {
      console.log(this.rawData[i])
      this.reversed.push(this.rawData[i])
    }

    this.appendItems(0, this.sum);
  }

  openMenu() {
    const dialogRef = this.dialog.open(InsertBlogFormComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      alert("[!] New Blog Post!")
      location.reload()
    });
  }

  openDetail(e) {
    this.route.navigate(['blog/view/detail', e]);
  }
}
