/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  faCalendar,
  faHashtag,
  faPhone,
  faUser,
  faUserAlt,
  faTurnDown,
} from "@fortawesome/free-solid-svg-icons";

import { MobileTableHeader, TableHeader } from "../../types";

const referralsTableHeaders: TableHeader[] = [
  {
    label: "ID",
  },
  {
    label: "Nombre",
  },
  {
    label: "Celular",
  },
  {
    label: "Nombre de usuario",
  },
  {
    label: "Fecha de registro",
  },
];

const teamTableHeaders: TableHeader[] = [
  {
    label: "ID",
  },
  {
    label: "Nombre",
  },
  {
    label: "Nivel",
  },
  {
    label: "Nombre de usuario",
  },
  {
    label: "Fecha de registro",
  },
];

const getTeamCardValues = (): MobileTableHeader[] => [
  {
    label: "ID",
    icon: faHashtag,
  },
  {
    label: "Nombre",
    icon: faUserAlt,
  },
  {
    label: "Nivel",
    icon: faTurnDown,
  },
  {
    label: "Nombre de usuario",
    icon: faUser,
  },
  {
    label: "Fecha de registro",
    icon: faCalendar,
  },
];

const getReferralsCardValues = (): MobileTableHeader[] => [
  {
    label: "ID",
    icon: faHashtag,
  },
  {
    label: "Nombre",
    icon: faUserAlt,
  },
  {
    label: "Celular",
    icon: faPhone,
  },
  {
    label: "Nombre de usuario",
    icon: faUser,
  },
  {
    label: "Fecha de registro",
    icon: faCalendar,
  },
];

export {
  referralsTableHeaders,
  teamTableHeaders,
  getReferralsCardValues,
  getTeamCardValues,
};
