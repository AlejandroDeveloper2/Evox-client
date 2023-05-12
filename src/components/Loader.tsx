import { Link } from "react-router-dom";

import { useApp } from "../hooks";

import { Spinner } from ".";

const Loader = (): JSX.Element => {
  const { setIsValidating, loader } = useApp();

  return (
    <div className="w-full h-full bg-white dark:bg-darkGray flex justify-center items-center">
      <div className="p-6 text-center flex flex-col gap-4 items-center justify-center">
        {loader.loading && <Spinner />}
        <h3 className="mb-5 text-[25px] font-montserrat font-extrabold text-darkGray dark:text-white">
          {loader.message}
        </h3>
        {!loader.loading && (
          <Link
            to="/login"
            onClick={() => setIsValidating(false)}
            className="text-white bg-darkGray dark:bg-primary-color 
                  hover:bg-opacity-60 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm inline-flex 
                  items-center px-5 py-4 text-center mr-2"
          >
            Go back to login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Loader;
