import { Component, OnInit } from '@angular/core';
import { CardRightComponent } from '../../daftar-login/card-right/card-right.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.sass']
})
export class NavbarBottomComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit() {
  }

  openLogin(){
    this.dialog.open(CardRightComponent);
  }
}
