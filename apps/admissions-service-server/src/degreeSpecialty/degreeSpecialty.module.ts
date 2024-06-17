import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DegreeSpecialtyModuleBase } from "./base/degreeSpecialty.module.base";
import { DegreeSpecialtyService } from "./degreeSpecialty.service";
import { DegreeSpecialtyController } from "./degreeSpecialty.controller";
import { DegreeSpecialtyResolver } from "./degreeSpecialty.resolver";

@Module({
  imports: [DegreeSpecialtyModuleBase, forwardRef(() => AuthModule)],
  controllers: [DegreeSpecialtyController],
  providers: [DegreeSpecialtyService, DegreeSpecialtyResolver],
  exports: [DegreeSpecialtyService],
})
export class DegreeSpecialtyModule {}
