import { InputType, Int, Field } from '@nestjs/graphql';
import { CityInput } from './city.input';

@InputType()
export class UniversityInput {
  @Field(() => Int, { description: 'id' })
  id: number;

  @Field(type => String, {description: 'university name'})
  name: string;

  @Field(type => CityInput, {description: 'city'})
  city: CityInput;
}
