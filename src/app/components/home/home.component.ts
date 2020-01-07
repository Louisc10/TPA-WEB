import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MainWidgetComponent } from '../widget/main-widget/main-widget.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit() {
  }

  openDialog(){
    this.dialog.open(MainWidgetComponent);
  }

}
