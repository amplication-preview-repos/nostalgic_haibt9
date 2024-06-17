import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DegreeSpecialtyResolverBase } from "./base/degreeSpecialty.resolver.base";
import { DegreeSpecialty } from "./base/DegreeSpecialty";
import { DegreeSpecialtyService } from "./degreeSpecialty.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DegreeSpecialty)
export class DegreeSpecialtyResolver extends DegreeSpecialtyResolverBase {
  constructor(
    protected readonly service: DegreeSpecialtyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
