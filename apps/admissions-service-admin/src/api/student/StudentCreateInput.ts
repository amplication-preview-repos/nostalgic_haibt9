import { DocumentCreateNestedManyWithoutStudentsInput } from "./DocumentCreateNestedManyWithoutStudentsInput";
import { InquiryCreateNestedManyWithoutStudentsInput } from "./InquiryCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  documents?: DocumentCreateNestedManyWithoutStudentsInput;
  email?: string | null;
  firstName?: string | null;
  inquiries?: InquiryCreateNestedManyWithoutStudentsInput;
  lastName?: string | null;
  password?: string | null;
};
