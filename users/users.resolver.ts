import { Args, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './users.model';

@Resolver('Query')
export class QueryResolver {
  constructor(private service: UsersService) {}

  @Query(of => User)
  getUser(@Args({ name: 'id' }) id: number) {
    return this.service.findUserById(id);
  }
}

@Resolver('User')
export class UsersResolver {
  constructor(private service: UsersService) {}

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }) {
    return this.service.findUserById(reference.id);
  }
}

