import { fields, buttons, getInitialvalues } from "./constans";
import { validationSchema } from "./validationSchema";

import { CustomForm, EditProfileAvatar, Spinner } from "../../components";
import { useApp, useAuth, useUserProfile } from "../../hooks";

const UserProfile = (): JSX.Element => {
  const { editUserProfile } = useUserProfile();
  const { loading } = useApp();
  const { auth } = useAuth();

  return (
    <div className="w-full bg-lightGray dark:bg-darkGray flex justify-center items-center flex-col gap-5 px-5 md:px-0 py-6 md:pb-[60px] relative">
      {loading.visible ? (
        <Spinner color="text-darkBlue" />
      ) : (
        <EditProfileAvatar />
      )}
      <CustomForm
        formTitle=""
        fields={fields}
        buttons={buttons}
        initialValues={getInitialvalues(auth)}
        validationSchema={validationSchema}
        cols="2"
        form="profile"
        action={editUserProfile}
      />
    </div>
  );
};

export default UserProfile;
