import { CurriculumModuleWhereInput } from "./CurriculumModuleWhereInput";
import { CurriculumModuleOrderByInput } from "./CurriculumModuleOrderByInput";

export type CurriculumModuleFindManyArgs = {
  where?: CurriculumModuleWhereInput;
  orderBy?: Array<CurriculumModuleOrderByInput>;
  skip?: number;
  take?: number;
};
