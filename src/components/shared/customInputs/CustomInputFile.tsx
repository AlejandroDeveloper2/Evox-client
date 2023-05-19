import { useUserProfile } from "../../../hooks";

const CustomInputFile = (): JSX.Element => {
  const { uploadProfilePhoto } = useUserProfile();

  return (
    <input
      type="file"
      placeholder="Choose a profile photo"
      name="profilePhoto"
      className={`border-none outline-none py-3 px-4 w-full text-[14px] font-poppins  
      dark:bg-mediumGray bg-white dark:placeholder:text-primary-color 
      dark:placeholder:text-opacity-60  dark:text-white`}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        uploadProfilePhoto(e);
      }}
    />
  );
};

export default CustomInputFile;
