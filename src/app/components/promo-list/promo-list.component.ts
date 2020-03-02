import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { async } from '@angular/core/testing';
import { Query } from 'src/app/models/query';
import { Promo } from 'src/app/models/promo';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-promo-list',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.sass']
})
export class PromoListComponent implements OnInit {

  rawData: Promo[]
  array: Promo[] = []
  promo: Promo
  id
  constructor(
    private apollo: BackendServiceService,
    private act: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit() {
    this.id = this.act.snapshot.paramMap.get('id')
    this.apollo.getAllPromo().subscribe(
      async Query => {
        this.rawData = Query.data.getAllPromo
        await this.x()
      }
    )
  }

  x(){
    this.rawData.forEach(e => {
      if(e.id == this.id){
        this.promo = e
      }
      else{
        this.array.push(e)
      }
    });
    console.table(this.array);
  }

  openDetail(id){
    this.route.navigate(['promo/detail/',id])
    this.apollo.getAllPromo().subscribe(
      async Query => {
        await this.delay(200)
        await window.location.reload()
      }
    )
  }
  
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }



}
