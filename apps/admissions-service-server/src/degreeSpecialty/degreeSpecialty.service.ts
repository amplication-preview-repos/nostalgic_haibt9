import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DegreeSpecialtyServiceBase } from "./base/degreeSpecialty.service.base";

@Injectable()
export class DegreeSpecialtyService extends DegreeSpecialtyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
