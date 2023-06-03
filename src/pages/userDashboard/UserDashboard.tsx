import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useCountdown, useEvoxServices, useLoader } from "../../hooks";
import { getUserReferrals, getUserTeam } from "../../services/userReferrals";
import { sortReferralsRecords } from "../../utils";
import useSWR from "swr";

import {
  InvitationLink,
  Welcome,
  JoinChannelSection,
  ServicesList,
  InfoCard,
  AutomaticSystemsSection,
  Spinner,
  LinkBotEvox,
} from "../../components";

import {
  EvoxAcademyImage1,
  EvoxAcademyLogo,
  HomeIllustration,
  HomeIllustration2,
} from "../../assets";

const UserDashboard = (): JSX.Element => {
  const { timerValues } = useCountdown();
  const isLoading = useLoader("Cargando...");
  const { getTeam, getDirectReferrals } = useEvoxServices();
  const token = localStorage.getItem("token") ?? "";
  const { data: referrals } = useSWR(
    "/users/referrals",
    () => getUserReferrals(token),
    {
      onSuccess: (data) => {
        sortReferralsRecords(data);
        getDirectReferrals(data);
      },
    }
  );
  const { data: team } = useSWR(
    "/users/referrals/team",
    () => getUserTeam(token),
    {
      onSuccess: (data) => {
        sortReferralsRecords(data);
        getTeam(data);
      },
    }
  );

  return (
    <div className="w-full flex flex-col justify-center items-center py-10 h-full gap-10">
      {isLoading ? (
        <Spinner color="text-darkBlue" />
      ) : timerValues[0] === 0 ? (
        <>
          <ServicesList />
          <JoinChannelSection />
          <section className="flex flex-col gap-10 items-center justify-center px-5 md:px-20 w-full">
            <InfoCard style="bg-gradient-to-r from-purple via-mediumBlue to-lightBlue dark:to-white dark:from-purple ">
              <div className="flex flex-col md:flex-row gap-10 justify-between  py-5 md:py-10 px-5 items-center relative w-full">
                <div className=" flex flex-col gap-10 items-center md:items-start justify-center">
                  <img src={EvoxAcademyLogo} alt="Evox academy Logo" />
                  <h3 className="text-white font-medium font-poppins md:text-[25px] text-center md:text-left text-[24] md:w-3/5">
                    <span className="text-white font-extrabold">
                      + 500 Horas
                    </span>{" "}
                    de clases de trading pregrabadas
                  </h3>
                  <Link
                    to="/dashboard/evoxAcademy"
                    className="text-white md:text-[20px] text-[16px] font-montserrat font-bold flex items-center justify-center gap-5"
                  >
                    Descubre más <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </div>
                <div className="hidden md:block absolute right-0 bottom-[-2rem]">
                  <img src={EvoxAcademyImage1} alt="Evox academy" />
                </div>
              </div>
            </InfoCard>
          </section>
          <section className="flex flex-col gap-10 items-center justify-center px-5 md:px-20 w-full">
            <InfoCard style="bg-violet dark:bg-blue">
              <div
                className="flex flex-row flex-wrap md:flex-nowrap md:gap-5 items-center lg:justify-start md:justify-center
                    justify-center gap-5"
              >
                <div className="flex flex-col gap-1 md:items-start items-center">
                  <h2 className="text-white font-medium font-poppins md:text-[25px] text-[24]">
                    Total Directos
                  </h2>
                  <span className="text-white font-extrabold font-poppins md:text-[45px] text-[30px]">
                    {referrals?.length}
                  </span>
                </div>
                <div className="flex flex-col gap-1 md:items-start items-center">
                  <h2 className="text-white font-medium font-poppins md:text-[25px] text-[24]">
                    Total Clientes
                  </h2>
                  <span className="text-white font-extrabold font-poppins md:text-[45px] text-[30px]">
                    {team?.length}
                  </span>
                </div>
                <img
                  src={HomeIllustration}
                  alt="Evox illustration"
                  className="object-contain"
                />
              </div>
              <Link
                to="/dashboard/teams"
                className="text-white md:text-[20px] text-[16px] font-montserrat font-bold flex items-center justify-center gap-5"
              >
                Ver más <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </InfoCard>
            <InfoCard style="bg-blue dark:bg-purple">
              <div
                className="w-full flex flex-row flex-wrap md:gap-20 items-center md:justify-between 
                    justify-center gap-5"
              >
                <div className="flex flex-col gap-1 md:items-start items-center">
                  <h2 className="text-white font-medium font-montserrat md:text-[30px] text-[24]">
                    Total ganancias
                  </h2>
                  <span className="text-white font-extrabold font-poppins md:text-[45px] text-[30px]">
                    0 USDT
                  </span>
                  <h2 className="text-white font-medium font-montserrat md:text-[24px] text-[20px]">
                    +150 Esta semana
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
                className="text-white md:text-[20px] text-[16px] font-montserrat font-bold flex items-center justify-center gap-5"
              >
                Ver reporte completo <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </InfoCard>
          </section>
          <AutomaticSystemsSection />
          <InvitationLink />
          {/* <LinkBotEvox /> */}
        </>
      ) : (
        <>
          <Welcome />
          <InvitationLink />
          <LinkBotEvox />
        </>
      )}
    </div>
  );
};

export default UserDashboard;
