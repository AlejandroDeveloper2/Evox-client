import { Link } from "react-router-dom";

import { ServiceCardProps } from "../../types";

const ServiceCard = (props: ServiceCardProps): JSX.Element => {
  const { serviceImage, alt, to } = props;
  return <Link to={to}></Link>;
};

export default ServiceCard;
