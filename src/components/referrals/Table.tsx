import { TableProps } from "../../types";
import { useScreen } from "../../hooks";

const Table = (props: TableProps): JSX.Element => {
  const { children, headers } = props;
  const screenSize = useScreen();

  if (screenSize >= 768)
    return (
      <table className="w-full text-sm text-left text-darkGray dark:text-white font-poppins  bg-white md:bg-lightGray">
        <thead
          className="text-[16px] text-blue capitalize dark:bg-mediumGray 
          dark:text-white font-poppins font-semibold border-b-[2px] border-gray"
        >
          {headers.map((header) => (
            <th className="px-6 py-3 whitespace-nowrap">{header.label}</th>
          ))}
        </thead>
        <tbody>{children}</tbody>
      </table>
    );
  return <MobileTable {...props}>{children}</MobileTable>;
};

interface props {
  children: JSX.Element | JSX.Element[];
}
const MobileTable = (props: props): JSX.Element => {
  return (
    <div className="w-full bg-lightGray rounded-lg flex flex-col gap-4 px-5">
      {props.children}
    </div>
  );
};

export default Table;
