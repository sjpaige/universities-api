import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';

@ObjectType("StateType")
export class StateEntity {
  @Field(type => Int, { description: 'id primary key' })
  id: number;

  @Field(type => String)
  name: string;
}