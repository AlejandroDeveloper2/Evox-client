import {
  faAt,
  faCalendar,
  faIdCard,
  faLock,
  faToggleOn,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { MobileTableHeader, TableHeader } from "../../../types";

const syntheticCredentialsTableHeaders: TableHeader[] = [
  {
    label: "Nombre de usuario",
  },
  {
    label: "Correo",
  },
  {
    label: "Id de inicio de sesión",
  },
  {
    label: "Contraseña",
  },
  {
    label: "Registro de cuenta",
  },
  {
    label: "Estado",
  },
  {
    label: "Indicadores",
  },
];

const syntheticCredentialsCardValues = (): MobileTableHeader[] => [
  {
    label: "Nombre de usuario",
    icon: faUser,
  },
  {
    label: "Correo",
    icon: faAt,
  },
  {
    label: "Id de inicio de sesión",
    icon: faIdCard,
  },
  {
    label: "Contraseña",
    icon: faLock,
  },
  {
    label: "Registro de cuenta",
    icon: faCalendar,
  },
  {
    label: "Estado",
    icon: faToggleOn,
  },
];

export { syntheticCredentialsTableHeaders, syntheticCredentialsCardValues };
