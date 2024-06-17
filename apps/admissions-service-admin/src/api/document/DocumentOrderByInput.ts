import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  createdAt?: SortOrder;
  file?: SortOrder;
  id?: SortOrder;
  studentId?: SortOrder;
  updatedAt?: SortOrder;
};
