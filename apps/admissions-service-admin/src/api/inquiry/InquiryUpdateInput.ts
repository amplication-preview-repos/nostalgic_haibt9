import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type InquiryUpdateInput = {
  question?: string | null;
  student?: StudentWhereUniqueInput | null;
};
