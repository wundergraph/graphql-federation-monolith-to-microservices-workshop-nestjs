import { Args, Query, Resolver } from '@nestjs/graphql';
import { ReviewsService } from './reviews.service';
import { User } from './reviews.model';

@Resolver()
export class ReviewsResolver {
  constructor(private usersService: ReviewsService) {}

  @Query(of => User)
  getUser(@Args({ name: 'id' }) id: number) {
    return this.usersService.findById(id);
  }
}