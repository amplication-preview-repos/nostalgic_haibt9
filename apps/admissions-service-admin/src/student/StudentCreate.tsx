import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { DocumentTitle } from "../document/DocumentTitle";
import { InquiryTitle } from "../inquiry/InquiryTitle";

export const StudentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="documents"
          reference="Document"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DocumentTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="FirstName" source="firstName" />
        <ReferenceArrayInput
          source="inquiries"
          reference="Inquiry"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InquiryTitle} />
        </ReferenceArrayInput>
        <TextInput label="LastName" source="lastName" />
        <TextInput label="Password" source="password" />
      </SimpleForm>
    </Create>
  );
};
