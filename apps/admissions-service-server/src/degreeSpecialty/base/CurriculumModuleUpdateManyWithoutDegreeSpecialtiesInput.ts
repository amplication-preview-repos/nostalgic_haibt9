/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CurriculumModuleWhereUniqueInput } from "../../curriculumModule/base/CurriculumModuleWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CurriculumModuleUpdateManyWithoutDegreeSpecialtiesInput {
  @Field(() => [CurriculumModuleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CurriculumModuleWhereUniqueInput],
  })
  connect?: Array<CurriculumModuleWhereUniqueInput>;

  @Field(() => [CurriculumModuleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CurriculumModuleWhereUniqueInput],
  })
  disconnect?: Array<CurriculumModuleWhereUniqueInput>;

  @Field(() => [CurriculumModuleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CurriculumModuleWhereUniqueInput],
  })
  set?: Array<CurriculumModuleWhereUniqueInput>;
}

export { CurriculumModuleUpdateManyWithoutDegreeSpecialtiesInput as CurriculumModuleUpdateManyWithoutDegreeSpecialtiesInput };
