import { Injectable } from '@nestjs/common';
import { User } from './users.model';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, username: 'AshKetchum' },
    { id: 2, username: 'GaryOak' },
    { id: 3, username: 'ProfessorOak' },
  ];

  findById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}