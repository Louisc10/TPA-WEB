import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/service/backend-service.service';

@Component({
  selector: 'app-home-chatroom',
  templateUrl: './home-chatroom.component.html',
  styleUrls: ['./home-chatroom.component.sass']
})
export class HomeChatroomComponent implements OnInit {

  constructor(private apolo:BackendServiceService) { }

  ngOnInit() {
  }

}
