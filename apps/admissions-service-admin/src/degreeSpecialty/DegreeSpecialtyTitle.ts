import { DegreeSpecialty as TDegreeSpecialty } from "../api/degreeSpecialty/DegreeSpecialty";

export const DEGREESPECIALTY_TITLE_FIELD = "name";

export const DegreeSpecialtyTitle = (record: TDegreeSpecialty): string => {
  return record.name?.toString() || String(record.id);
};
