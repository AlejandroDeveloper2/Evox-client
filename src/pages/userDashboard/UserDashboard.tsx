const UserDashboard = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col justify-center items-start pb-5 h-auto gap-10">
      <div className="w-[95%] bg-lightBlue dark:bg-purple h-[10rem]"></div>
      <div className="w-full relative flex flex-col justify-center items-center gap-5 lg:flex-row">
        <h1 className="lg:text-[32px] text-[24px] font-montserrat text-center text-darkBlue dark:text-white font-normal  w-[90%] lg:w-1/2">
          How would you feel if you had{" "}
          <span className="text-[24px] lg:text-[32px] font-montserrat font-bold">
            {" "}
            more control over your money?{" "}
          </span>
        </h1>
        <div className="w-full flex gap-3 justify-center lg:absolute lg:top-0 lg:flex-col lg:left-10 lg:w-auto">
          <div className="w-[10rem] h-[18rem] rounded-[20px] bg-lightBlue"></div>
          <div className="w-[10rem] h-[18rem] rounded-[20px] bg-lightBlue"></div>
        </div>
        <div className="w-full flex flex-wrap gap-3 justify-center lg:absolute lg:top-0 lg:bottom-0 lg:left-0 lg:right-0 lg:w-auto">
          <div className="w-[10rem] h-[18rem] rounded-[20px] bg-lightBlue"></div>
          <div className="w-[10rem] h-[18rem] rounded-[20px] bg-lightBlue"></div>
          <div className="w-[85%] h-[18rem] rounded-[20px] bg-lightBlue lg:w-[10rem]"></div>
        </div>
        <div className="w-full flex gap-3 justify-center lg:absolute lg:top-0 lg:flex-col lg:right-10 lg:w-auto">
          <div className="w-[10rem] h-[18rem] rounded-[20px] bg-purple"></div>
          <div className="w-[10rem] h-[18rem] rounded-[20px] bg-purple"></div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
