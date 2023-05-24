import phoneCodes from "../data/phoneCodes.json";

const usePhonecode = () => {
  const phoneCodesList = phoneCodes.phoneNumberExtencions;

  const renderPhoneCodes = (): JSX.Element[] => {
    return phoneCodesList.map((phoneCode, index) => (
      <option key={index} value={`(+${phoneCode.code})`}>
        {`${phoneCode.country} (+${phoneCode.code})`}
      </option>
    ));
  };

  return {
    renderPhoneCodes,
  };
};

export default usePhonecode;
