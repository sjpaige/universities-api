import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class State {
  @Field(() => Int, { description: 'id primary key' })
  id: number;

  @Field()
  name: string;
}