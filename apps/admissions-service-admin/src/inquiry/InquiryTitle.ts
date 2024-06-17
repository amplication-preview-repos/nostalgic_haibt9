import { Inquiry as TInquiry } from "../api/inquiry/Inquiry";

export const INQUIRY_TITLE_FIELD = "id";

export const InquiryTitle = (record: TInquiry): string => {
  return record.id?.toString() || String(record.id);
};
