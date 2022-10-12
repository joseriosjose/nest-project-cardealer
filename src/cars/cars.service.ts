import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { Car } from '../cars/interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [
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

  create(createCarDto: CreateCarDto) {
    const newCar = { id: uuid(), ...createCarDto };
    this.cars.push(newCar);
    return newCar;
  }
}
