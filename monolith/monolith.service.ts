import { Injectable } from '@nestjs/common';
import { Product, Review, User } from './monolith.model';

@Injectable()
export class MonolithService {
  private pokeball = { upc: 'potion', rating: 5.0 };
  private potion = { upc: 'potion', rating: 3.0 };
  private masterball = { upc: 'masterball', rating: null };
  private ashReviewOne: Review = { content: "wow! 20hp!", productName: 'potion', rating: 5 };
  private ashReviewTwo: Review = { content: "now I can catch more friends!", productName: 'pokeball', rating: 5 };
  private garyReviewOne: Review = { content: "20hp? Pathetic.", productName: 'potion', rating: 1 };

  products: Product[] = [
    this.pokeball,
    this.potion,
    this.masterball,
  ];

  private users: User[] = [
    { id: 1, username: 'AshKetchum', reviews: [this.ashReviewOne, this.ashReviewTwo], basket: [ this.pokeball, this.potion ] },
    { id: 2, username: 'GaryOak', reviews: [this.garyReviewOne], basket: null },
    { id: 3, username: 'ProfessorOak', reviews: [], basket: [this.masterball] },
  ];

  findUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}