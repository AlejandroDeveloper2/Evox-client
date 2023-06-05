import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { MenuItem, Role } from "../../../types";

const getMenuItems = (roleUser: Role): MenuItem[] => {
  if (roleUser.authority === "ROLE_USER")
    return [
      {
        rightIcon: null,
        label: "Inicio",
        to: "/dashboard",
        enabled: true,
      },
      {
        rightIcon: null,
        label: "Evox Academy",
        to: "/dashboard/evoxAcademy",
        enabled: false,
      },
      {
        rightIcon: faChevronRight,
        label: "Red",
        to: "#",
        enabled: true,
        subItems: [
          {
            rightIcon: null,
            label: "Referidos",
            to: "/dashboard/referrals",
            enabled: true,
          },
          {
            rightIcon: null,
            label: "Mi equipo",
            to: "/dashboard/teams",
            enabled: true,
          },
        ],
      },
      {
        rightIcon: faChevronRight,
        label: "Trading automático",
        to: "#",
        enabled: true,
        subItems: [
          {
            rightIcon: null,
            label: "Cuentas MAM",
            to: "/dashboard/automaticTrading/mamAccounts",
            enabled: true,
          },
          // {
          //   leftIcon: faHandHoldingDollar,
          //   rightIcon: null,
          //   label: "Comisiones",
          //   to: "/dashboard/automaticTrading/commissions",
          //   enabled: true,
          // },
        ],
      },
      {
        rightIcon: faChevronRight,
        label: "Bridge Funds",
        to: "#",
        enabled: true,
        subItems: [
          {
            rightIcon: null,
            label: "Ver los tipos de cuentas",
            to: "/dashboard/bridgeFunds/kindOfAccounts",
            enabled: true,
          },
          {
            rightIcon: null,
            label: "Mis cuentas",
            to: "/dashboard/bridgeFunds/myAccounts",
            enabled: true,
          },
        ],
      },
      {
        rightIcon: null,
        label: "Bridge Markets",
        to: "/dashboard/bridgeMarkets",
        enabled: true,
      },
      {
        rightIcon: faChevronRight,
        label: "Evox Synthetics",
        to: "#",
        enabled: true,
        subItems: [
          {
            rightIcon: null,
            label: "Academia",
            to: "/dashboard/evoxSynthetics/academy",
            enabled: false,
          },
          {
            rightIcon: null,
            label: "Copy sintéticos",
            to: "/dashboard/evoxSynthetics/copySynthetics",
            enabled: true,
          },
          // {
          //   leftIcon: faHandHoldingDollar,
          //   rightIcon: null,
          //   label: "Comisiones",
          //   to: "#",
          //   enabled: true,
          // },
        ],
      },
      {
        rightIcon: faChevronRight,
        label: "Evox Marketing",
        to: "#",
        enabled: false,
        subItems: [
          {
            rightIcon: null,
            label: "Paquetes",
            to: "#",
            enabled: false,
          },
          {
            rightIcon: null,
            label: "Comisiones",
            to: "#",
            enabled: false,
          },
        ],
      },
      {
        rightIcon: null,
        label: "Comunidad",
        to: "#",
        enabled: false,
      },
      {
        rightIcon: faChevronRight,
        label: "Billetera Evox",
        to: "#",
        enabled: false,
        subItems: [
          {
            rightIcon: null,
            label: "Mis ganancias",
            to: "#",
            enabled: false,
          },
          {
            rightIcon: null,
            label: "Retiros",
            to: "#",
            enabled: false,
          },
        ],
      },
      {
        rightIcon: null,
        label: "Reportes",
        to: "#",
        enabled: false,
      },
      {
        rightIcon: faChevronRight,
        label: "Ticket de soporte",
        to: "#",
        enabled: false,
        subItems: [
          {
            rightIcon: null,
            label: "Solicitud de ticket",
            to: "#",
            enabled: false,
          },
          {
            rightIcon: null,
            label: "Historial",
            to: "#",
            enabled: false,
          },
        ],
      },
    ];
  return [
    {
      rightIcon: null,
      label: "Usuarios",
      to: "/admin",
      enabled: true,
    },
    {
      rightIcon: null,
      label: "Activación de cuentas",
      to: "/admin/accountsActivation",
      enabled: true,
    },
  ];
};

export { getMenuItems };
