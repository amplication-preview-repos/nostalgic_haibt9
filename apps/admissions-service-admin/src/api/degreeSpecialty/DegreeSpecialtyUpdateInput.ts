import { CurriculumModuleUpdateManyWithoutDegreeSpecialtiesInput } from "./CurriculumModuleUpdateManyWithoutDegreeSpecialtiesInput";

export type DegreeSpecialtyUpdateInput = {
  curriculumModules?: CurriculumModuleUpdateManyWithoutDegreeSpecialtiesInput;
  description?: string | null;
  languageOfInstruction?: string | null;
  name?: string | null;
};
