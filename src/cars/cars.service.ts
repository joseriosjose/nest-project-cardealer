import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { id: 1, brand: 'toyota', model: 'corolla' },
    { id: 2, brand: 'honda', model: 'civic' },
    { id: 3, brand: 'jeep', model: 'cherokee' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    return car;
  }
}
