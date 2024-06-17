import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { DegreeSpecialtyTitle } from "../degreeSpecialty/DegreeSpecialtyTitle";

export const CurriculumModuleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="degreeSpecialty.id"
          reference="DegreeSpecialty"
          label="DegreeSpecialty"
        >
          <SelectInput optionText={DegreeSpecialtyTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
