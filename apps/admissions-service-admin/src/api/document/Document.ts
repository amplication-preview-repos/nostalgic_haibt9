import { JsonValue } from "type-fest";
import { Student } from "../student/Student";

export type Document = {
  createdAt: Date;
  file: JsonValue;
  id: string;
  student?: Student | null;
  updatedAt: Date;
};
