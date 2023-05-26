import { Spinner } from "..";

interface Loading {
  message: string;
}

const Loading = (props: Loading): JSX.Element => {
  const { message } = props;
  return (
    <div className="w-screen h-screen bg-primary-color flex justify-center items-center gap-2 flex-col">
      <Spinner />
      <p className="text-[22px] font-poppins font-semibold text-darkBlue">
        {message}
      </p>
    </div>
  );
};

export default Loading;
