import { Document } from "../document/Document";
import { Inquiry } from "../inquiry/Inquiry";

export type Student = {
  createdAt: Date;
  documents?: Array<Document>;
  email: string | null;
  firstName: string | null;
  id: string;
  inquiries?: Array<Inquiry>;
  lastName: string | null;
  password: string | null;
  updatedAt: Date;
};
