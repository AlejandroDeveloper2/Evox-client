import {
  faAt,
  faCalendar,
  faLocation,
  faMapLocation,
  faPhone,
  faToggleOff,
  faUser,
  faUserAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import { MobileTableHeader, TableHeader } from "../../../types";

const usersTableHeaders: TableHeader[] = [
  {
    label: "Nombre",
  },
  {
    label: "Nombre de usuario",
  },
  {
    label: "Correo",
  },
  {
    label: "Telefono",
  },
  {
    label: "País",
  },
  {
    label: "Ciudad",
  },
  {
    label: "Fecha de verificación",
  },
  {
    label: "Rol",
  },
  {
    label: "Estado",
  },
  {
    label: "Acciones",
  },
];

const getUsersCardValues = (): MobileTableHeader[] => [
  {
    label: "Nombre",
    icon: faUser,
  },
  {
    label: "Nombre de usuario",
    icon: faUserAlt,
  },
  {
    label: "Correo",
    icon: faAt,
  },
  {
    label: "Telefono",
    icon: faPhone,
  },
  {
    label: "País",
    icon: faLocation,
  },
  {
    label: "Ciudad",
    icon: faMapLocation,
  },
  {
    label: "Fecha de verificación",
    icon: faCalendar,
  },
  {
    label: "Rol",
    icon: faUserCircle,
  },
  {
    label: "Estado",
    icon: faToggleOff,
  },
];

export { usersTableHeaders, getUsersCardValues };
