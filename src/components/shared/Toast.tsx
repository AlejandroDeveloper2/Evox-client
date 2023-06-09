import {
  faCheck,
  faClose,
  faWarning,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useApp } from "../../hooks";
import { setToastColor } from "../../utils";

const Toast = (): JSX.Element => {
  const { toast, setToast } = useApp();
  return (
    <div
      className={`flex justify-between items-center gap-5 ${setToastColor(
        toast.type
      )} ${
        toast.visible ? "translate-x-[0px]" : "translate-x-[110%]"
      } transition-transform fixed bottom-2 md:bottom-[1rem] right-2 w-auto p-[25px] z-40 rounded-lg`}
    >
      <FontAwesomeIcon
        icon={
          toast.type === "success"
            ? faCheck
            : toast.type === "error"
            ? faClose
            : toast.type === "warning"
            ? faWarning
            : faInfo
        }
        className="text-white"
      />

      <div className="ml-3 text-sm font-normal font-poppins text-white">
        {toast.message}
      </div>
      <button
        onClick={() =>
          setToast({ message: "", type: "success", visible: false })
        }
        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-color text-darkGray"
      >
        <FontAwesomeIcon icon={faClose} className="text-darkGray" />
      </button>
    </div>
  );
};

export default Toast;
