import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useApp, useCountdown } from "../../hooks";

import {
  InvitationLink,
  Welcome,
  JoinChannelSection,
  Loader,
  ServicesList,
  InfoCard,
  AutomaticSystemsSection,
} from "../../components";

import {
  EvoxAcademyImage1,
  EvoxAcademyLogo,
  HomeIllustration,
  HomeIllustration2,
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
    <div className="w-full flex flex-col justify-center items-start py-10 h-full gap-10">
      {/* <div className="w-full bg-lightBlue dark:bg-purple h-[10rem]"></div> */}
      {timerValues[0] === 0 ? (
        <>
          {isValidating ? (
            <Loader />
          ) : (
            <>
              <ServicesList />
              <JoinChannelSection />
              <section className="flex flex-col gap-10 items-center justify-center px-10 w-full">
                <InfoCard style="bg-gradient-to-r from-blue via-purple to-lightBlue dark:to-purple dark:from-white">
                  <div className="flex flex-row gap-10 justify-center items-center">
                    <div className=" flex flex-col gap-10 items-start justify-center">
                      <img src={EvoxAcademyLogo} alt="Evox academy Logo" />
                      <h3 className="text-white font-medium font-montserrat lg:text-[30px] text-[24] w-3/5">
                        <span className="text-white font-extrabold">
                          + 500 Hours
                        </span>{" "}
                        of pre-recorded trading classes
                      </h3>
                      <Link
                        to="#"
                        className="text-white lg:text-[20px] text-[16px] font-montserrat font-bold flex items-center justify-center gap-5"
                      >
                        Find out more <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                    <div className="">
                      <img src={EvoxAcademyImage1} alt="Evox academy Logo" />
                    </div>
                  </div>
                </InfoCard>
              </section>
              <section className="flex flex-col gap-10 items-center justify-center px-10 w-full">
                <InfoCard style="bg-violet dark:bg-blue">
                  <div
                    className="flex flex-row flex-wrap lg:gap-20 items-center lg:justify-start 
                  justify-center gap-5"
                  >
                    <div className="flex flex-col gap-1 lg:items-start items-center">
                      <h2 className="text-white font-medium font-montserrat lg:text-[30px] text-[24]">
                        Total Directs
                      </h2>
                      <span className="text-white font-extrabold font-poppins lg:text-[45px] text-[30px]">
                        13
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 lg:items-start items-center">
                      <h2 className="text-white font-medium font-montserrat lg:text-[30px] text-[24]">
                        Total Customers
                      </h2>
                      <span className="text-white font-extrabold font-poppins lg:text-[45px] text-[30px]">
                        42
                      </span>
                    </div>
                    <img
                      src={HomeIllustration}
                      alt="Evox illustration"
                      className="object-contain"
                    />
                  </div>
                  <Link
                    to="#"
                    className="text-white lg:text-[20px] text-[16px] font-montserrat font-bold flex items-center justify-center gap-5"
                  >
                    See more <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </InfoCard>
                <InfoCard style="bg-blue dark:bg-purple">
                  <div
                    className="w-full flex flex-row flex-wrap lg:gap-20 items-center lg:justify-between 
                    justify-center gap-5"
                  >
                    <div className="flex flex-col gap-1 lg:items-start items-center">
                      <h2 className="text-white font-medium font-montserrat lg:text-[30px] text-[24]">
                        Total Earnings
                      </h2>
                      <span className="text-white font-extrabold font-poppins lg:text-[45px] text-[30px]">
                        850 USDT
                      </span>
                      <h2 className="text-white font-medium font-montserrat lg:text-[24px] text-[20px]">
                        +150 this week
                      </h2>
                    </div>
                    <img
                      src={HomeIllustration2}
                      alt="Evox illustration"
                      className="object-contain"
                    />
                  </div>
                  <Link
                    to="#"
                    className="text-white lg:text-[20px] text-[16px] font-montserrat font-bold flex items-center justify-center gap-5"
                  >
                    See full report <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </InfoCard>
              </section>
              <AutomaticSystemsSection />
              <InvitationLink />
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
