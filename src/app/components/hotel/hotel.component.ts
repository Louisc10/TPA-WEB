import { Component, OnInit } from '@angular/core';
import { ChattingService } from 'src/app/service/chatting.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.sass']
})
export class HotelComponent implements OnInit {

  constructor(
    private note: ChattingService) { 
      this.note.listen('hotel').subscribe(M=>alert(M))
    }

  ngOnInit() {
  }

  openMap: boolean = true;
  statMap(){
    this.openMap = !this.openMap
  }
}
