/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WishlitstWhereInput } from "./WishlitstWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WishlitstListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WishlitstWhereInput,
  })
  @ValidateNested()
  @Type(() => WishlitstWhereInput)
  @IsOptional()
  @Field(() => WishlitstWhereInput, {
    nullable: true,
  })
  every?: WishlitstWhereInput;

  @ApiProperty({
    required: false,
    type: () => WishlitstWhereInput,
  })
  @ValidateNested()
  @Type(() => WishlitstWhereInput)
  @IsOptional()
  @Field(() => WishlitstWhereInput, {
    nullable: true,
  })
  some?: WishlitstWhereInput;

  @ApiProperty({
    required: false,
    type: () => WishlitstWhereInput,
  })
  @ValidateNested()
  @Type(() => WishlitstWhereInput)
  @IsOptional()
  @Field(() => WishlitstWhereInput, {
    nullable: true,
  })
  none?: WishlitstWhereInput;
}
export { WishlitstListRelationFilter as WishlitstListRelationFilter };
