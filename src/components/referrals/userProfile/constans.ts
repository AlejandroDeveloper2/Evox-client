import {
  faUser,
  faLink,
  faIdCardClip,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ProfileItem {
  icon: IconDefinition;
  label: string;
  value: string;
}

export const getProfileItems = (): ProfileItem[] => {
  const profileItems: ProfileItem[] = [
    {
      icon: faUser,
      label: "Parent :",
      value: "Diego Alejandro",
    },
    {
      icon: faLink,
      label: "Referral Link :",
      value: "https://evox/ref/Diego98",
    },
    {
      icon: faUser,
      label: "Username :",
      value: "Diego98",
    },
    {
      icon: faIdCardClip,
      label: "Fullname :",
      value: "Diego Alejandro Diaz",
    },
  ];

  return profileItems;
};
