import React from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { CustomButton } from "../components";

/* eslint-disable @typescript-eslint/no-explicit-any */
const usePagination = (list: any[]) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [records, setRecords] = React.useState<any[]>([]);
  const [next, setNext] = React.useState<boolean>(false);
  const [prev, setPrev] = React.useState<boolean>(false);

  const totalRecordsPerPage = 10;
  const totalPages = Math.ceil(list.length / totalRecordsPerPage);

  const indexOfLastRecord = currentPage * totalRecordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - totalRecordsPerPage;

  const paginate = (): void => {
    if (currentPage > 1) {
      setPrev(true);
    } else {
      setPrev(false);
    }
    if (currentPage < totalPages) {
      setNext(true);
    } else {
      setNext(false);
    }
  };

  const goBack = (): void => {
    setCurrentPage((prevState) => prevState - 1);
  };

  const goNext = (): void => {
    setCurrentPage((prevState) => prevState + 1);
  };

  React.useEffect(() => {
    const setRecordsPerPage = (): void => {
      const recordsPerPage = list.slice(indexOfFirstRecord, indexOfLastRecord);
      setRecords(recordsPerPage);
      paginate();
      window.scrollTo({ top: 1800, behavior: "smooth" });
    };
    setRecordsPerPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, indexOfFirstRecord, indexOfLastRecord, list, totalPages]);

  const Pagination = (): JSX.Element => {
    return (
      <div className="w-full flex justify-between md:px-10 px-5 py-5 items-center mt-5">
        <CustomButton
          onClick={() => goBack()}
          type="button"
          label=""
          theme={{
            bg: "bg-darkGray",
            color: "text-white",
            aditionalStyles: "w-[2rem] h-[2rem]",
          }}
          disabled={!prev}
          icon={faChevronLeft}
        />
        <label className="text-[16px] font-poppins text-darkBlue font-medium">
          {`Mostrando ${currentPage * totalRecordsPerPage - 10} al ${
            currentPage * totalRecordsPerPage
          } de ${list.length} registros`}
        </label>
        <CustomButton
          onClick={() => goNext()}
          type="button"
          label=""
          theme={{
            bg: "bg-darkGray",
            color: "text-white",
            aditionalStyles: "w-[2rem] h-[2rem]",
          }}
          disabled={!next}
          icon={faChevronRight}
        />
      </div>
    );
  };

  return {
    records,
    Pagination,
  };
};

export default usePagination;
