import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { db } from 'src/db/database';
import { CreateUniversityInput, UpdateUniversityInput } from './dto/university.input';
import { City } from './entities/city.entity';
import { University } from './entities/university.entity';

@Injectable()
export class UniversitiesService {
    private readonly result = db()

  create(createUniversityInput: CreateUniversityInput) {
    const city: City = this.result.citiesTable.get(createUniversityInput.cityId);
    if (city) {
      this.result.universitiesTable.set(createUniversityInput.id, {...createUniversityInput, city});
    } else {
      throw new HttpException('City no found by that id', HttpStatus.NOT_FOUND)
    }

    return this.findOne(createUniversityInput.id);
  }

  findAll(): University[] {
    return [...this.result.universitiesTable.values()];
  }

  findAllCities(): City[] {
    return [...this.result.citiesTable.values()]
  }

  findOne(id: number):University {
    return this.result.universitiesTable.get(id);
  }

  update(id: number, updateUniversityInput: UpdateUniversityInput) {
    this.result.universitiesTable.set(id, updateUniversityInput)
    return updateUniversityInput;
  }
}
