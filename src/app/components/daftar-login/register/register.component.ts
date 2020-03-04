import { Component, OnInit } from '@angular/core';
import { nonInputTypeOnVarMessage } from 'graphql/validation/rules/VariablesAreInputTypes';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { Admin } from 'src/app/models/admin';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { async } from '@angular/core/testing';
import { MatDialog } from '@angular/material';
import { ConfirmationBoxComponent } from '../../admin/other/confirmation-box/confirmation-box.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  account;
  admin: Admin = new Admin();
  user: SocialUser

  constructor(private authService: AuthService, private apollo: BackendServiceService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }
  
  signInWithGoogle(): void {
    // this.authService.signOut()
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.regApollo1()
  }
  
  signInWithFB(): void {
    // this.authService.signOut()
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.regApollo1()
  } 
animal;
  private regApollo1() {
    console.log("HEEHHEHEHHEHEHEHHEHEHHEHEHHEHEHHEHEHHEHE")
    this.authService.authState.subscribe((user) => { async 
      this.user = user;
    });
    console.table(this.user)
    const dialogRef = this.dialog.open(ConfirmationBoxComponent, {
      width: '250px',
      data: { animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      console.log("CONS: " + this.animal)
      if (this.animal == "CONFIRM") {
        this.ass()

      }
    });
  }  

  ass(){
    var admin: Admin = new Admin();
    admin.Email = this.user.email
    admin.BackName = this.user.lastName
    admin.FrontName = this.user.firstName
    admin.PhoneNumber = ""
    admin.Password = this.user.email
    admin.Language = "EN"
    admin.Currency = "IDR"
    this.apollo.createAdmin(admin).subscribe(
      async Query => {
        this.account = Query.data.createAdmin
        console.table(this.account)
        await window.localStorage.setItem("user", this.user.email);
      },()=>{

      },()=>{
      }
    );
  }
 
  signOut(): void {
    this.authService.signOut();
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
