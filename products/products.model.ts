import { Directive, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field()
  upc: string;

  @Field()
  rating: number;
}

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field()
  id: number;

  @Field()
  basket: Product[];
}