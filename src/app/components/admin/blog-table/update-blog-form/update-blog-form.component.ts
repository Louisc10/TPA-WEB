import { Component, OnInit, Inject } from '@angular/core';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Blog } from 'src/app/models/blog';
import { BlogTable } from '../blog-table.component';

@Component({
  selector: 'app-update-blog-form',
  templateUrl: './update-blog-form.component.html',
  styleUrls: ['./update-blog-form.component.sass']
})
export class UpdateBlogFormComponent implements OnInit {

  image: string = ""
  title: string = ""
  context: string = ""
  view: number = 0
  datas
  constructor(private apollo: BackendServiceService,
    public dialogRef: MatDialogRef<UpdateBlogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BlogTable) { }

  ngOnInit() {
    console.table(this.data)
    this.sendToChild(this.data.context)
  }

  openDialog() {
    if (this.data.image == "") {
      alert("image is Empty")
    }
    else if (this.data.title == "") {
      alert("title is Empty")
    }
    else if (this.data.context == "") {
      alert("content is Empty")
    }
    else {
      let train = new Blog()
      train.content = this.data.context
      train.title = this.data.title
      train.image = this.data.image
      train.id = this.data.id






      this.apollo.updateBlog(train).subscribe(
        async Query => {
          this.datas = Query.data.updateBlog
          await this.c()
        }
      );
    }
  }
  c() {
    this.dialogRef.close()
    location.reload()
  }

  getMessage(message: string) {
    this.data.context = message;
  }

  messageToSendP: string = '';
  sendToChild(message: string) {
    this.messageToSendP = message;
  }
}