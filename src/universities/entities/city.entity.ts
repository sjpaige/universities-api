import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { StateEntity } from './state.entity';

@ObjectType('CityType')
export class City {
  @Field(type => Int, { description: 'city id' })
  id: number;

  @Field({description: 'city name'})
  name: string;

  @Field(type => StateEntity, {description: 'state'})
  state: StateEntity
}