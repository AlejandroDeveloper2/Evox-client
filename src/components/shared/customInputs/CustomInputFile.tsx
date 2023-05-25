import { useUserProfile } from "../../../hooks";

const CustomInputFile = (): JSX.Element => {
  const { uploadProfilePhoto } = useUserProfile();

  return (
    <div
      className="flex flex-col  justify-center w-full md:w-1/2 items-start border-solid border-primary-color
    border-[1px] rounded-[10px] overflow-hidden p-3 gap-2 dark:bg-mediumGray bg-white
    hover:border-darkGray dark:hover:border-primary-color"
    >
      <label
        className={`text-black text-opacity-40 text-left font-poppins font-semibold`}
      >
        Subir foto de perfil
      </label>
      <div className="w-full flex flex-row justify-between items-center">
        <input
          type="file"
          placeholder="Choose a profile photo"
          name="profilePhoto"
          className={`border-none outline-none  w-full text-[14px] font-poppins  
            dark:bg-mediumGray bg-white dark:placeholder:text-primary-color 
            dark:placeholder:text-opacity-60  dark:text-white`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            uploadProfilePhoto(e);
          }}
        />
      </div>
    </div>
  );
};

export default CustomInputFile;
