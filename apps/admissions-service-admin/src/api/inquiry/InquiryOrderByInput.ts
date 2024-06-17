import { SortOrder } from "../../util/SortOrder";

export type InquiryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  question?: SortOrder;
  studentId?: SortOrder;
  updatedAt?: SortOrder;
};
