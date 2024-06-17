import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type InquiryWhereInput = {
  id?: StringFilter;
  question?: StringNullableFilter;
  student?: StudentWhereUniqueInput;
};
