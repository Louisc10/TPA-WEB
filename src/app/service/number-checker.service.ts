import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import * from 'jquery' as $

@Injectable({
  providedIn: 'root'
})
export class NumberCheckerService {

  constructor(private http : HttpClient) { }

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
    return 
  }

  getCheck(): String {
    console.table(this.temp);
    // console.log(this.temp["rates"]);
    // console.log(this.temp["rates"]["IDR"]);

    return this.temp["valid"];
  }


  validate(x: string){
    return this.http.get("http://apilayer.net/api/validate?access_key=" + this.YOUR_ACCESS_KEY + "&number=" + x)
  }
  
  // checkPhone(x: string) {
  //   // set endpoint and your access key
  //   var access_key = 'c292f2149fd8920fc70d5e1db4cd7355';
  //   var phone_number = x;

  //   // verify phone number via AJAX call
  //   $.ajax({
  //     url: 'http://apilayer.net/api/validate?access_key=' + access_key + '&number=' + phone_number,
  //     dataType: 'jsonp',
  //     success: function (json) {

  //       // Access and use your preferred validation result objects
  //       console.log(json.valid);
  //       console.log(json.country_code);
  //       console.log(json.carrier);
  //       return json.valid
  //     }
  //   });
  // }




}
