import { ServiceCard } from "..";

import {
  ImageEvoxAcademy,
  ImageEvoxFunds,
  ImageEvoxMAM,
  ImageEvoxMarketing,
  ImageEvoxMarkets,
  ImageEvoxMentory,
  ImageEvoxSyntetics,
} from "../../assets";

const ServicesList = (): JSX.Element => {
  return (
    <section className="w-full relative flex flex-col lg:grid lg:grid-cols-3 justify-center items-center gap-5 lg:flex-row">
      <h1 className=" lg:text-[30px] text-[24px] lg:hidden font-montserrat text-center text-darkBlue dark:text-white font-normal px-10">
        How would you feel if you had{" "}
        <span className="text-[24px] lg:text-[30px] font-montserrat font-bold">
          {" "}
          more control over your money?{" "}
        </span>
      </h1>
      <div className="w-full flex gap-3 justify-center px-10 lg:flex-col lg:w-auto">
        <ServiceCard
          to="/"
          serviceImage={ImageEvoxMarketing}
          alt="Evox Marketing"
        />
        <ServiceCard to="/" serviceImage={ImageEvoxFunds} alt="Evox Funds" />
      </div>
      <div className="w-full flex flex-wrap lg:flex-col gap-3 justify-center lg:w-full px-10 lg:px-0">
        <h1 className=" hidden lg:block lg:text-[30px] text-[24px] font-montserrat text-center text-darkBlue dark:text-white font-normal mb-10">
          How would you feel if you had{" "}
          <span className="text-[24px] lg:text-[30px] font-montserrat font-bold">
            {" "}
            more control over your money?{" "}
          </span>
        </h1>
        <div className="w-full grid grid-cols-2 auto-cols-max lg:grid-cols-3  gap-10 lg:gap-[10rem] justify-items-center">
          <ServiceCard
            to="/"
            serviceImage={ImageEvoxAcademy}
            alt="Evox Academy"
          />
          <ServiceCard
            to="/"
            serviceImage={ImageEvoxMAM}
            alt="Evox MAM Accounts"
          />
          <ServiceCard
            to="/"
            serviceImage={ImageEvoxMentory}
            alt="Evox Mentory"
          />
        </div>
      </div>
      <div className="w-full flex gap-3 justify-center lg:absolute lg:top-0 lg:flex-col lg:right-10 lg:w-auto">
        <ServiceCard
          to="/"
          serviceImage={ImageEvoxMarkets}
          alt="Evox Markets"
        />
        <ServiceCard
          to="/"
          serviceImage={ImageEvoxSyntetics}
          alt="Evox Syntetics"
        />
      </div>
    </section>
  );
};

export default ServicesList;
