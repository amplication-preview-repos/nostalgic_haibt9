import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CurriculumModuleTitle } from "../curriculumModule/CurriculumModuleTitle";

export const DegreeSpecialtyCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="curriculumModules"
          reference="CurriculumModule"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CurriculumModuleTitle} />
        </ReferenceArrayInput>
        <TextInput label="Description" multiline source="description" />
        <TextInput
          label="LanguageOfInstruction"
          source="languageOfInstruction"
        />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
