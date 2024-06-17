import { Student } from "../student/Student";

export type Inquiry = {
  createdAt: Date;
  id: string;
  question: string | null;
  student?: Student | null;
  updatedAt: Date;
};
