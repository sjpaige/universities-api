import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UniversitiesService } from './universities.service';
import { University } from './entities/university.entity';
import { CreateUniversityInput, UpdateUniversityInput } from './dto/university.input';

@Resolver(() => University)
export class UniversitiesResolver {
  constructor(private readonly universitiesService: UniversitiesService) {}

  @Query(() => [University], { name: 'universities' })
  findAll() {
    return this.universitiesService.findAll();
  }

  @Query(() => University, { name: 'university' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.universitiesService.findOne(id);
  }

  @Mutation(() => University)
  createUniversity(@Args('createUniversityInput') createUniversityInput: CreateUniversityInput) {
    return this.universitiesService.create(createUniversityInput);
  }

  @Mutation(() => University)
  updateUniversity(@Args('updateUniversityInput') updateUniversityInput: UpdateUniversityInput) {
    return this.universitiesService.update(updateUniversityInput.id, updateUniversityInput);
  }
}
