import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {

  @Field({description: 'username'})
  username: string;

  @Field({description: 'password'})
  password: string;
}
