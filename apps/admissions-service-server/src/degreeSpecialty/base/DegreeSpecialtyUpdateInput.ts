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
import { CurriculumModuleUpdateManyWithoutDegreeSpecialtiesInput } from "./CurriculumModuleUpdateManyWithoutDegreeSpecialtiesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DegreeSpecialtyUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CurriculumModuleUpdateManyWithoutDegreeSpecialtiesInput,
  })
  @ValidateNested()
  @Type(() => CurriculumModuleUpdateManyWithoutDegreeSpecialtiesInput)
  @IsOptional()
  @Field(() => CurriculumModuleUpdateManyWithoutDegreeSpecialtiesInput, {
    nullable: true,
  })
  curriculumModules?: CurriculumModuleUpdateManyWithoutDegreeSpecialtiesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  languageOfInstruction?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}

export { DegreeSpecialtyUpdateInput as DegreeSpecialtyUpdateInput };
