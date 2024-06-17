import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { DegreeSpecialtyTitle } from "../degreeSpecialty/DegreeSpecialtyTitle";

export const CurriculumModuleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
