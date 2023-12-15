import { Injectable } from '@nestjs/common';
import { Product, User } from './products.model';

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

  private users: User[] = [
    { id: 1, basket: [ this.pokeball, this.potion ] },
    { id: 2, basket: null },
    { id: 3, basket: [this.masterball] },
  ];

  findUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}