import { faCheck, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CopyLink, CustomButton } from "../../components";

const MyAccounts = (): JSX.Element => {
  return (
    <div className="relative flex flex-col pt-20 pb-10 items-center gap-20 px-5  md:px-20">
      <h1 className="text-[20px] md:text-[24px] text-darkBlue font-extrabold text-center font-poppins align-middle">
        <FontAwesomeIcon
          icon={faList}
          className="mr-5 text-violet text-[50px] align-middle"
        />
        Mis cuentas
      </h1>
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
              aditionalStyles: "h-[3rem]",
            }}
            type="externalLink"
            externalLink="https://www.metatrader4.com/es/download"
          />
          <CustomButton
            label="Descargar MT5"
            theme={{
              bg: "bg-blue",
              color: "text-white",
              aditionalStyles: "h-[3rem]",
            }}
            type="externalLink"
            externalLink="https://www.metatrader5.com/es/download"
          />
        </div>
      </section>
      {/*Acounts list */}
      <div className="w-full flex flex-col gap-3 justify-center items-center">
        <div className="w-full border-b-[1px] border-gray flex justify-between items-center py-2">
          <label className="md:text-[18px] text-[16px] text-blue font-extrabold text-left font-poppins w-[70%]">
            Cuenta 10.500 USD
          </label>
          <label className="md:text-[18px] text-[16px] text-blue font-extrabold text-left font-poppins w-[30%]">
            Estado
          </label>
        </div>
        <div className="w-full grid grid-cols-2 py-3 place-items-start justify-items-center">
          <div className="w-full flex  flex-col gap-4 justify-center items-start ">
            <div className="grid grid-cols-1 gap-3 md:gap-0 md:grid-cols-2 place-items-center justify-items-start">
              <label className="md:text-[18px] text-[16px] text-darkBlue font-extrabold text-left font-poppins">
                Login:
              </label>
              <CopyLink link={"1014622"} />
            </div>
            <div className="grid  grid-cols-1 gap-3 md:gap-0 md:grid-cols-2 place-items-center justify-items-start">
              <label className="md:text-[18px] text-[16px] text-darkBlue font-extrabold text-left font-poppins">
                Contraseña:
              </label>
              <CopyLink link={"sdklsadkk"} />
            </div>
          </div>
          <label
            className="md:text-[18px] text-[16px] text-darkGray font-extrabold text-left 
          font-poppins flex gap-3 items-center justify-start"
          >
            <FontAwesomeIcon
              icon={faCheck}
              className="text-blue md:text-[40px] text-[30px]"
            />
            Activo
          </label>
        </div>
      </div>
      <p className="text-[16px] text-darkGray font-normal text-left font-poppins w-full">
        Recuerda solo puedes tener un máximo de 2 cuentas activas
      </p>
    </div>
  );
};

export default MyAccounts;
