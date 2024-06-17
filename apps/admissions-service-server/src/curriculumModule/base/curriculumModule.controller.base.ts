/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CurriculumModuleService } from "../curriculumModule.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CurriculumModuleCreateInput } from "./CurriculumModuleCreateInput";
import { CurriculumModule } from "./CurriculumModule";
import { CurriculumModuleFindManyArgs } from "./CurriculumModuleFindManyArgs";
import { CurriculumModuleWhereUniqueInput } from "./CurriculumModuleWhereUniqueInput";
import { CurriculumModuleUpdateInput } from "./CurriculumModuleUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CurriculumModuleControllerBase {
  constructor(
    protected readonly service: CurriculumModuleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CurriculumModule })
  @nestAccessControl.UseRoles({
    resource: "CurriculumModule",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCurriculumModule(
    @common.Body() data: CurriculumModuleCreateInput
  ): Promise<CurriculumModule> {
    return await this.service.createCurriculumModule({
      data: {
        ...data,

        degreeSpecialty: data.degreeSpecialty
          ? {
              connect: data.degreeSpecialty,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        degreeSpecialty: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [CurriculumModule] })
  @ApiNestedQuery(CurriculumModuleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CurriculumModule",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async curriculumModules(
    @common.Req() request: Request
  ): Promise<CurriculumModule[]> {
    const args = plainToClass(CurriculumModuleFindManyArgs, request.query);
    return this.service.curriculumModules({
      ...args,
      select: {
        createdAt: true,

        degreeSpecialty: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CurriculumModule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CurriculumModule",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async curriculumModule(
    @common.Param() params: CurriculumModuleWhereUniqueInput
  ): Promise<CurriculumModule | null> {
    const result = await this.service.curriculumModule({
      where: params,
      select: {
        createdAt: true,

        degreeSpecialty: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CurriculumModule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CurriculumModule",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCurriculumModule(
    @common.Param() params: CurriculumModuleWhereUniqueInput,
    @common.Body() data: CurriculumModuleUpdateInput
  ): Promise<CurriculumModule | null> {
    try {
      return await this.service.updateCurriculumModule({
        where: params,
        data: {
          ...data,

          degreeSpecialty: data.degreeSpecialty
            ? {
                connect: data.degreeSpecialty,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          degreeSpecialty: {
            select: {
              id: true,
            },
          },

          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CurriculumModule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CurriculumModule",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCurriculumModule(
    @common.Param() params: CurriculumModuleWhereUniqueInput
  ): Promise<CurriculumModule | null> {
    try {
      return await this.service.deleteCurriculumModule({
        where: params,
        select: {
          createdAt: true,

          degreeSpecialty: {
            select: {
              id: true,
            },
          },

          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
