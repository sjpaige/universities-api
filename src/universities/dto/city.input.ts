import { InputType, Int, Field } from '@nestjs/graphql';
import { StateInput } from './state.input';

@InputType()
export class CityInput {
  @Field(() => Int, { description: 'id' })
  id: number;

  @Field(type => String, {description: 'city name'})
  name: string;

  @Field(type => StateInput, {description: 'state'})
  state: StateInput;
}
