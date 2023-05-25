const LinkBotEvox = (): JSX.Element => {
  return (
    <div className="w-full flex justify-center items-center gap-5">
      <a
        href="https://t.me/evoXvirtualbot"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[5rem] h-[5rem] bg-blue rounded-[50%] flex justify-center items-center"
        title="Bot telegram de evox"
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUNJREFUSEvVVdFVwzAQkzYpk0AnoZ0EmIQyCdmk3UQ8+Z39bBOnDTQf9U/TxJF0Op1DbLy4MT4ej0DSzq6QvKTfe1kk6QDgDYAJJpL7fxME6DMAg9frQvLpzwSSPgG8hNoMbEuSPQBOJI+rCELtawDXak8AvgB8Vzc/SL5fJZBklQbtLfC7VpxUduD+vyc5DQm6hs3lICmMfbarWSRLeMpFxMspmFObAazK4JMkW+D9/SoNbiqQdO6a1r94JGm/Icl+275hdflBMweV53VCDGrVaXCugHtLafBik4PME5madSN40+BFgrr26E/O/sCZdLvxfw2BLatzPiLZnKDxf00Fjq4tSgojoh7AfDTkikrSZlM0qjsfE/mEjIbbNpMWknrA1hLsckx7EXHwucJf/t9s0VJsqmpMkGalXnf74IxEPD7BDwOZgxnZjXLaAAAAAElFTkSuQmCC"
          alt="Evox telegram bot"
          className="object-cover scale-125"
        />
      </a>
      <div className="flex flex-col gap-1 items-start justify-center">
        <h1 className="text-darkBlue text-[20px] font-poppins font-semibold">
          Bot de telegram Evox
        </h1>
        <h2 className="text-darkBlue text-[16px] font-poppins font-normal">
          Unete ya a nuestro chat bot!
        </h2>
      </div>
    </div>
  );
};

export default LinkBotEvox;
