import { Args, Query, Resolver } from '@nestjs/graphql';
import { MonolithService } from './monolith.service';
import { Product, User } from './monolith.model';

@Resolver()
export class MonolithResolver {
  constructor(private monolithService: MonolithService) {}

  @Query(of => User)
  getUser(@Args({ name: 'id' }) id: number) {
    return this.monolithService.findUserById(id);
  }

  @Query(of => Product)
  getProducts() {
    return this.monolithService.products;
  }
}