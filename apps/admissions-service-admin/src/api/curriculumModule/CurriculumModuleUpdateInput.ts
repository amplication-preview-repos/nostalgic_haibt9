import { DegreeSpecialtyWhereUniqueInput } from "../degreeSpecialty/DegreeSpecialtyWhereUniqueInput";

export type CurriculumModuleUpdateInput = {
  degreeSpecialty?: DegreeSpecialtyWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
};
