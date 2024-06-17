import { CurriculumModule } from "../curriculumModule/CurriculumModule";

export type DegreeSpecialty = {
  createdAt: Date;
  curriculumModules?: Array<CurriculumModule>;
  description: string | null;
  id: string;
  languageOfInstruction: string | null;
  name: string | null;
  updatedAt: Date;
};
