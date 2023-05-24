import { Link } from "react-router-dom";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { InfoCard } from "../..";
import { automatedSystems } from "./constans";

import { AutomatedAccountImage } from "../../../assets";

const AutomaticSystemsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-10  items-center lg:items-start justify-center px-20 w-full">
      <div className="flex flex-col gap-3 items-center lg:items-start justify-center">
        <h1
          className="md:text-[36px] text-[24px] text-center lg:text-left 
        font-poppins text-darkBlue dark:text-white font-extrabold"
        >
          Automated systems
        </h1>
        <p
          className="md:text-[20px] text-[16px] text-center lg:text-left 
          font-poppins text-darkBlue dark:text-white font-medium"
        >
          We connect our clients with the best automated operations!
        </p>
      </div>
      <div className="flex flex-wrap md:grid md:grid-cols-2 gap-5 justify-center items-center md:justify-items-center w-full">
        {automatedSystems.map((item, index) => (
          <InfoCard
            style="bg-white dark:bg-mediumGray w-full gap-5 "
            key={index}
          >
            <div className="flex flex-row gap-5 items-center">
              <img src={AutomatedAccountImage} alt="Evox automated accounts" />
              <p
                className="md:text-[18px] text-[16px] text-left font-poppins 
                text-darkBlue dark:text-white font-medium"
              >
                Autodidact Account{" "}
                <span className="uppercase font-bold"> {item.name} </span>
              </p>
            </div>
            <Link
              to={item.to}
              className="text-white md:text-[16px] text-[14px] font-poppins font-bold 
            flex items-center justify-center gap-5 bg-darkBlue dark:bg-purple py-3 px-10 rounded-xl"
            >
              <FontAwesomeIcon icon={faChartSimple} /> See more
            </Link>
          </InfoCard>
        ))}
      </div>
    </section>
  );
};

export default AutomaticSystemsSection;
