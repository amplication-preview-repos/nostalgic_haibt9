import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DegreeSpecialtyService } from "./degreeSpecialty.service";
import { DegreeSpecialtyControllerBase } from "./base/degreeSpecialty.controller.base";

@swagger.ApiTags("degreeSpecialties")
@common.Controller("degreeSpecialties")
export class DegreeSpecialtyController extends DegreeSpecialtyControllerBase {
  constructor(
    protected readonly service: DegreeSpecialtyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
