import { InputJsonValue } from "../../types";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type DocumentUpdateInput = {
  file?: InputJsonValue;
  student?: StudentWhereUniqueInput | null;
};
