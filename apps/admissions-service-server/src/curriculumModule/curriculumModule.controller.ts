import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CurriculumModuleService } from "./curriculumModule.service";
import { CurriculumModuleControllerBase } from "./base/curriculumModule.controller.base";

@swagger.ApiTags("curriculumModules")
@common.Controller("curriculumModules")
export class CurriculumModuleController extends CurriculumModuleControllerBase {
  constructor(
    protected readonly service: CurriculumModuleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
