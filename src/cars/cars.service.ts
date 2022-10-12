import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  private cars = [
    { id: uuid(), brand: 'toyota', model: 'corolla' },
    { id: uuid(), brand: 'honda', model: 'civic' },
    { id: uuid(), brand: 'jeep', model: 'cherokee' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    return car;
  }
}
