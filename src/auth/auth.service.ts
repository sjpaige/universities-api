import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginUserInput } from './dto/login-user-input';


@Injectable()
export class AuthService {
  constructor(private userService: UsersService, private jwtService: JwtService, ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);

    const valid = await bcrypt.compare(password, user?.password);

    if (valid) {
      const {password, ...result} = user;
      return result;
    }
  }

  async login(user: User) {
    return {
      access_token: this.jwtService.sign({username: user.username, sub: user.id}),
      user,
    }
  }

  async signup(loginUserInput: LoginUserInput) {
    //check if user exists
    const user = await this.userService.findOne(loginUserInput.username);

    if (user) {
      throw new Error('user is already registered');
    }

    const password = await bcrypt.hash(loginUserInput.password, 10);

    return this.userService.create({
      ...loginUserInput,
      password
    })
  }
}
