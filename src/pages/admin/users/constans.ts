import {
  faCalendar,
  faHashtag,
  faToggleOff,
  faUser,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";

import { MobileTableHeader, TableHeader } from "../../../types";

const usersTableHeaders: TableHeader[] = [
  {
    label: "ID",
  },
  {
    label: "Nombre",
  },
  {
    label: "Nombre de usuario",
  },
  {
    label: "Estado",
  },
  {
    label: "Fecha de registro",
  },
];

const getUsersCardValues = (): MobileTableHeader[] => [
  {
    label: "ID",
    icon: faHashtag,
  },
  {
    label: "Nombre",
    icon: faUser,
  },
  {
    label: "Nombre de usuario",
    icon: faUserAlt,
  },
  {
    label: "Estado",
    icon: faToggleOff,
  },
  {
    label: "Fecha de registro",
    icon: faCalendar,
  },
];

export { usersTableHeaders, getUsersCardValues };
