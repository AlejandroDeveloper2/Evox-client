import React from "react";

import { useApp, useCountdown } from "../../hooks";

import {
  InvitationLink,
  Welcome,
  JoinChannelSection,
  ServiceCard,
  Loader,
} from "../../components";

import {
  ImageEvoxMarketing,
  ImageEvoxFunds,
  ImageEvoxAcademy,
  ImageEvoxMAM,
  ImageEvoxMentory,
  ImageEvoxMarkets,
  ImageEvoxSyntetics,
  CardImage,
} from "../../assets";

const UserDashboard = (): JSX.Element => {
  const { timerValues } = useCountdown();
  const { setLoader, setIsValidating, isValidating } = useApp();

  React.useEffect(() => {
    setIsValidating(true);
    setLoader({ loading: true, message: "Loading..." });
    setTimeout(() => {
      setIsValidating(false);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-start pb-10 h-full gap-10">
      {/* <div className="w-full bg-lightBlue dark:bg-purple h-[10rem]"></div> */}
      {timerValues[0] === 0 ? (
        <>
          {isValidating ? (
            <Loader />
          ) : (
            <>
              <section className="w-full relative flex flex-col lg:grid lg:grid-cols-3 justify-center items-center gap-5 lg:flex-row">
                <h1 className=" lg:text-[30px] text-[24px] lg:hidden font-montserrat text-center text-darkBlue dark:text-white font-normal">
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
                  <ServiceCard
                    to="/"
                    serviceImage={ImageEvoxFunds}
                    alt="Evox Funds"
                  />
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
              <JoinChannelSection />
              <section className="flex flex-col gap-10 items-center justify-center px-10 w-full">
                <div className="block rounded-[20px] shadow-lg overflow-hidden">
                  <img
                    src={CardImage}
                    alt="Evox Academy"
                    className="object-cover w-full h-full"
                  />
                </div>
              </section>
            </>
          )}
        </>
      ) : (
        <>
          <Welcome />
          <InvitationLink />
        </>
      )}
    </div>
  );
};

export default UserDashboard;
