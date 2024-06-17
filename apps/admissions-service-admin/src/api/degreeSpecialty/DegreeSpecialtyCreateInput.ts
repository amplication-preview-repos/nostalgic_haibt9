import { CurriculumModuleCreateNestedManyWithoutDegreeSpecialtiesInput } from "./CurriculumModuleCreateNestedManyWithoutDegreeSpecialtiesInput";

export type DegreeSpecialtyCreateInput = {
  curriculumModules?: CurriculumModuleCreateNestedManyWithoutDegreeSpecialtiesInput;
  description?: string | null;
  languageOfInstruction?: string | null;
  name?: string | null;
};
