import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/service/backend-service.service';

@Component({
  selector: 'app-subscribion',
  templateUrl: './subscribion.component.html',
  styleUrls: ['./subscribion.component.sass']
})
export class SubscribionComponent implements OnInit {
  account: any;

  constructor(private apollo: BackendServiceService) { }

  ngOnInit() {
  }

  submit(){
    let email = (<HTMLInputElement>document.getElementById("email")).value
    if( this.isValidEmail(email) ) {
      this.apollo.createSubscription(email).subscribe(
        async Query=>{
          this.account = Query.data.createSubscription
          await console.table(this.account)
        }
      );

    }
    else{
      alert("Not a email or phone number")
    }
    
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
}
