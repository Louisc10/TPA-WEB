import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { BackendServiceService } from '../../../service/backend-service.service';
import { Query } from 'src/app/models/query';

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

  constructor(private authService: AuthService, private apollo: BackendServiceService) { }
 
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
    else{
      this.apollo.getAdmin(this.username).subscribe(
        async Query=>{
          this.account = Query.data.getAdmin
          await console.table(this.account[0]["frontname"]);
          // console.log("Data: " + this.username[0]["password"] );
          // console.log("Password: " + this.password);
          if(this.account.length == 1){
            this.status = "";
          }
          else{
            this.status = "hidden";
          }

          if(this.password != ""){
            // console.log(this.username)
            if(this.account[0]["password"] == this.password){
              alert("Success");
            }
            else{
              alert("False & Failed");
            }
          }
        }
      );

    }
    
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
}
