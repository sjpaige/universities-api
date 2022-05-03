import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';

@Controller()
export class AppController {

  @Get('hello')
  getHello() {
    return 'hello there'
  }
}
