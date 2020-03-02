import { Component, OnInit } from '@angular/core';
// import { ShareButtons } from '@ngx-share/core';

@Component({
  selector: 'app-share-button',
  templateUrl: './share-button.component.html',
  styleUrls: ['./share-button.component.sass']
})
export class ShareButtonComponent implements OnInit {

  constructor() { }

  link: string
  ngOnInit() {
    this.link = document.location.href
    console.log(this.link);
  }

  facebook(){
    window.open('http://www.facebook.com/sharer.php?u='+this.link, 'facebookShare', 'width=626,height=436');
  }

  mail(){
    window.open('mailto:?subject=Check it out: "'+ this.link+'"')
  }
  
  whatapp(){
    window.open('https://api.whatsapp.com/send?text=' + this.link)
    
  }
  
  line(){
    window.open('http://line.me/R/msg/text/?' + this.link)

  }

  copy(){ 
    navigator.clipboard.writeText(this.link)
  }
}
