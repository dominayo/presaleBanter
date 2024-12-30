import { useEffect, useState } from "react";
import { BaseAPI } from "../../utils/api/BaseAPI.ts";
import { socket } from "../../utils/socket.ts";

const Calculator = () => {
  const [count, setCount] = useState("");
  const [price, setPrice] = useState(0);
  const [beturaPrice, setBeturaPrice] = useState(0);

  useEffect(() => {
    setCount("0");
  }, []);

  const getBeturaPrice = async () => {
    const res = await BaseAPI.callAPI({
      url: "/tokenPrice",
      method: "GET",
    });

    if (!res.error) setBeturaPrice(res.data.currentPrice);
  };

  const handleTokenPriceUpdate = (data) => {
    setBeturaPrice(data.currentPrice);
  };

  const handleCalc = () => {
    setPrice(beturaPrice * count);
  };

  useEffect(() => {
    setPrice(beturaPrice * count);
  }, [count, beturaPrice]);

  useEffect(() => {
    getBeturaPrice();
    socket.on("tierPriceUpdate", handleTokenPriceUpdate);

    return () => {
      socket.off("tierPriceUpdate", handleTokenPriceUpdate);
    };
  }, []);

  return (
    <div className="section">
      <img
        src="/assets/images/bg_calculator.png"
        className="section-bg -z-[4]"
      />
      <img
        src="/assets/images/calculator_coin.png"
        className="w-[70%] md:w-[500px] absolute bottom-0 left-0 md:top-[50%] md:left-[50%] transform md:-translate-x-1/4 -z-[3]"
      />

      <div className="w-full md:w-auto flex flex-col md:flex-row justify-between gap-5 md:gap-24">
        <div className="w-full md:w-[500px] flex flex-col gap-6 md:pt-8 md:pb-15">
          <div className="bg-[#86755466] rounded-[25px] border-[4px] border-[#DBC9C966] flex flex-col items-center gap-[10px] px-5 md:px-10 py-5">
            <div className="text-[32px] font-technology border border-[#DBC9C966] rounded-[20px] w-full text-center">
              ENTER HOW MUCH $BETURA
              <br />
              YOU WILL RECEIVE
            </div>
            <input
              className="w-full h-[80px] bg-transparent outline-none font-technology text-[80px] text-right"
              value={count}
              onChange={(e) => {
                setCount(e.target.value.replace(/[^0-9.]/g, ""));
              }}
            />
          </div>
          <div className="w-full p-[5px]">
            <button className="btn-gradient !w-full" onClick={handleCalc}>
              Calculate Now
            </button>
          </div>
          <div className="w-full h-[120px] flex justify-center items-center font-amcap text-6xl bg-[#867554] bg-opacity-40 rounded-[25px]">
            ${price.toLocaleString()}
          </div>
        </div>
        <img className="w-[500px] -z-[4]" src="/assets/images/calculator.png" />
      </div>
    </div>
  );
};

export default Calculator;
