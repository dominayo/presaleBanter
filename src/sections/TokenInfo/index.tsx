const TokenInfoSection = () => {
  return (
    <div className="section">
      {/* Background Image */}
      <img
        src="/assets/images/bg_token_info.png"
        className="section-bg"
        alt=""
      />

      <div className="section-bg-mask"></div>

      <div className="font-balibold uppercase text-[40px] md:text-6xl">
        WHY CHOOSE BETURA?
      </div>

      <div className="flex-1 flex flex-col justify-center mt-10 gap-10 md:hidden">
        <div className="flex items-center gap-2">
          <img src="/assets/images/secure.png" />
          <div className="flex flex-col items-center gap-2">
            <div className="font-robotoBold text-2xl text-center">
              AUDITED AND SECURE
            </div>
            <div className="font-robotoBold text-lg text-center">
              $Betura has been independently audited for security and
              transparency.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img src="/assets/images/build_solana.png" />
          <div className="flex flex-col items-center gap-2">
            <div className="font-robotoBold text-2xl text-center">
              BUILT ON SOLANA
            </div>
            <div className="font-robotoBold text-lg text-center">
              Experience lightning-fast transactions with minimal fees on the
              Solana blockchain.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img src="/assets/images/net.png" />
          <div className="flex flex-col items-center gap-2">
            <div className="font-robotoBold text-2xl text-center">
              INTEGRATED WITH BETURA.NET
            </div>
            <div className="font-robotoBold text-lg text-center">
              Use $Betura seamlessly on our betting platform, Betura.net.
            </div>
          </div>
        </div>

        <img src="/assets/images/playground.png" alt="playground" />
      </div>

      <div className="flex-1 items-center justify-center mt-20 hidden md:flex">
        <img src="/assets/images/token_info.png" className="w-[70%]" />
      </div>
    </div>
  );
};

export default TokenInfoSection;
