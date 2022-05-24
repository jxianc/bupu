import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Bp {
  @Field(() => Int)
  id: number

  @Field(() => Int)
  bp: number
}
