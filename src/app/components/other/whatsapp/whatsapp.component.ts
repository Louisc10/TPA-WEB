import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.sass']
})
export class WhatsappComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openWhatsapp(){
    window.open("https://api.whatsapp.com/send?phone=087783078968&text=Hello%20Louis")
  }
}
