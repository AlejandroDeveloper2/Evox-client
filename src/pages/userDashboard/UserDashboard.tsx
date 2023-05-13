import ImageEvoxMarketing from "../../assets/image-evox-marketing.png";
import ImageEvoxFunds from "../../assets/image-evox-funds.png";
import ImageEvoxAcademy from "../../assets/image-evox-academy.png";
import ImageEvoxMAM from "../../assets/image-evox-MAM.png";
import ImageEvoxMentory from "../../assets/image-evox-mentory.png";
import ImageEvoxMarkets from "../../assets/image-evox-markets.png";
import ImageEvoxSyntetics from "../../assets/image-evox-syntetics.png";
import HomeImage1 from "../../assets/home-image-1.png";
import CardImage from "../../assets/image-card.png";

import { CustomButton } from "../../components";

const UserDashboard = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col justify-center items-start pb-5 h-auto gap-10">
      <div className="w-[95%] bg-lightBlue dark:bg-purple h-[10rem]"></div>
      <section className="w-full relative flex flex-col lg:grid lg:grid-cols-3 justify-center items-center gap-5 lg:flex-row">
        <h1 className=" lg:text-[30px] text-[24px] lg:hidden font-montserrat text-center text-darkBlue dark:text-white font-normal">
          How would you feel if you had{" "}
          <span className="text-[24px] lg:text-[30px] font-montserrat font-bold">
            {" "}
            more control over your money?{" "}
          </span>
        </h1>
        <div className="w-full flex gap-3 justify-center px-10 lg:flex-col lg:w-auto">
          <div className="w-[10rem] h-[18rem] rounded-[20px] overflow-hidden">
            <img
              src={ImageEvoxMarketing}
              alt="Evox Marketing"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[10rem] h-[18rem] rounded-[20px] overflow-hidden">
            <img
              src={ImageEvoxFunds}
              alt="Evox Funds"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full flex flex-wrap lg:flex-col gap-3 justify-center lg:w-full px-10 lg:px-0">
          <h1 className=" hidden lg:block lg:text-[30px] text-[24px] font-montserrat text-center text-darkBlue dark:text-white font-normal">
            How would you feel if you had{" "}
            <span className="text-[24px] lg:text-[30px] font-montserrat font-bold">
              {" "}
              more control over your money?{" "}
            </span>
          </h1>
          <div className="w-full grid grid-cols-2 auto-cols-max lg:grid-cols-3  gap-10 lg:gap-[10rem] justify-items-center">
            <div className="w-[10rem] h-[18rem] rounded-[20px] overflow-hidden">
              <img
                src={ImageEvoxAcademy}
                alt="Evox Academy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[10rem] h-[18rem] rounded-[20px] lg:mt-20 overflow-hidden">
              <img
                src={ImageEvoxMAM}
                alt="Evox MAM Accounts"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[10rem] h-[18rem] rounded-[20px] lg:w-[10rem] overflow-hidden">
              <img
                src={ImageEvoxMentory}
                alt="Evox Mentory"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex gap-3 justify-center lg:absolute lg:top-0 lg:flex-col lg:right-10 lg:w-auto">
          <div className="w-[10rem] h-[18rem] rounded-[20px] overflow-hidden">
            <img
              src={ImageEvoxMarkets}
              alt="Evox Markets"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[10rem] h-[18rem] rounded-[20px] overflow-hidden">
            <img
              src={ImageEvoxSyntetics}
              alt="Evox Syntetics"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col  gap-4 items-center justify-center lg:flex-row px-10">
        <div className="w-full flex flex-col gap-4 items-center lg:items-start justify-center">
          <h1
            className="lg:text-[32px] text-[24px] text-center lg:text-left font-montserrat 
          text-darkBlue dark:text-white font-extrabold flex flex-col gap-2"
          >
            Live Trading
            <span className="text-[20px] lg:text-[24px] font-montserrat font-medium">
              Trade with trading professionals
            </span>
          </h1>
          <CustomButton
            type="button"
            label="Join Channel"
            theme={{
              bg: "bg-blue dark:bg-purple w-full lg:w-1/3",
              color: "text-white",
            }}
          />
        </div>
        <img src={HomeImage1} alt="Live Trading" />
      </section>

      <section className="flex flex-col gap-10 items-center justify-center px-10 w-full">
        <div className="block rounded-[20px] shadow-lg overflow-hidden">
          <img
            src={CardImage}
            alt="Evox Academy"
            className="object-cover w-full h-full"
          />
        </div>
      </section>
    </div>
  );
};

export default UserDashboard;
