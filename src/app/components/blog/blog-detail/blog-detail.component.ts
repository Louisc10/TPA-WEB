import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare';
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.sass']
})
export class BlogDetailComponent implements OnInit {
  
  fbIcon = faFacebookSquare;
  pinIcon = faPinterest;
  tweetIcon = faTwitterSquare;
  rawData: Blog[]
  reversed: Blog[] = []
  blog: Blog
  id
  constructor(private apolo: BackendServiceService, private act: ActivatedRoute, private route: Router) {
    this.id = act.snapshot.paramMap.get('id')
    console.log(this.id)
  }

  ngOnInit() {
    this.apolo.getAllBlog().subscribe(
      async Query => {
        this.rawData = Query.data.getAllBlog
        await this.init()
      }
    )
  }

  init() {
    for (let i = this.rawData.length - 1; i >= 0; i--) {
      if(this.rawData[i].id == this.id){
        this.blog = this.rawData[i]
      }
      else{
        this.reversed.push(this.rawData[i])
      }
    }
    this.blog.view = this.blog.view + 1

    this.apolo.addViewBlog(this.blog).subscribe(
      async Query => {
        this.rawData = Query.data.addViewBlog
        await this.delay(200)
      }
    )
  }

  openDetail(e) {
    this.route.navigate(['blog/view/detail', e]);
    this.apolo.getAllPromo().subscribe(
      async Query => {
        await this.delay(200)
        await window.location.reload()
      }
    )
  }
  
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


}
