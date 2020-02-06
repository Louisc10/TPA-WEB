import { Component, OnInit } from '@angular/core';
import { nonInputTypeOnVarMessage } from 'graphql/validation/rules/VariablesAreInputTypes';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { Admin } from 'src/app/models/admin';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  account;
  admin: Admin = new Admin();

  constructor(private apollo: BackendServiceService) { }

  ngOnInit() {
  }

  register(){
    this.admin.Email = (<HTMLInputElement>document.getElementById("email")).value;
    this.admin.FrontName = (<HTMLInputElement>document.getElementById("fName")).value;
    this.admin.BackName = (<HTMLInputElement>document.getElementById("bName")).value;
    this.admin.PhoneNumber = (<HTMLInputElement>document.getElementById("phone")).value;
    this.admin.Password = (<HTMLInputElement>document.getElementById("password")).value;

    
    if(this.isValidEmail(this.admin.Email) ){
      if(this.isValidName(this.admin.FrontName) ){
        if(this.isValidName(this.admin.BackName) ){
          if(this.isValidPhone(this.admin.PhoneNumber) ){
            if(this.isValidPassword(this.admin.Password) ){
              alert("Success");
              this.regApollo(this.admin)
            }
            else{
              alert("Check Password")
            }
          }
          else{
            alert("Check Phone")
          }
        }
        else{
          alert("Check Back Name")
        }
      }
      else{
        alert("Check Front Name")
      }
    }
    else{
      alert("Wrong Email")
    }

  }
 
  private regApollo(admin: Admin){
    this.apollo.createAdmin(admin).subscribe(
      async Query=>{
        this.account = Query.data.createAdmin
        await console.table(this.account)
      }
    );
  }

  private isValidEmail(email: String): boolean {
    if(email == ""){
      return false
    }
    else if(email.startsWith('@') || email.startsWith('.') || email.endsWith('@') || email.endsWith('.')){
      return false
    }
    else if(email.indexOf('@')==-1 || email.indexOf('.') == -1){
      return false
    }
    else if(email.indexOf('@', email.indexOf('@') + 1) != -1){
      return false
    }
    else if(email.charAt(email.indexOf('@') - 1) == '.' || email.charAt(email.indexOf('@') + 1) == '.'){
      return false
    }

    // this.apollo.getAdmin(email).subscribe(
    //   async Query=>{
    //     this.account = Query.data.getAdmin
    //     await console.table(this.account)
    //     if(this.account.length == 0){
          return true
    //     }
    //     return false
    //   }
    // );
  }

  private isValidName(name: String): boolean {
    if(name == ""){
      return false
    }
    else if(name.length < 1){
      return false
    }
    return true
  }

  private isValidPhone(phone: string): boolean {
    if(phone == ""){
      return false
    }
    else if(phone.length < 10 || phone.length  > 12){
      return false
    }
    else{
      for( var i = 0 ; i < phone.length ; i++ ) {
        if(phone.charAt(i) < '0' || phone.charAt(i) > '9'){
          return false
        }
      }
    }
    
    // this.apollo.getAdmin(phone).subscribe(
    //   async Query=>{
    //     this.account = Query.data.getAdmin
    //     await console.table(this.account)
    //     if(this.account.length == 0){
          return true
    //     }
    //     return false
    //   }
    // );

  }

  private isValidPassword(pass: String): boolean {
    if(pass == ""){
      return false
    }
    else if(pass.length < 6 || pass.length > 20){
      return false
    }
    return true
  }

}
