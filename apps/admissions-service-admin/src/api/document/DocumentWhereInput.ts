import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type DocumentWhereInput = {
  file?: JsonFilter;
  id?: StringFilter;
  student?: StudentWhereUniqueInput;
};
