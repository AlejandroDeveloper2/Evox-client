const TicketRequest = (): JSX.Element => {
  return (
    <div
      className="w-full bg-lightGray dark:bg-darkGray flex justify-center 
      items-center flex-col gap-5 px-5 md:px-10 py-10 md:pb-[60px] relative"
    >
      <h1 className="text-[18px] md:text-[22px] font-poppins font-extrabold text-center text-darkBlue">
        Solicitud de ticket
      </h1>
      <form className="w-full flex flex-col justify-center items-start gap-10">
        <div className="flex flex-col gap-3 justify-center items-start w-full">
          <label
            htmlFor="category"
            className="font-poppins font-semibold text-darkBlue"
          >
            Categoría
          </label>
          <select
            id="category"
            name="category"
            className="outline-none border-gray border-[1px] bg-white py-5 px-4 w-1/3 font-poppins rounded-lg text-darkGray shadow-lg"
          >
            <option>Selecciona un tema</option>
            <option>Categoria 1</option>
            <option>Categoria 2</option>
            <option>Categoria 2</option>
          </select>
        </div>
        <div className="flex flex-col gap-3 justify-center items-start w-full">
          <label
            htmlFor="message"
            className="font-poppins font-semibold text-darkBlue"
          >
            Mensaje
          </label>
          <textarea
            name="message"
            maxLength={500}
            placeholder="Escribe aqui"
            className="outline-none border-gray border-[1px] bg-white py-5 px-3 w-full font-poppins h-[20rem] text-darkGray rounded-lg resize-none shadow-lg"
          ></textarea>
        </div>

        <div></div>
      </form>
      {/* <CustomForm
        formTitle={""}
        fields={fields}
        buttons={buttons}
        initialValues={initialValues}
        validationSchema={validationSchema}
        cols={"1"}
        form={"ticketRequest"}
        action={function (values: FormikValues): Promise<void> {
          throw new Error("Function not implemented.");
          console.log(values);
        }}
      /> */}
    </div>
  );
};

export default TicketRequest;
