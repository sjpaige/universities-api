import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class StateInput {
  @Field(() => Int, { description: 'id' })
  id: number;

  @Field(type => String, {description: 'state name'})
  name: string;
}
