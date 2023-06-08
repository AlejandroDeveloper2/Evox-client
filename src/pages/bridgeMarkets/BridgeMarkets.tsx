import { useAuth } from "../../hooks";

import {
  EducativeIcon,
  MamAccountsLogo,
  PaymentIcon,
  SpreadsIcon,
  SupportIcon,
  TrophyIcon,
  VpsIcon,
} from "../../assets";
import { CustomButton } from "../../components";

const BridgeMarkets = (): JSX.Element => {
  const { auth } = useAuth();
  return (
    <div className="relative flex flex-col pt-10 pb-10 items-center gap-10 px-5  md:px-20">
      <img src={MamAccountsLogo} alt="Evox bridge markets" />
      <h1
        className="text-[20px] md:text-[24px] text-darkBlue font-extrabold 
        text-center font-poppins align-middle md:w-3/4 w-full"
      >
        Empieza a ganar hoy mismo Conviertase en un afiliado Bridge Markets
      </h1>
      <p className="text-[16px] md:text-[20px] text-blue font-normal text-center font-poppins flex flex-col gap-0">
        Contacta a tu patrocinador
        <span className="text-[16px] md:text-[20px] font-bold">
          {auth?.sponsorName ? auth.sponsorName : "No tienes un patrocinador"}
        </span>
      </p>
      <p className="text-[12px] md:text-[14px] text-darkBlue font-medium text-justify font-poppins">
        Obtenga hasta un 65% de comisión de por vida con un proveedor de
        operaciones en línea que permite a cualquier persona operar en mercados
        financieros populares con la mayor comodidad. Bridge Markets tiene un
        historial probado de ejecutar programas de referencia exitosos con pagos
        rápidos.
      </p>
      <div className="w-full gap-5 md:gap-10 flex justify-center items-center">
        <div className="md:w-[15rem] w-[17rem] h-[6rem] bg-gray flex flex-col items-center justify-center">
          <h1 className="text-[20px] md:text-[24px] text-darkBlue font-extrabold text-center font-poppins">
            10k+
          </h1>
          <p className="text-[12px] text-darkBlue font-normal text-center font-poppins md:w-1/2">
            Personas activas en BRIDGE MARKETS
          </p>
        </div>
        <div className="w-[15rem] h-[6rem] bg-gray flex flex-col items-center justify-center">
          <h1 className="text-[20px] md:text-[24px] text-darkBlue font-extrabold text-center font-poppins">
            1M+
          </h1>
          <p className="text-[12px] text-darkBlue font-normal text-center font-poppins md:w-1/2">
            Trades abiertos
          </p>
        </div>
        <div className="w-[15rem] h-[6rem] bg-gray flex flex-col items-center justify-center">
          <h1 className="text-[20px] md:text-[24px] text-darkBlue font-extrabold text-center font-poppins">
            700+
          </h1>
          <p className="text-[12px] text-darkBlue font-normal text-center font-poppins md:w-1/2">
            Instrumentos comerciales
          </p>
        </div>
      </div>
      <section className="w-full flex flex-col items-start justify-center gap-5 border-y-[1px] border-gray py-2 md:py-5">
        <h1 className="text-[18px] text-darkBlue font-extrabold text-center font-poppins align-middle">
          Lo que obtienen sus clientes
        </h1>
        <div className="w-full grid grid-rows-3 md:px-10 px-0 gap-10 justify-items-center auto-rows-max">
          <div className="grid grid-cols-3 justify-items-center place-items-center">
            <div className="flex flex-col gap-2 items-center">
              <img src={VpsIcon} alt="Evox bridge markest benefits" />
              <label className="text-[14px] text-darkBlue font-medium text-center font-poppins">
                VPS gratuito
              </label>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <img src={EducativeIcon} alt="Evox bridge markest benefits" />
              <label className="text-[14px] text-darkBlue font-medium text-center font-poppins">
                Recursos educativos de primer nivel
              </label>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <img src={PaymentIcon} alt="Evox bridge markest benefits" />
              <label className="text-[14px] text-darkBlue font-medium text-center font-poppins">
                Pago instantaneo de comisiones
              </label>
            </div>
          </div>
          <div className="grid grid-cols-3 justify-items-center place-items-center">
            <div className="flex flex-col gap-2 items-center">
              <img src={TrophyIcon} alt="Evox bridge markest benefits" />
              <label className="text-[14px] text-darkBlue font-medium text-center font-poppins">
                Plataforma de trading galardonada
              </label>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <img src={SpreadsIcon} alt="Evox bridge markest benefits" />
              <label className="text-[14px] text-darkBlue font-medium text-center font-poppins">
                Spreads competitivos
              </label>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <img src={SupportIcon} alt="Evox bridge markest benefits" />
              <label className="text-[14px] text-darkBlue font-medium text-center font-poppins">
                Servicio de soporte comprometido
              </label>
            </div>
          </div>
          <CustomButton
            label="Solicita tu link de registro a tu patrocinador"
            theme={{
              bg: "bg-darkBlue",
              color: "text-white",
              aditionalStyles: "w-full md:w-3/4 h-[4rem]",
            }}
            type="button"
          />
        </div>
      </section>
      <section className="w-full flex flex-col items-start justify-center gap-5">
        <h1 className="text-[18px] text-darkBlue font-extrabold text-center font-poppins align-middle">
          Tu link de afiliado
        </h1>
        <div className="w-full md:w-3/4 bg-gray rounded-lg flex justify-center items-start p-5 flex-col gap-2">
          <p className="text-[12px] md:text-[14px] text-darkBlue font-medium text-justify font-poppins">
            Ingresa a la sesión de BRIGE MARKETS y trae tu link de afiliado.
          </p>
          <CustomButton
            label="Ir a la sesión de Brige Markets"
            theme={{
              bg: "bg-blue",
              color: "text-white",
              aditionalStyles: "h-[3rem]",
            }}
            type="externalLink"
            externalLink="https://trading.bridgemarkets.eu/"
          />
        </div>
      </section>
    </div>
  );
};

export default BridgeMarkets;
