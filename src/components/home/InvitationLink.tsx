import { useAuth } from "../../hooks";

import { CopyLink } from "..";

const InvitationLink = (): JSX.Element => {
  const { auth } = useAuth();
  const link = auth ? auth.refLink : "link";

  return (
    <section className="w-full md:px-20 px-5 flex flex-col gap-3">
      <h1
        className="md:text-[24px] text-[20px] text-center md:text-left 
        font-poppins text-darkBlue dark:text-white font-extrabold"
      >
        Mi Link
      </h1>
      <CopyLink link={link} />
    </section>
  );
};

export default InvitationLink;
