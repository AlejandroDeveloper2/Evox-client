import { FormikValues } from "formik";

import { fields, buttons, initialvalues } from "./constans";
import { validationSchema } from "./validationSchema";

import { Avatar, CustomForm, CustomInputFile, Loader } from "../../components";
import { useApp, useUserProfile } from "../../hooks";

const UserProfile = (): JSX.Element => {
  const { updateUserProfile } = useUserProfile();
  const { loader } = useApp();

  return (
    <div className="w-full bg-white dark:bg-darkGray flex justify-center items-center flex-col gap-5 pb-6 md:pb-[60px] relative">
      <Avatar />
      {loader.loading ? <Loader /> : <CustomInputFile />}
      <CustomForm
        formTitle="Edit Profile"
        fields={fields}
        buttons={buttons}
        initialValues={initialvalues}
        validationSchema={validationSchema}
        cols="2"
        form="profile"
        action={(values: FormikValues) => updateUserProfile(values)}
      />
    </div>
  );
};

export default UserProfile;
