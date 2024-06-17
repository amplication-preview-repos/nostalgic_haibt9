import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type InquiryCreateInput = {
  question?: string | null;
  student?: StudentWhereUniqueInput | null;
};
