import { Link } from "react-router-dom";

import { ServiceCardProps } from "../../types";

const ServiceCard = (props: ServiceCardProps): JSX.Element => {
  const { serviceImage, alt, to, style } = props;

  return (
    <Link
      to={to}
      className={`w-[8rem] md:w-[10rem] rounded-[20px] overflow-hidden ${style}
      cursor-pointer xl:hover:scale-110 transition-transform md:w-20rem xl:w-[8rem] xl:h-[15rem]`}
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
