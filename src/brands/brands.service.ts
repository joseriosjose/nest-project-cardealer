import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // { id: uuid(), name: 'Toyota', createdAt: new Date().getTime() },
    //{ id: uuid(), name: 'Jeep', createdAt: new Date().getTime() },
    //{ id: uuid(), name: 'KIA', createdAt: new Date().getTime() },
  ];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;
    const brandNew: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createdAt: new Date().getTime(),
    };
    this.brands.push(brandNew);
    return brandNew;
  }

  findAll() {
    return this.brands;
  }

  findOneById(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand with id ${id} not found `);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOneById(id);

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandDB = {
          ...brandDB,
          ...updateBrandDto,
          id,
          updatedAt: new Date().getTime(),
        };
      }
      return brand;
    });

    return brandDB;
  }

  remove(id: string) {
    this.findOneById(id);
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }

  fillCarsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
