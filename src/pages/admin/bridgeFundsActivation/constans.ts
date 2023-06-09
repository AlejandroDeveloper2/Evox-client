import {
  faAt,
  faCoins,
  faDollar,
  faDollarSign,
  faHashtag,
  faMoneyBill,
  faTextSlash,
  faToggleOff,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { MobileTableHeader, TableHeader } from "../../../types";

const accountActivationsTableHeaders: TableHeader[] = [
  {
    label: "Transacción",
  },
  {
    label: "Titulo",
  },
  {
    label: "Precio",
  },
  {
    label: "Cantidad",
  },
  {
    label: "Total",
  },
  {
    label: "Moneda",
  },
  {
    label: "Nombre de usuario",
  },

  {
    label: "Correo",
  },
  {
    label: "Estado",
  },

  {
    label: "Acciones",
  },
];

const getBridgeFundsAccountsCardValues = (): MobileTableHeader[] => [
  {
    label: "Transacción",
    icon: faHashtag,
  },
  {
    label: "Titulo",
    icon: faTextSlash,
  },
  {
    label: "Precio",
    icon: faDollar,
  },
  {
    label: "Cantidad",
    icon: faCoins,
  },
  {
    label: "Total",
    icon: faMoneyBill,
  },
  {
    label: "Moneda",
    icon: faDollarSign,
  },
  {
    label: "Nombre de usuario",
    icon: faUser,
  },

  {
    label: "Correo",
    icon: faAt,
  },
  {
    label: "Estado",
    icon: faToggleOff,
  },
];

export { accountActivationsTableHeaders, getBridgeFundsAccountsCardValues };
