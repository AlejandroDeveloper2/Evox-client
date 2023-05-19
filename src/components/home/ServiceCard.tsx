import { Link } from "react-router-dom";

import { ServiceCardProps } from "../../types";

const ServiceCard = (props: ServiceCardProps): JSX.Element => {
  const { serviceImage, alt, to } = props;

  return (
    <Link
      to={to}
      className="w-[10rem] rounded-[20px] overflow-hidden 
      cursor-pointer xl:hover:scale-110 transition-transform md:w-20rem xl:w-[10rem]"
    >
      <img
        src={serviceImage}
        alt={alt}
        className="w-full h-full object-cover "
      />
    </Link>
  );
};

export default ServiceCard;
