import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import IUser from '../interfaces/user.interface';
import { UpdateUserDto, CreateUserDto } from '../dtos/user.dto';
import UserService from '../services/user.service';

@Controller('users')
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  index(): IUser[] {
    return this.userService.all();
  }

  @Get(':id')
  show(@Param('id') id: string): IUser {
    return this.userService.findUser(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): IUser {
    return this.userService.createUser(createUserDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): IUser {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  destroy(@Param('id') id: string): IUser {
    return this.userService.deleteUser(id);
  }
}
