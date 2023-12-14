import { Resolver, ResolveReference } from '@nestjs/graphql';
import { ReviewsService } from './reviews.service';

@Resolver('User')
export class UsersResolver {
  constructor(private service: ReviewsService) {}

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }) {
    return this.service.findUserById(reference.id);
  }
}