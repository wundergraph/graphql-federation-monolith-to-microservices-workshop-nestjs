import { Injectable } from '@nestjs/common';
import { Review, User } from './reviews.model';

@Injectable()
export class ReviewsService {
  private ashReviewOne: Review = { content: "wow! 20hp!", productName: 'potion', rating: 5 };
  private ashReviewTwo: Review = { content: "now I can catch more friends!", productName: 'pokeball', rating: 5 };
  private garyReviewOne: Review = { content: "20hp? Pathetic.", productName: 'potion', rating: 1 };

  private users: User[] = [
    { id: 1, reviews: [this.ashReviewOne, this.ashReviewTwo] },
    { id: 2, reviews: [this.garyReviewOne] },
    { id: 3, reviews: null },
  ];

  findUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}