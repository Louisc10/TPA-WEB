import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})
export class PaymentComponent implements OnInit {

  con1: boolean = false
  con2: boolean = false
  constructor() { }

  ngOnInit() {
  }

  orderName: string
  orderEmail: string
  orderPhone: string

  passegerName: string
  passengerId: string

  trainSrc: string
  trainDst: string
  
}
