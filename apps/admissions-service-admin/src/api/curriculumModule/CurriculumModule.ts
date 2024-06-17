import { DegreeSpecialty } from "../degreeSpecialty/DegreeSpecialty";

export type CurriculumModule = {
  createdAt: Date;
  degreeSpecialty?: DegreeSpecialty | null;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
