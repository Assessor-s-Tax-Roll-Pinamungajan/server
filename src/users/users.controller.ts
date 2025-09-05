import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() body: { username: string; name: string;  password: string }) {
    return this.usersService.create(body.username, body.name, body.password);
  }

  @Post('verify')
  verify(@Body() body: { username: string; password: string }) {
    return this.usersService.verify(body.username, body.password);
  }
}


