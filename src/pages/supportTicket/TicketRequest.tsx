import { FormikValues } from "formik";

import { buttons, fields, initialValues } from "./constans";
import { validationSchema } from "./validationSchema";

import { CustomForm } from "../../components";

const TicketRequest = (): JSX.Element => {
  return (
    <div
      className="w-full bg-lightGray dark:bg-darkGray flex justify-center 
    items-center flex-col gap-5 px-5 md:px-10 py-10 md:pb-[60px] relative"
    >
      <h1 className="text-[18px] md:text-[22px] font-poppins font-extrabold text-center text-darkBlue">
        Solicitud de ticket
      </h1>
      <CustomForm
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
      />
    </div>
  );
};

export default TicketRequest;
