import TokenomicsBox from "./TokenomicsBox";

const Tokenomics = () => {
  const list = [
    {
      percent: 64,
      img: "reserve",
      title: "Reserve",
      count: 640,
    },
    {
      percent: 1,
      img: "liquidity",
      title: "Liquidity",
      count: 10,
    },
    {
      percent: 10,
      img: "presale",
      title: "Presale",
      count: 100,
    },
    {
      percent: 10,
      img: "marketing",
      title: "Marketing",
      count: 100,
    },
    {
      percent: 15,
      img: "team",
      title: "Team",
      count: 150,
    },
  ];

  return (
    <div className="section" id="tokenomics">
      <img src="/assets/images/bg_tokenomics.png" className="section-bg" />
      <div className="font-balibold uppercase text-center text-5xl md:text-6xl">
        Tokenomics Overview
      </div>
      <div className="mt-[60px] flex flex-col md:flex-row justify-between gap-4">
        {list.map((item, index) => (
          <div className="flex flex-col items-center" key={index}>
            <div className="stroke-text-2 font-balibold text-[40px]">
              {item.percent}%
            </div>
            <div>
              <TokenomicsBox />
              <div className="flex flex-row md:flex-col items-center justify-center absolute left-0 top-0 w-full h-full gap-10 md:gap-0">
                <img
                  src={`/assets/images/${item.img}.png`}
                  className="h-[120px]"
                />
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="stroke-text-2 font-anton text-[30px] stroke-1-">
                    {item.title}
                  </div>
                  <div className="stroke-text font-roboto text-[28px] leading-[28px] text-center">
                    {item.count}M
                    <br />
                    Tokens
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tokenomics;
