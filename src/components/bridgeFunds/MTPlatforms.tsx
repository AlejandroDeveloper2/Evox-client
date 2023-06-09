import { CustomButton } from "..";

const MTPlatforms = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-5 justify-center items-start w-full">
      <h1 className="text-[18px] text-darkBlue font-extrabold text-center font-poppins align-middle">
        Plataformas:
      </h1>
      <div className="w-full flex justify-start items-center gap-20">
        <CustomButton
          label="Descargar MT4"
          theme={{
            bg: "bg-blue",
            color: "text-white",
            aditionalStyles: "h-[3rem] w-full md:w-auto",
          }}
          type="externalLink"
          externalLink="https://www.metatrader4.com/es/download"
        />
        <CustomButton
          label="Descargar MT5"
          theme={{
            bg: "bg-blue",
            color: "text-white",
            aditionalStyles: "h-[3rem] w-full md:w-auto",
          }}
          type="externalLink"
          externalLink="https://www.metatrader5.com/es/download"
        />
      </div>
    </section>
  );
};

export default MTPlatforms;
