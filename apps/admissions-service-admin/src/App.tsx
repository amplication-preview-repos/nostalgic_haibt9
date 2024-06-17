import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DocumentList } from "./document/DocumentList";
import { DocumentCreate } from "./document/DocumentCreate";
import { DocumentEdit } from "./document/DocumentEdit";
import { DocumentShow } from "./document/DocumentShow";
import { StudentList } from "./student/StudentList";
import { StudentCreate } from "./student/StudentCreate";
import { StudentEdit } from "./student/StudentEdit";
import { StudentShow } from "./student/StudentShow";
import { FaqList } from "./faq/FaqList";
import { FaqCreate } from "./faq/FaqCreate";
import { FaqEdit } from "./faq/FaqEdit";
import { FaqShow } from "./faq/FaqShow";
import { CurriculumModuleList } from "./curriculumModule/CurriculumModuleList";
import { CurriculumModuleCreate } from "./curriculumModule/CurriculumModuleCreate";
import { CurriculumModuleEdit } from "./curriculumModule/CurriculumModuleEdit";
import { CurriculumModuleShow } from "./curriculumModule/CurriculumModuleShow";
import { InquiryList } from "./inquiry/InquiryList";
import { InquiryCreate } from "./inquiry/InquiryCreate";
import { InquiryEdit } from "./inquiry/InquiryEdit";
import { InquiryShow } from "./inquiry/InquiryShow";
import { DegreeSpecialtyList } from "./degreeSpecialty/DegreeSpecialtyList";
import { DegreeSpecialtyCreate } from "./degreeSpecialty/DegreeSpecialtyCreate";
import { DegreeSpecialtyEdit } from "./degreeSpecialty/DegreeSpecialtyEdit";
import { DegreeSpecialtyShow } from "./degreeSpecialty/DegreeSpecialtyShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AdmissionsService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Document"
          list={DocumentList}
          edit={DocumentEdit}
          create={DocumentCreate}
          show={DocumentShow}
        />
        <Resource
          name="Student"
          list={StudentList}
          edit={StudentEdit}
          create={StudentCreate}
          show={StudentShow}
        />
        <Resource
          name="Faq"
          list={FaqList}
          edit={FaqEdit}
          create={FaqCreate}
          show={FaqShow}
        />
        <Resource
          name="CurriculumModule"
          list={CurriculumModuleList}
          edit={CurriculumModuleEdit}
          create={CurriculumModuleCreate}
          show={CurriculumModuleShow}
        />
        <Resource
          name="Inquiry"
          list={InquiryList}
          edit={InquiryEdit}
          create={InquiryCreate}
          show={InquiryShow}
        />
        <Resource
          name="DegreeSpecialty"
          list={DegreeSpecialtyList}
          edit={DegreeSpecialtyEdit}
          create={DegreeSpecialtyCreate}
          show={DegreeSpecialtyShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
