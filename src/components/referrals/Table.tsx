import { TableProps } from "../../types";

const Table = (props: TableProps): JSX.Element => {
  const { type, children } = props;
  return (
    <table className="w-full text-sm text-left text-darkGray dark:text-white font-poppins ">
      <thead
        className="text-[16px] text-blue capitalize dark:bg-mediumGray 
          dark:text-white font-poppins font-semibold border-b-[2px] border-gray"
      >
        <tr>
          <th scope="col" className="px-6 py-3">
            Nombre
          </th>
          <th scope="col" className="px-6 py-3">
            {type==="referrals" ? "Celular":"Nivel"}
          </th>
          <th scope="col" className="px-6 py-3">
            Username
          </th>
          <th scope="col" className="px-6 py-3">
            Register date
          </th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
