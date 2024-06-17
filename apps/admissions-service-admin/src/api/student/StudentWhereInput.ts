import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InquiryListRelationFilter } from "../inquiry/InquiryListRelationFilter";

export type StudentWhereInput = {
  documents?: DocumentListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  inquiries?: InquiryListRelationFilter;
  lastName?: StringNullableFilter;
  password?: StringNullableFilter;
};
