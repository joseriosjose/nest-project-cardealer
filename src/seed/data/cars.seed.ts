import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'toyota',
    model: 'corola',
  },
  {
    id: uuid(),
    brand: 'jeep',
    model: 'jk',
  },
  {
    id: uuid(),
    brand: 'kia',
    model: 'rio',
  },
];
