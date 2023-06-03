import { faPlayCircle, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { EvoxSynteticsLogo } from "../../assets";
import { CustomButton } from "../../components";

const Academy = (): JSX.Element => {
  return (
    <div className="relative flex flex-col pt-20 pb-10 items-center gap-20 px-5  md:px-0">
      <img src={EvoxSynteticsLogo} alt="Logo Evox Synthetics" />
      <section className="w-full flex flex-col gap-3 items-center">
        <p className="text-[16px] md:text-[20px] text-darkBlue font-medium w-full md:w-3/5 text-center font-poppins">
          Accede a clases pre-grabadas, tutoriales, análisis del mercado,
          psicotrading, plan de trading y mucho más
        </p>
        <CustomButton
          type="button"
          label="Acceder a la academia"
          theme={{
            bg: "bg-violet",
            color: "text-white",
            aditionalStyles: "w-full md:w-3/5",
          }}
          icon={faPlayCircle}
          onClick={() => console.log("Academia")}
        />
      </section>
      <section className="w-full flex flex-col gap-3 items-center">
        <p className="text-[16px] md:text-[20px] text-darkBlue font-medium w-full md:w-3/5 text-center font-poppins">
          Únete al canal de Evox Academy y accede a clases en vivo y operativa
          de Índices sintéticos.
        </p>
        <div className="w-full flex flex-col gap-10 items-center">
          <CustomButton
            type="button"
            label="Unirse al canal"
            theme={{
              bg: "bg-blue",
              color: "text-white",
              aditionalStyles: "w-full md:w-3/5",
            }}
            icon={faPaperPlane}
            onClick={() => console.log("Canal")}
          />
          <CustomButton
            type="button"
            label="Canal de señales Sintéticos"
            theme={{
              bg: "bg-blue",
              color: "text-white",
              aditionalStyles: "w-full md:w-3/5",
            }}
            icon={faPaperPlane}
            onClick={() => console.log("Canal")}
          />
        </div>
      </section>
    </div>
  );
};

export default Academy;
