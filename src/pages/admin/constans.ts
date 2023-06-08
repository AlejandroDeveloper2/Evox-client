import {
  faAt,
  faCoins,
  faDollar,
  faHashtag,
  faToggleOff,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { MobileTableHeader, TableHeader } from "../../types";

const accountActivationsTableHeaders: TableHeader[] = [
  {
    label: "Transacción",
  },
  {
    label: "Moneda",
  },
  {
    label: "Precio",
  },
  {
    label: "Estado",
  },
  {
    label: "Nombre de usuario",
  },
  {
    label: "Correo",
  },
  {
    label: "Acciones",
  },
];

const getAccountsActivationsCardValues = (): MobileTableHeader[] => [
  {
    label: "Transacción",
    icon: faHashtag,
  },
  {
    label: "Moneda",
    icon: faCoins,
  },
  {
    label: "Precio",
    icon: faDollar,
  },
  {
    label: "Estado",
    icon: faToggleOff,
  },
  {
    label: "Nombre de usuario",
    icon: faUser,
  },
  {
    label: "Correo",
    icon: faAt,
  },
];

export { accountActivationsTableHeaders, getAccountsActivationsCardValues };
