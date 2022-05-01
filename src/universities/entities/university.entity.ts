import { ObjectType, Field, Int } from '@nestjs/graphql';
import { City } from './city.entity';
import { State } from './state.entity';

@ObjectType()
export class University {
  @Field(() => Int, { description: 'id primary key' })
  id: number;

  @Field()
  name: string;

  @Field(type => City)
  city: {
    id: number;
    name: string;
    state: State;
  }
}
