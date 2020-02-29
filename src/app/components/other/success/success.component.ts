import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoughtService } from 'src/app/service/bought.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.sass']
})
export class SuccessComponent implements OnInit {

  con1: boolean = true
  con2: boolean = true

  constructor(private route: Router, private bought: BoughtService) { }

  ngOnInit() {
    if(this.bought.train == null){
      this.route.navigate(['keretaapi'])
    }
    this.bought.date_1 = null
    this.bought.date_2 = null
    this.bought.entertainment = null
    this.bought.quantity = null
    this.bought.train = null
  }
  return(){
    this.route.navigate([''])
  }

}
