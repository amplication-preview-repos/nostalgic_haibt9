import { CurriculumModule as TCurriculumModule } from "../api/curriculumModule/CurriculumModule";

export const CURRICULUMMODULE_TITLE_FIELD = "name";

export const CurriculumModuleTitle = (record: TCurriculumModule): string => {
  return record.name?.toString() || String(record.id);
};
