import { Component, OnInit } from '@angular/core';
import { Entertainment } from 'src/app/models/entertainment';

@Component({
  selector: 'app-entertaiment-item',
  templateUrl: './entertaiment-item.component.html',
  styleUrls: ['./entertaiment-item.component.sass']
})

export class EntertaimentItemComponent implements OnInit {

  constructor(private model: Entertainment) { }

  ngOnInit() {
  }

}
