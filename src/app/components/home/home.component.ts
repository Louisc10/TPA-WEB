import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MainWidgetComponent } from '../widget/main-widget/main-widget.component';
import { animate } from '@angular/animations';

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
    var self = document.getElementById("widget");
    var overlay = document.getElementById("overlay");
    self.scrollIntoView({behavior: "smooth"})
    overlay.style.zIndex = "2"
    overlay.style.opacity = "1"
  }

  closeDialog(){
    var overlay = document.getElementById("overlay");
    overlay.style.zIndex = "-1"
    overlay.style.opacity = "0"
  }
}
