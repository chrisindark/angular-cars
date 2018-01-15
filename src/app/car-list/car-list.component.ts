import { Component, OnInit } from '@angular/core';

import { CarService } from '../shared/car/car.service';
import { GiphyService } from '../shared/giphy/giphy.service';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html'
})

export class CarListComponent implements OnInit {
  cars: any;

  constructor(
    private carService: CarService,
    private giphyService: GiphyService
  ) { }

  ngOnInit() {
    // get cars in a synchronous way
    this.cars = this.carService.getCars();

    // get cars in an asynchronous way
    this.carService.getCarsAsync().subscribe(data => {
      this.cars = data;
      for (const car in this.cars) {
        this.giphyService.get(this.cars[car].name).subscribe(url => {
          this.cars[car].giphyUrl = url;
        });
      }
    });
  }

  keys(dict) {
    return Object.keys(dict);
  }

}
