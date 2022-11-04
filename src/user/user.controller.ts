import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './user.dto.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    return await this.userService.findMany({});
  }

  @Post()
  async createUser(@Body() body: CreateUserDTO) {
    const { id, name, email } = body;
    return await this.userService.create({
      data: {
        id,
        email,
        name,
      },
    });
  }
}
