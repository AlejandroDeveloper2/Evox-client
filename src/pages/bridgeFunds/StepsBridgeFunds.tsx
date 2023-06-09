import { PaymentNoDone } from "../../components";

const StepsBridgeFunds = (): JSX.Element => {
  return (
    <div className="relative flex flex-col pt-20 pb-10 items-center gap-20 px-5  md:px-20">
      <PaymentNoDone
        paymentLink="/dashboard/bridgeFunds/kindOfAccounts"
        label="Realizar el pago de tu cuenta de fondeos"
        type="brigeFunds"
      />
    </div>
  );
};

export default StepsBridgeFunds;
