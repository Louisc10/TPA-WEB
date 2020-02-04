import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoneyExchangeService {
  
  private xhttp: any = new XMLHttpRequest();
  private temp: any;
  constructor() {}

  init(){
    this.xhttp.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        this.temp = JSON.parse(this.xhttp.responseText);
        console.log("Ts "+this.temp);
      }
    }

    this.xhttp.open("GET","https://api.exchangeratesapi.io/latest?symbols=USD,SGD,IDR", true);
    this.xhttp.send();
  }

  getRates(currency:any):String {
    console.log(this.temp);
    console.log(this.temp["rates"]);
    console.log(this.temp["rates"]["IDR"]);

    return this.temp["rates"][currency];
  }

}
