import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => Int, { description: 'id' })
  id: number;

  @Field({description: 'username'})
  username: string;

  @Field({description: 'password'})
  password: string;
}
