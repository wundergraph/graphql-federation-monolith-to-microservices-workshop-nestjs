import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field()
  upc: string;

  @Field()
  rating: number;
}

@ObjectType()
export class User {
  @Field()
  id: number;

  @Field()
  basket: Product[];
}