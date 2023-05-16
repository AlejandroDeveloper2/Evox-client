import {
  faHome,
  faSchool,
  faChevronRight,
  faChartLine,
  faMagnifyingGlassDollar,
  faMoneyBillTrendUp,
  faMoneyBill,
  faBullhorn,
  faPeopleGroup,
  faWallet,
  faFlag,
  faTicket,
  faHandHoldingDollar,
  faPiggyBank,
  faBuildingColumns,
  faCopy,
  faBox,
  faMoneyBillTransfer,
  faCoins,
  faClock,
  faCheck,
  faUsersLine,
} from "@fortawesome/free-solid-svg-icons";

import { MenuItem } from "../../../types";

export const menuItems: MenuItem[] = [
  {
    leftIcon: faHome,
    rightIcon: null,
    label: "Home",
    to: "/dashboard",
  },
  {
    leftIcon: faUsersLine,
    rightIcon: null,
    label: "Referrals",
    to: "/dashboard/referrals",
  },
  {
    leftIcon: faSchool,
    rightIcon: null,
    label: "Evox Academy",
    to: "/",
  },
  {
    leftIcon: faChartLine,
    rightIcon: faChevronRight,
    label: "Auto Trading",
    to: "#",
    subItems: [
      {
        leftIcon: faChartLine,
        rightIcon: null,
        label: "MAM Accounts",
        to: "/",
      },
      {
        leftIcon: faHandHoldingDollar,
        rightIcon: null,
        label: "Commissions",
        to: "/",
      },
    ],
  },
  {
    leftIcon: faMagnifyingGlassDollar,
    rightIcon: faChevronRight,
    label: "Bridge Funds",
    to: "#",
    subItems: [
      {
        leftIcon: faBuildingColumns,
        rightIcon: null,
        label: "Type Of Accounts",
        to: "/",
      },
      {
        leftIcon: faPiggyBank,
        rightIcon: null,
        label: "My Accounts",
        to: "/",
      },
    ],
  },
  {
    leftIcon: faMoneyBillTrendUp,
    rightIcon: null,
    label: "Bridge Markets",
    to: "/",
  },
  {
    leftIcon: faMoneyBill,
    rightIcon: faChevronRight,
    label: "Evox Synthetics",
    to: "#",
    subItems: [
      {
        leftIcon: faSchool,
        rightIcon: null,
        label: "Academic",
        to: "/",
      },
      {
        leftIcon: faCopy,
        rightIcon: null,
        label: "Syntetics Copy",
        to: "/",
      },
      {
        leftIcon: faHandHoldingDollar,
        rightIcon: null,
        label: "Commissions",
        to: "/",
      },
    ],
  },
  {
    leftIcon: faBullhorn,
    rightIcon: faChevronRight,
    label: "Evox Marketing",
    to: "#",
    subItems: [
      {
        leftIcon: faBox,
        rightIcon: null,
        label: "Packages",
        to: "/",
      },
      {
        leftIcon: faHandHoldingDollar,
        rightIcon: null,
        label: "Commissions",
        to: "/",
      },
    ],
  },
  {
    leftIcon: faPeopleGroup,
    rightIcon: null,
    label: "Comunity",
    to: "/",
  },
  {
    leftIcon: faWallet,
    rightIcon: faChevronRight,
    label: "Evox Wallet",
    to: "#",
    subItems: [
      {
        leftIcon: faCoins,
        rightIcon: null,
        label: "My Earnings",
        to: "/",
      },
      {
        leftIcon: faMoneyBillTransfer,
        rightIcon: null,
        label: "My withdrawals",
        to: "/",
      },
    ],
  },
  {
    leftIcon: faFlag,
    rightIcon: null,
    label: "Reports",
    to: "/",
  },
  {
    leftIcon: faTicket,
    rightIcon: faChevronRight,
    label: "Support Ticket",
    to: "#",
    subItems: [
      {
        leftIcon: faCheck,
        rightIcon: null,
        label: "Ticket Request",
        to: "/",
      },
      {
        leftIcon: faClock,
        rightIcon: null,
        label: "History",
        to: "/",
      },
    ],
  },
];
