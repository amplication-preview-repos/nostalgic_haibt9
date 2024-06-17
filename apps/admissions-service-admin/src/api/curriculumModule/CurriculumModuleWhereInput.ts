import { DegreeSpecialtyWhereUniqueInput } from "../degreeSpecialty/DegreeSpecialtyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CurriculumModuleWhereInput = {
  degreeSpecialty?: DegreeSpecialtyWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
