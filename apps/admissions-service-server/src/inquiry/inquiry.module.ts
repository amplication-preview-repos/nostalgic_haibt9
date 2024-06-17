import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InquiryModuleBase } from "./base/inquiry.module.base";
import { InquiryService } from "./inquiry.service";
import { InquiryController } from "./inquiry.controller";
import { InquiryResolver } from "./inquiry.resolver";

@Module({
  imports: [InquiryModuleBase, forwardRef(() => AuthModule)],
  controllers: [InquiryController],
  providers: [InquiryService, InquiryResolver],
  exports: [InquiryService],
})
export class InquiryModule {}
