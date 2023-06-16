import { faPenClip, faUser } from "@fortawesome/free-solid-svg-icons";

import { CustomButtonProps, Field, TicketSupportFormValues } from "../../types";

const initialValues: TicketSupportFormValues = {
  category: "",
  message: "",
};

export const fields: Field[] = [
  {
    type: "text",
    name: "category",
    label: "Categoria",
    placeholder: "",
    icon: faUser,
    as: "select",
    disabled: false,
    selectName: "ticketOptions",
  },
  {
    type: "text",
    name: "message",
    label: "Mensaje",
    placeholder: "Escribe aquí",
    icon: faUser,
    as: "input",
    disabled: false,
  },
];

const buttons: CustomButtonProps[] = [
  {
    type: "button",
    label: "Adjuntar imagen",
    theme: {
      bg: "bg-mediumGray",
      color: "text-white",
    },
    icon: faPenClip,
    onClick: () => console.log("Adjuntar imagen"),
  },
  {
    type: "submit",
    label: "Enviar",
    theme: {
      bg: "bg-blue",
      color: "text-white",
    },
  },
];

export { initialValues, buttons };
