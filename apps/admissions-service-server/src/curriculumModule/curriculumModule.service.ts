import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CurriculumModuleServiceBase } from "./base/curriculumModule.service.base";

@Injectable()
export class CurriculumModuleService extends CurriculumModuleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
