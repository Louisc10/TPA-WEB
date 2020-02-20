import { Component, OnInit, Injectable } from '@angular/core';
import { TrainFilterService } from 'src/app/service/train-filter.service';


@Component({
  selector: 'app-train-filter',
  templateUrl: './train-filter.component.html',
  styleUrls: ['./train-filter.component.sass']
})

@Injectable({
  providedIn: 'root'
})
export class TrainFilterComponent implements OnInit {

  constructor(private data: TrainFilterService) {
  }

  ngOnInit() {
  }
  ekonomi = this.data.ekonomi;
  bisnis = this.data.bisnis;
  eksekutif = this.data.eksekutif;
  timeP1 = this.data.timeP1;
  timeP2 = this.data.timeP2;
  timeP3 = this.data.timeP3;
  timeP4 = this.data.timeP4;
  serayu = this.data.serayu;
  thomas = this.data.thomas;
  tayo = this.data.tayo;
  parayangan = this.data.parayangan;

  


  reset(): void {
    this.data.ekonomi = false;
    this.data.bisnis = false;
    this.data.eksekutif = false;
    this.data.timeP1 = false;
    this.data.timeP2 = false;
    this.data.timeP3 = false;
    this.data.timeP4 = false;
    this.data.serayu = false;
    this.data.thomas = false;
    this.data.tayo = false;
    this.data.parayangan = false;
  }

}

