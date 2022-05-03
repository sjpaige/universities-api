import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginUserInput } from './dto/login-user-input';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);

    if(user && user.password === password) {
      const {password, ...result} = user; // strip password
      return result;
    }
  }

  async login(loginUserInput: LoginUserInput) {
    const user = await this.userService.findOne(loginUserInput.username)
    console.log(user)
    const {password, ...result} = user;
    console.log(user)

    return {
      access_token: 'jwt',
      user: result,
    }
  }
}
