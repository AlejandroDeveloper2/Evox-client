import { InfoCardProps } from "../../types";

const InfoCard = (props: InfoCardProps): JSX.Element => {
  return (
    <div
      className={`flex rounded-[20px] shadow-lg overflow-hidden  
      justify-center ${props.style} w-full md:py-5  py-10 px-5 flex-col items-center`}
    >
      {props.children}
    </div>
  );
};

export default InfoCard;
