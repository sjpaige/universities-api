import { ObjectType, Field, Int } from '@nestjs/graphql';
import { State } from './state.entity';

@ObjectType()
export class City {
  @Field(() => Int, { description: 'id primary key' })
  id: number;

  @Field()
  name: string;

  @Field(() => State)
  state: {
    id: number;
    name: string;
  }
}