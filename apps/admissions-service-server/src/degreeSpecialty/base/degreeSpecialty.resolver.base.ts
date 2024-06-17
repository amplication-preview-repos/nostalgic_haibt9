/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { DegreeSpecialty } from "./DegreeSpecialty";
import { DegreeSpecialtyCountArgs } from "./DegreeSpecialtyCountArgs";
import { DegreeSpecialtyFindManyArgs } from "./DegreeSpecialtyFindManyArgs";
import { DegreeSpecialtyFindUniqueArgs } from "./DegreeSpecialtyFindUniqueArgs";
import { CreateDegreeSpecialtyArgs } from "./CreateDegreeSpecialtyArgs";
import { UpdateDegreeSpecialtyArgs } from "./UpdateDegreeSpecialtyArgs";
import { DeleteDegreeSpecialtyArgs } from "./DeleteDegreeSpecialtyArgs";
import { CurriculumModuleFindManyArgs } from "../../curriculumModule/base/CurriculumModuleFindManyArgs";
import { CurriculumModule } from "../../curriculumModule/base/CurriculumModule";
import { DegreeSpecialtyService } from "../degreeSpecialty.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DegreeSpecialty)
export class DegreeSpecialtyResolverBase {
  constructor(
    protected readonly service: DegreeSpecialtyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DegreeSpecialty",
    action: "read",
    possession: "any",
  })
  async _degreeSpecialtiesMeta(
    @graphql.Args() args: DegreeSpecialtyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DegreeSpecialty])
  @nestAccessControl.UseRoles({
    resource: "DegreeSpecialty",
    action: "read",
    possession: "any",
  })
  async degreeSpecialties(
    @graphql.Args() args: DegreeSpecialtyFindManyArgs
  ): Promise<DegreeSpecialty[]> {
    return this.service.degreeSpecialties(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DegreeSpecialty, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DegreeSpecialty",
    action: "read",
    possession: "own",
  })
  async degreeSpecialty(
    @graphql.Args() args: DegreeSpecialtyFindUniqueArgs
  ): Promise<DegreeSpecialty | null> {
    const result = await this.service.degreeSpecialty(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DegreeSpecialty)
  @nestAccessControl.UseRoles({
    resource: "DegreeSpecialty",
    action: "create",
    possession: "any",
  })
  async createDegreeSpecialty(
    @graphql.Args() args: CreateDegreeSpecialtyArgs
  ): Promise<DegreeSpecialty> {
    return await this.service.createDegreeSpecialty({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DegreeSpecialty)
  @nestAccessControl.UseRoles({
    resource: "DegreeSpecialty",
    action: "update",
    possession: "any",
  })
  async updateDegreeSpecialty(
    @graphql.Args() args: UpdateDegreeSpecialtyArgs
  ): Promise<DegreeSpecialty | null> {
    try {
      return await this.service.updateDegreeSpecialty({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => DegreeSpecialty)
  @nestAccessControl.UseRoles({
    resource: "DegreeSpecialty",
    action: "delete",
    possession: "any",
  })
  async deleteDegreeSpecialty(
    @graphql.Args() args: DeleteDegreeSpecialtyArgs
  ): Promise<DegreeSpecialty | null> {
    try {
      return await this.service.deleteDegreeSpecialty(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [CurriculumModule], { name: "curriculumModules" })
  @nestAccessControl.UseRoles({
    resource: "CurriculumModule",
    action: "read",
    possession: "any",
  })
  async findCurriculumModules(
    @graphql.Parent() parent: DegreeSpecialty,
    @graphql.Args() args: CurriculumModuleFindManyArgs
  ): Promise<CurriculumModule[]> {
    const results = await this.service.findCurriculumModules(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
