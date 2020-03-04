import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/service/backend-service.service';

@Component({
  selector: 'app-show-city',
  templateUrl: './show-city.component.html',
  styleUrls: ['./show-city.component.sass']
})
export class ShowCityComponent implements OnInit {

  constructor(private apollo: BackendServiceService) { }

  ngOnInit() {
 
  }

}
