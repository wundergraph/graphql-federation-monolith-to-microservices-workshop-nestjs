import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field()
  upc: string;

  @Field()
  rating: number;
}