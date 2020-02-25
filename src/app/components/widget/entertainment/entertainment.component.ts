import { Component, AfterViewInit } from '@angular/core';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

export class City {
  name: string;
  id: Number;
  longitude: string;
  latitude: string;
}

@Component({
  selector: 'widget-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.sass']
})
export class EntertainmentWidget implements AfterViewInit {
 cityControl = new FormControl();
  date1;
  date2;
  selectedCity1: string = "";
  selectedOption: string = "";
  options: string[] = [];

  sub: Subscription;

  cities: City[] = [
    { name: 'Bandung', id: 1, longitude: '106.816635', latitude: '-6.595038' }
  ]

  constructor(private apollo: BackendServiceService, private route: Router) {
  }

  filteredOptions: Observable<City[]>;

  ngAfterViewInit() {
    this.date1 = new Date();
    this.date2 = new Date();
    this.date2.setDate(this.date2.getDate() + 1);

    this.sub = this.apollo.getAllCity().subscribe(
      async Query => {
        this.cities = Query.data.getAllCity
        await this.test();
        // console.table(this.cities)
      }
    )
  }

  test() {
    this.sub.unsubscribe();
    this.filteredOptions = this.cityControl.valueChanges
      .pipe(
        startWith(''),
        map(value => value ? this._filter(value) : this.cities.slice())
      );
  }

  _filter(value: string): City[] {
    const filterValue = value.toLowerCase();

    return this.cities.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  myFilter1 = (d: Date): boolean => {
    let now = new Date();
    now.setDate(now.getDate() - 1);
    let now1 = new Date();
    now1.setFullYear(now.getFullYear() + 1);
    return d > now && d < now1;
  }

  myFilter2 = (d: Date): boolean => {
    let now = this.date1;
    now.setDate(now.getDate() + 1);
    let tres = this.date1
    tres.setDate(tres.getDate() + 16);
    return d > now && d < tres;
  }

  kik() {
    if(this.route.url != "/hiburan")
    this.route.navigate(["/hiburan"]);

  }
}
