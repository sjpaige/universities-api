import { ObjectType, Field, Int } from '@nestjs/graphql';
import { City } from './city.entity';

@ObjectType()
export class University {
  @Field(() => Int, { description: 'id' })
  id: number;

  @Field({description: 'name'})
  name: string;

  @Field(type => City, {description: 'city'})
  city: City
}
