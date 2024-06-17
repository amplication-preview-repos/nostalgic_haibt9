import { DocumentUpdateManyWithoutStudentsInput } from "./DocumentUpdateManyWithoutStudentsInput";
import { InquiryUpdateManyWithoutStudentsInput } from "./InquiryUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  documents?: DocumentUpdateManyWithoutStudentsInput;
  email?: string | null;
  firstName?: string | null;
  inquiries?: InquiryUpdateManyWithoutStudentsInput;
  lastName?: string | null;
  password?: string | null;
};
