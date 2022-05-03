import { Injectable } from '@nestjs/common';
import { db } from 'src/db/database';
import { CreateUniversityInput, UpdateUniversityInput } from './dto/university.input';
import { University } from './entities/university.entity';

@Injectable()
export class UniversitiesService {
    private readonly universities: Map<number, University> = db()

  create(createUniversityInput: CreateUniversityInput) {
    this.universities.set(createUniversityInput.id, createUniversityInput);
    return createUniversityInput;
  }

  findAll(): University[] {
    return [...this.universities.values()];
  }

  findOne(id: number):University {
    return this.universities.get(id);
  }

  update(id: number, updateUniversityInput: UpdateUniversityInput) {
    this.universities.set(id, updateUniversityInput)
    return updateUniversityInput;
  }
}
