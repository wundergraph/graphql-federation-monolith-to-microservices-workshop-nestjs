import { Args, Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product, User } from './products.model';


@Resolver()
export class ProductsResolver {
  constructor(private service: ProductsService) {}

  @Query(of => User)
  getUser(@Args({ name: 'id' }) id: number) {
    return this.service.findUserById(id);
  }

  @Query(of => Product)
  getProducts() {
    return this.service.products;
  }
}