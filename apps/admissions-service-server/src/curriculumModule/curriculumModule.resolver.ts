import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CurriculumModuleResolverBase } from "./base/curriculumModule.resolver.base";
import { CurriculumModule } from "./base/CurriculumModule";
import { CurriculumModuleService } from "./curriculumModule.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CurriculumModule)
export class CurriculumModuleResolver extends CurriculumModuleResolverBase {
  constructor(
    protected readonly service: CurriculumModuleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
