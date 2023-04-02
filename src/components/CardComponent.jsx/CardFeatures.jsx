import { FaCheck } from "react-icons/fa";

const CardFeatures = ({ id, feature }) => {
  return (
    <li key={id} className="flex items-center gap-2">
      <FaCheck className="text-subTitle font-bold" />
      <span className="text-secondary font-bold">{feature}</span>
    </li>
  );
};

export default CardFeatures;
