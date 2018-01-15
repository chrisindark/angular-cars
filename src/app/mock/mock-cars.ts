import { Injectable } from '@angular/core';

import { Car } from '../car-list/car.model';


@Injectable()
export class Cars {
  CARS: Car[] = [
    {
      'id': 1,
      'name': 'Ferrari'
    },
    {
      'id': 2,
      'name': 'Jaguar'
    },
    {
      'id': 3,
      'name': 'Porsche'
    },
    {
      'id': 4,
      'name': 'Lamborghini'
    },
    {
      'id': 5,
      'name': 'Bugatti'
    },
    { 'id': 11, 'name': 'Mr. Nice' },
    { 'id': 12, 'name': 'Narco' },
    { 'id': 13, 'name': 'Bombasto' },
    { 'id': 14, 'name': 'Celeritas' },
    { 'id': 15, 'name': 'Magneta' },
    { 'id': 16, 'name': 'RubberMan' },
    { 'id': 17, 'name': 'Dynama' },
    { 'id': 18, 'name': 'Dr IQ' },
    { 'id': 19, 'name': 'Magma' },
    { 'id': 20, 'name': 'Tornado' }
  ];
}
