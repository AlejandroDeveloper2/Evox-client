import { faChartSimple, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAuth } from "../../hooks";

import { MamAccountsLogo } from "../../assets";

import { CustomButton } from "../../components";

const MAMAccounts = (): JSX.Element => {
  const { auth } = useAuth();

  return (
    <div className="relative flex flex-col pt-20 pb-10 items-center gap-10 px-5  md:px-15">
      <img src={MamAccountsLogo} alt="Logo MAM Accounts Evox" />
      <p className="text-[16px] md:text-[20px] text-darkBlue font-extrabold text-center font-poppins">
        Activa tu cuenta de Trading 100% en automático, en 2 sencillos pasos.
      </p>
      <section className="w-full flex flex-col items-center gap-2">
        <h1 className="text-[16px] md:text-[20px] text-darkBlue font-extrabold text-center font-poppins">
          Paso #1:
        </h1>
        <p className="text-[16px] md:text-[20px] text-darkBlue font-normal text-center font-poppins">
          Regístrate en nuestro Broker Recomendado y haz tu primer depósito.
        </p>
      </section>
      <section className="w-full flex flex-row justify-center items-center gap-5">
        <FontAwesomeIcon
          icon={faChartSimple}
          className="text-[50px] text-blue"
        />
        <p className="text-[16px] md:text-[20px] text-blue font-normal text-center font-poppins flex flex-col gap-1">
          Contacta a tu patrocinador
          <span className="text-[16px] md:text-[20px] font-bold">
            {auth?.sponsorName ? auth.sponsorName : "No tienes un patrocinador"}
          </span>
        </p>
      </section>
      <section className="w-full flex flex-col items-center gap-2">
        <h1 className="text-[16px] md:text-[20px] text-darkBlue font-extrabold text-center font-poppins">
          Paso #2:
        </h1>
        <p className="text-[16px] md:text-[20px] text-darkBlue font-normal text-center font-poppins md:w-1/2">
          Conecta tu cuenta a la operativa THE BULL PRO y empieza a ganar dinero
          en automático.
        </p>
        <CustomButton
          type="externalLink"
          label="Conoce el paso a paso aqui"
          theme={{
            bg: "bg-blue",
            color: "text-white",
            aditionalStyles: "w-full md:w-3/5 mt-5",
          }}
          icon={faPaperPlane}
          externalLink="https://t.me/evoXvirtualbot"
        />
      </section>
    </div>
  );
};

export default MAMAccounts;
