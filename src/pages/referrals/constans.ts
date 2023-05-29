import {
  faHashtag,
  faUserAlt,
  faPhone,
  faUser,
  faCalendar,
  faTurnDown,
} from "@fortawesome/free-solid-svg-icons";

import { TableHeader } from "../../types";

const referralsTableHeaders: TableHeader[] = [
  {
    icon: faHashtag,
    label: "ID",
  },
  {
    icon: faUserAlt,
    label: "Nombre",
  },
  {
    icon: faPhone,
    label: "Celular",
  },
  {
    icon: faUser,
    label: "Nombre de usuario",
  },
  {
    icon: faCalendar,
    label: "Fecha de registro",
  },
];

const teamTableHeaders: TableHeader[] = [
  {
    icon: faHashtag,
    label: "ID",
  },
  {
    icon: faUserAlt,
    label: "Nombre",
  },
  {
    icon: faTurnDown,
    label: "Nivel",
  },
  {
    icon: faUser,
    label: "Nombre de usuario",
  },
  {
    icon: faCalendar,
    label: "Fecha de registro",
  },
];

export { referralsTableHeaders, teamTableHeaders };
