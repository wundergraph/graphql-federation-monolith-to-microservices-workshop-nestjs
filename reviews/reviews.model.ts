import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Review {
  @Field()
  content: string;

  @Field()
  productName: string;

  @Field()
  rating: number;
}

@ObjectType()
export class User {
  @Field()
  id: number;

  @Field()
  reviews: Review[] | null;
}

