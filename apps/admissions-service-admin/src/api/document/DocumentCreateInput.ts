import { InputJsonValue } from "../../types";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type DocumentCreateInput = {
  file?: InputJsonValue;
  student?: StudentWhereUniqueInput | null;
};
