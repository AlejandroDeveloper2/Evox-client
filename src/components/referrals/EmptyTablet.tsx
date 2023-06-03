import { useScreen } from "../../hooks";
import { EmptyTableProps } from "../../types";

const EmptyTablet = (props: EmptyTableProps): JSX.Element => {
  const screenSize = useScreen();
  const { message, colspan } = props;
  if (screenSize >= 768)
    return (
      <tr
        className="bg-white md:bg-lightGray dark:bg-darkGray dark:border-mediumGray text-darkBlue 
        md:text-[16px] text-[14px] font-poppins font-normal py-5 whitespace-nowrap"
      >
        <td className="py-4 px-6" colSpan={colspan}>
          {message}
        </td>
      </tr>
    );
  return (
    <span
      className="bg-white md:bg-lightGray dark:bg-darkGray dark:border-mediumGray text-darkBlue 
        md:text-[16px] text-[14px] font-poppins font-normal p-5"
    >
      {message}
    </span>
  );
};

export default EmptyTablet;
