import { FormikValues } from "formik";

import { fields, buttons, getInitialvalues } from "./constans";
import { validationSchema } from "./validationSchema";

import {
  CustomForm,
  CustomInputFile,
  EditProfileAvatar,
  Loader,
} from "../../components";
import { useApp, useAuth, useUserProfile } from "../../hooks";

const UserProfile = (): JSX.Element => {
  const { editUserProfile } = useUserProfile();
  const { loader } = useApp();
  const { auth } = useAuth();

  return (
    <div className="w-full bg-lightGray dark:bg-darkGray flex justify-center items-center flex-col gap-5 pb-6 md:pb-[60px] relative">
      <EditProfileAvatar />
      {loader.loading ? <Loader /> : <CustomInputFile />}
      <CustomForm
        formTitle=""
        fields={fields}
        buttons={buttons}
        initialValues={getInitialvalues(auth)}
        validationSchema={validationSchema}
        cols="2"
        form="profile"
        action={(values: FormikValues) => editUserProfile(values)}
      />
    </div>
  );
};

export default UserProfile;
