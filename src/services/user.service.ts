import { Injectable } from '@nestjs/common';

import IUser from '../interfaces/user.interface';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';

@Injectable()
export default class UserService {
  private users: IUser[] = [{ name: 'amin', age: 18 }];

  all(): IUser[] {
    return this.users;
  }

  findUser(id: string): IUser {
    const idNumber: number = parseInt(id);
    return this.users[idNumber - 1];
  }

  createUser(createUserDto: CreateUserDto): IUser {
    // Save the user in the database.
    this.users.push(createUserDto);
    // find the instance of the user created
    return this.users[this.users.length - 1];
  }

  updateUser(id: string, updateUserDto: UpdateUserDto): IUser {
    const idNumber: number = parseInt(id);
    this.users[idNumber - 1] = updateUserDto;
    return this.users[idNumber - 1];
  }

  deleteUser(id: string): IUser {
    const idNumber: number = parseInt(id);
    return this.users.splice(idNumber - 1, 1)[0];
  }
}
