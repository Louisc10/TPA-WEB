import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  email:String
  constructor(private route:Router) { }

  ngOnInit() {
    this.email = localStorage.getItem("user");
    this.email = (this.email == null) ? "" : this.email
    if(this.email != "admin@admin.com"){
      this.route.navigate([''])
    }
  }

}
