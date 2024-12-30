const HeroSection = () => {
  return (
    <div className="section" id="home">
      <img
        src="/assets/images/hero_background.png"
        className="section-bg -z-[4] pt-16"
      />

      <div className="w-full flex mt-16 lg:mt-0">
        <div className="flex flex-col items-center w-full lg:w-1/2 lg:px-48">
          <img
            src="/assets/images/hero_logo.png"
            alt="Logo"
            className="w-[200px] h-[200px] lg:w-[240px] lg:h-[240px] mb-6"
          />

          <h1 className="text-4xl lg:text-5xl text-white mb-6 font-boldstrom w-max-full text-center">
            Revolutionizing Banter
          </h1>

          <p className="text-lg lg:text-2xl text-white mb-8 font-anton">
            The Future Of Blockchain Starts Here
          </p>

          <div className="flex flex-col lg:flex-row gap-12 w-full px-20 lg:px-0">
            <a href="#how_to_buy" className="btn-gradient !w-full !text-[24px]">
              Buy $Banter
            </a>
            <a href="#whitepaper" className="btn-gradient !w-full !text-[24px]">
              Read Whitepaper
            </a>
          </div>
        </div>
      </div>

      <img
        src="/assets/images/coins.png"
        alt="Coins"
        className="absolute right-0 bottom-0 w-full lg:w-[40%] -z-[3]"
      />
    </div>
  );
};

export default HeroSection;
