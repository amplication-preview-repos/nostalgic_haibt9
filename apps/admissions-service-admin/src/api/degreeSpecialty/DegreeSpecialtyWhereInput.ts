import { CurriculumModuleListRelationFilter } from "../curriculumModule/CurriculumModuleListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DegreeSpecialtyWhereInput = {
  curriculumModules?: CurriculumModuleListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  languageOfInstruction?: StringNullableFilter;
  name?: StringNullableFilter;
};
