import { DegreeSpecialtyWhereUniqueInput } from "../degreeSpecialty/DegreeSpecialtyWhereUniqueInput";

export type CurriculumModuleCreateInput = {
  degreeSpecialty?: DegreeSpecialtyWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
};
