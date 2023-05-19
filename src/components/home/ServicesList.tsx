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
    <section className="w-full relative flex flex-col lg:grid md:flex-wrap lg:grid-cols-3 lg:justify-items-center justify-center items-center gap-5 px-10">
      <h1 className="text-[24px] md:text-[30px] lg:hidden font-montserrat text-center text-darkBlue dark:text-white font-normal">
        How would you feel if you had{" "}
        <span className="text-[24px] md:text-[30px] font-montserrat font-bold">
          {" "}
          more control over your money?{" "}
        </span>
      </h1>
      <div className="flex gap-3 justify-center lg:flex-col lg:w-auto">
        <ServiceCard
          to="/"
          serviceImage={ImageEvoxMarketing}
          alt="Evox Marketing"
        />
        <ServiceCard to="/" serviceImage={ImageEvoxFunds} alt="Evox Funds" />
      </div>
      <div className="flex lg:flex-col gap-3 justify-center">
        <h1 className=" hidden lg:block md:text-[30px] text-[24px] font-montserrat text-center text-darkBlue dark:text-white font-normal mb-10">
          How would you feel if you had{" "}
          <span className="text-[24px] md:text-[30px] font-montserrat font-bold">
            {" "}
            more control over your money?{" "}
          </span>
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-3 md:flex-nowrap md:flex-row w-auto">
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
      <div className="flex gap-3 justify-center lg:flex-col lg:w-auto">
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
