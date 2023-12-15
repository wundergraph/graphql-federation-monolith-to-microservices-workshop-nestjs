import { Args, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product, User } from './products.model';


@Resolver('Query')
export class ProductsResolver {
  constructor(private service: ProductsService) {}

  @Query(of => Product)
  getProducts() {
    return this.service.products;
  }
}

@Resolver('User')
export class UsersResolver {
  constructor(private service: ProductsService) {}

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }) {
    return this.service.findUserById(reference.id);
  }
}