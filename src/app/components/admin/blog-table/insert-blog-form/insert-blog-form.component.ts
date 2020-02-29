import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { MatDialogRef } from '@angular/material';
import { Blog } from 'src/app/models/blog';

@Component({
  selector: 'app-insert-blog-form',
  templateUrl: './insert-blog-form.component.html',
  styleUrls: ['./insert-blog-form.component.sass']
})
export class InsertBlogFormComponent implements OnInit {


  image: string = ""
  title: string = ""
  context: string = ""
  view: number = 0

  datas

  constructor(private apollo: BackendServiceService,
    public dialogRef: MatDialogRef<InsertBlogFormComponent>) { }

  ngOnInit() {
  }
  

  getMessage(message: string) {
    this.context = message;
  }

  openDialog() {
    if (this.image == "") {
      alert("image is Empty")
    }
    else if (this.title == "") {
      alert("title is Empty")
    }
    else if (this.context == "") {
      alert("content is Empty")
    }
    else {
      let train = new Blog()
      train.content = this.context
      train.title = this.title
      train.image = this.image






      this.apollo.createBlog(train).subscribe(
        async Query => {
          this.datas = Query.data.createBlog
          await this.c()
        }
      );
    }
  }
  c() {
    this.dialogRef.close()
    location.reload()
  }

}
