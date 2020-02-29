import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { BoughtService } from 'src/app/service/bought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-bayar',
  templateUrl: './event-bayar.component.html',
  styleUrls: ['./event-bayar.component.sass']
})
export class EventBayarComponent implements OnInit {

  con1: boolean = true
  con2: boolean = false

  private sec = 60

  private users;
  private account;
  private email: string
  constructor(
    private apolo: BackendServiceService,
    private bought: BoughtService,
    private route: Router) { }


  ngOnInit() {
    if (this.bought.entertainment == null) {
      this.route.navigate(['hiburan'])
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
    var a = setInterval(() => {
      this.sec--
      if (this.sec == 0) {
        clearInterval(a)
        alert("Time Out")
        this.route.navigate([''])
      }
    }, 1000)

  }

  x() {
    console.log("Email : " + this.email);
    this.users = this.account[0]
    console.table(this.users)

    if (this.users != null) {
      this.orderEmail = this.email
      this.orderName = this.users.frontname + " " + this.users.backname
      this.orderPhone = this.users.phonenumber
    }

    this.qty = this.bought.quantity
    this.date = new Date(this.bought.date_1)
    this.price = this.bought.entertainment.price
  }

  orderName: string =""
  orderEmail: string =""
  orderPhone: string=""

  passegerName: string=""
  passengerId: string=""

  date: Date = new Date()
  price: number
  qty: number

  flag = "id"
  show: boolean = false

  changeCur(x) {
    this.flag = x
  }

  val() {
    if (this.orderName == "") {
      alert("Fill Orderer Name")
    }
    else if (this.orderEmail == "") {
      alert("Fill Orderer Email")
    }
    else if (this.orderPhone == "") {
      alert("Fill Orderer Phone")
    }
    else if (this.passegerName == "") {
      alert("Fill Passanger Name")
    }
    else if (this.passengerId == "") {
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
  sad() {
    this.route.navigate(['payment/bayar'])
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  payment() {
    this.apolo.createBoughtEvent(this.orderName, this.orderEmail, this.orderPhone, this.passegerName, this.passengerId, this.bought.entertainment.id, this.bought.date_1.toDateString(), this.qty).subscribe(
      async Query => {
        await this.route.navigate(['payment/bayar/success'])
      }
    );
  }

}
