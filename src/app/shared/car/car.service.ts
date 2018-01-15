import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Car } from '../../car-list/car.model';
import { Cars } from '../../mock/mock-cars';
import { MessageService } from '../messages/message.service';


@Injectable()
export class CarService {
  carData: {} = {};

  constructor(
    private http: HttpClient,
    private cars: Cars,
    private messageService: MessageService,
  ) {
    this.cars.CARS.map((value, index) => {
      this.carData[String(value.id)] = value;
    });
  }

  getCars() {
    return this.cars.CARS;
  }

  getCarsAsync(): Observable<any> {
    // Todo: send the message _after_ fetching the cars
    // this.messageService.add('CarService: fetched cars');
    return of(this.carData);
  }

  get(id: number) {
    return of(this.carData[id]);
  }

  save(car: any): Observable<any> {
    let result: Observable<Object>;
    if (car.id) {
      result = Object.assign(this.carData[car.id], car);
    } else {
      car.id = Object.keys(this.carData).length + 1;
      while (this.carData[car.id]) {
        ++car.id;
      }
      this.carData[String(car.id)] = car;
      result = car;
    }
    return of(result);
  }

  remove(id: number): Observable<any> {
    const car = this.carData[id];
    delete this.carData[id];
    return of(car);
  }

}
