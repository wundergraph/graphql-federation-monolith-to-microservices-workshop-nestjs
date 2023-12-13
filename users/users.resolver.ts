import { Args, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './users.model';

@Resolver()
export class UsersResolver {
  constructor(private service: UsersService) {}

  @Query(of => User)
  getUser(@Args({ name: 'id' }) id: number) {
    return this.service.findUserById(id);
  }
}