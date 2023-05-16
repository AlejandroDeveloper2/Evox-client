import {
  faUser,
  faLink,
  faIdCardClip,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { Referral, UserAuth } from "../../../types";

interface ProfileItem {
  icon: IconDefinition;
  label: string;
  value: string | null;
}

export const getProfileItems = (userReferrals: Referral[], auth: UserAuth | null): ProfileItem[] => {
  let profileItems: ProfileItem[] = [];
  userReferrals.forEach((referral) => {
    if (referral.userName === auth?.sub) {
      profileItems = [
        {
          icon: faUser,
          label: "Parent :",
          value: referral.parent,
        },
        {
          icon: faLink,
          label: "Referral Link :",
          value: referral.refLink,
        },
        {
          icon: faUser,
          label: "Username :",
          value: referral.userName,
        },
        {
          icon: faIdCardClip,
          label: "Fullname :",
          value: referral.fullName,
        },
      ]
    }
  });

  return profileItems;
};
