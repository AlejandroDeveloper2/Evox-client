import { Link } from "react-router-dom";

import { ServiceCardProps } from "../../types";

const ServiceCard = (props: ServiceCardProps): JSX.Element => {
  const { serviceImage, alt, to } = props;

  return (
    <Link
      to={to}
      className="w-[10rem] h-[18rem] rounded-[20px] overflow-hidden 
      cursor-pointer hover:scale-110 transition-transform"
    >
      <img
        src={serviceImage}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </Link>
  );
};

export default ServiceCard;
