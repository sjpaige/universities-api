import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { City } from './city.entity';

@ObjectType('UniversityType')
export class University {
  @Field(() => Int, { description: 'id' })
  id: number;

  @Field({description: 'name'})
  name: string;

  @Field(type => City, {description: 'city'})
  city: City
}
