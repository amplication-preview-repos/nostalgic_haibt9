import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CurriculumModuleModuleBase } from "./base/curriculumModule.module.base";
import { CurriculumModuleService } from "./curriculumModule.service";
import { CurriculumModuleController } from "./curriculumModule.controller";
import { CurriculumModuleResolver } from "./curriculumModule.resolver";

@Module({
  imports: [CurriculumModuleModuleBase, forwardRef(() => AuthModule)],
  controllers: [CurriculumModuleController],
  providers: [CurriculumModuleService, CurriculumModuleResolver],
  exports: [CurriculumModuleService],
})
export class CurriculumModuleModule {}
