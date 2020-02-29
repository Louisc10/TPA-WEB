import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberCheckerService {

  constructor() { }

  YOUR_ACCESS_KEY = "c292f2149fd8920fc70d5e1db4cd7355"
  private xhttp: any = new XMLHttpRequest();
  private temp: any;

  init(phone: string) {
    this.xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        this.temp = JSON.parse(this.xhttp.responseText);
        console.log("Ts " + this.temp);
      }
    }

    let link = "http://apilayer.net/api/validate?access_key=" + this.YOUR_ACCESS_KEY + "&number=" + phone
    this.xhttp.open("GET", link, true);
    this.xhttp.send();
  }
  
  getCheck():String {
    console.table(this.temp);
    // console.log(this.temp["rates"]);
    // console.log(this.temp["rates"]["IDR"]);

    return this.temp["valid"];
  }





}
