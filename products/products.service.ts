import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private pokeball = { upc: 'potion', rating: 5.0 };
  private potion = { upc: 'potion', rating: 3.0 };
  private masterball = { upc: 'masterball', rating: null };

  products: Product[] = [
    this.pokeball,
    this.potion,
    this.masterball,
  ];
}