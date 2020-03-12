import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { BoughtService } from 'src/app/service/bought.service';
import { async } from '@angular/core/testing';
import { DeclareFunctionStmt } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})
export class PaymentComponent implements OnInit {

  con1: boolean = false
  con2: boolean = false
  asd = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5]
  
  private users;
  private account;
  private email: string
  constructor(
    private apolo: BackendServiceService,
    private bought: BoughtService,
    private route: Router) { }
    

  ngOnInit() {
    if (this.bought.train == null) {
      this.route.navigate(['keretaapi'])
    }
    this.email = localStorage.getItem("user");
    this.email = (this.email == null) ? "" : this.email
    console.log("aaa" + window.localStorage.getItem("user"))
    this.apolo.getAdmin(this.email).subscribe(
      async Query => {
        this.account = Query.data.getAdmin
        await this.x()
      }
    )

  }

  x() {
    console.log("Email : " + this.email);
    this.users = this.account[0]
    console.table(this.users)
    
    if(this.users != null){
      this.orderEmail = this.email
      this.orderName = this.users.frontname + " " + this.users.backname
      this.orderPhone = this.users.phonenumber
    }

    this.trainSrc = this.bought.train.src
    this.trainDst = this.bought.train.dst
    this.date = new Date(this.bought.train.timeGo)
    this.timeGo = new Date(this.bought.train.timeGo)
    this.timeArrive = new Date(this.bought.train.timeArrive)
    this.price = this.bought.train.price
  }

  orderName: string =""
  orderEmail: string =""
  orderPhone: string=""

  passegerName: string=""
  passengerId: string=""

  trainSrc: string=""
  trainDst: string=""

  date: Date = new Date()
  timeGo
  timeArrive
  price: number

  flag = "id"
  show: boolean = false
  xas:boolean = false

  changeCur(x){
    this.flag = x
  }

  val(){
    if(this.orderName == ""){
      alert("Fill Orderer Name")
    }
    else if(this.orderEmail == ""){
      alert("Fill Orderer Email")
    }
    else if(this.orderPhone == ""){
      alert("Fill Orderer Phone")
    }
    else if(this.passegerName == ""){
      alert("Fill Passanger Name")
    }
    else if(this.passengerId == ""){
      alert("Fill Passanger Id")
    }
    else {
      alert("success")
      this.show = true
      this.apolo.getAllHotel().subscribe(async Query => {
        await this.delay(5000)
        await this.sad()
      })
    }
  }
  sad(){
    this.route.navigate(['payment/bayar'])
  }
  
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  
}
