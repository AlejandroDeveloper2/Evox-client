import { SocialMediaLinks } from "./constans";

import Logo from "../../../assets/logo-3.png";

const Footer = (): JSX.Element => {
  return (
    <footer className="w-full flex lg:flex-row h-auto bg-darkGray justify-center lg:justify-around flex-col lg:py-4 items-center py-6">
      <div className="flex justify-center items-center gap-1 flex-col lg:items-start">
        <h1 className="font-montserrat text-[30px] text-mediumGray font-extrabold uppercase">
          Help
        </h1>
        <p className="text-white font-montserrat text-[16px] font-bold text-center">
          Get contact with an adviser
        </p>
        <p className="text-white font-montserrat text-[14px] font-normal">
          All rights reserved © - 2023
        </p>
      </div>
      <img
        src={Logo}
        alt="Evox footer logo"
        className="w-[150px] h-[150px] object-contain"
      />
      <div className="flex justify-center items-center gap-2">
        {SocialMediaLinks.map((link, index) => (
          <a
            key={index}
            className="text-mediumGray block p-2 rounded-[50%] bg-mediumGray"
            href={link.href}
            title={link.title}
          >
            <img src={link.icon} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;