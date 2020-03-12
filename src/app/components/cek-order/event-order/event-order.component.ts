import { Component, OnInit, Query } from '@angular/core';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-event-order',
  templateUrl: './event-order.component.html',
  styleUrls: ['./event-order.component.sass']
})
export class EventOrderComponent implements OnInit {

  constructor(private apolo: BackendServiceService) { }

  rawData
  ngOnInit() {
    this.apolo.getBoughtEvent(localStorage.getItem('user')).subscribe(
      async Query => {
        this.rawData = Query.data.getBoughtEvent
      }
    )
  }

}
