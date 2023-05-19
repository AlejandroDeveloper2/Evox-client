import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUserProfile } from "../../../hooks";

const CustomInputFile = (): JSX.Element => {
  const { uploadProfilePhoto } = useUserProfile();

  return (
    <div className="flex flex-col gap-2 justify-center items-start w-auto transition-all">
      <label
        htmlFor="profilePhoto"
        className=" font-montserrat text-darkGray dark:text-white font-bold"
      >
        Upload profile photo
      </label>
      <div
        className={`flex flex-row justify-center w-full items-center border-solid border-[1px] rounded-[10px] overflow-hidden 
        hover:border-darkGray dark:hover:border-primary-color border-primary-color`}
      >
        <span
          className={`flex justify-center items-center py-3 ps-3 h-full bg-white dark:bg-mediumGray"`}
        >
          <FontAwesomeIcon
            icon={faImage}
            className="text-darkGray dark:text-white"
          />
        </span>
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
      </div>
    </div>
  );
};

export default CustomInputFile;
