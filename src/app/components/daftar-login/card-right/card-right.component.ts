import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { BackendServiceService } from '../../../service/backend-service.service';
import { Query } from 'src/app/models/query';
import { MatDialog } from '@angular/material';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-card-right',
  templateUrl: './card-right.component.html',
  styleUrls: ['./card-right.component.sass']
})
export class CardRightComponent implements OnInit {
  private user: SocialUser;
  private loggedIn: boolean;
  private account;
  private username: String = null;
  private password: String = null;
  private status: String = "hidden";
  private visible: String = "password";
  private condition: String = "remove_red_eye";

  constructor(private authService: AuthService, private apollo: BackendServiceService, private dialog : MatDialog) { }
 
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  } 
 
  signOut(): void {
    this.authService.signOut();
  }

  checkLogin(): void{
    this.username = (<HTMLInputElement>document.getElementById("userinput")).value;
    this.password = (<HTMLInputElement>document.getElementById("passinput")).value;
    (<HTMLInputElement>document.getElementById("passinput")).value = "";
    console.log(this.username);
    if(this.username==""){
      alert("Can't Be Empty");
    }
    else if( this.isValidEmail(this.username) || this.isValidPhone(this.username) ) {
      this.apollo.getAdmin(this.username).subscribe(
        async Query=>{
          this.account = Query.data.getAdmin
          // await console.table(this.account[0]["frontname"]);
          await console.table(this.account)
          // console.log("Data: " + this.username[0]["password"] );
          // console.log("Password: " + this.password);
          if(this.account.length == 1){
            this.status = "";
          }
          else{
            // console.log("ZZZ " + this.username)
            this.status = " hidden";
            this.dialog.open(RegisterComponent)
          }

          if(this.password != ""){
            console.log(this.username)
            if(this.account[0]["password"] == this.password){
              alert("Success");
            }
            else{
              alert("False & Failed");
            }
          }
          this.account = null
        }
      );

    }
    else{
      alert("Not a email or phone number")
    }
    
  }

  private isValidPhone(phone: String): boolean {
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

    return true
  }

  private isValidEmail(email: String): boolean {
    if(email.startsWith('@') || email.startsWith('.') || email.endsWith('@') || email.endsWith('.')){
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


    return true
  }

  changeCondition() {
    if(this.visible == "text"){
      this.visible = "password"
    }
    else{
      this.visible = "text"
    }
  }
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
}
