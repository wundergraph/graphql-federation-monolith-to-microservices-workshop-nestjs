import { Args, Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './products.model';

@Resolver()
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query(of => Product)
  getProducts() {
    return this.productsService.products;
  }
}