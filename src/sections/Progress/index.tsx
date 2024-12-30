import { useEffect, useState } from "react";
import { socket } from "../../utils/socket.ts";

const Progress = () => {
  const [tier, setTier] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [progressList, setProgressList] = useState<number[]>([]);
  const [totalProgress, setTotalProgress] = useState(0);

  useEffect(() => {
    setTotalProgress(70);
  }, []);

  const createTierArray = (tierNumber, tierProgress) => {
    const arrayLength = 10;
    const result = new Array(arrayLength).fill(0); // Initialize array with 0s

    // Fill the first (tierNumber - 1) indices with 100
    for (let i = 0; i < tierNumber - 1; i++) {
      result[i] = 100;
    }

    // Fill the (tierNumber - 1)-th index with tierProgress
    if (tierNumber - 1 < arrayLength) {
      result[tierNumber - 1] = tierProgress;
    }

    return result;
  };

  const handleProgressUpdate = (data) => {
    setTier(data.tierNumber);
    setCurrentPrice(data.currentPrice);
    setProgressList(
      createTierArray(data.tierNumber, data.tierProgress.toFixed(2)),
    );
    setTotalProgress((data.tierNumber - 1) * 10 + data.tierProgress / 10);
  };

  useEffect(() => {
    socket.on("tierPriceUpdate", handleProgressUpdate);

    return () => {
      socket.off("tierPriceUpdate", handleProgressUpdate);
    };
  }, []);

  return (
    <div className="section">
      <img src="/assets/images/bg_progress.png" className="section-bg" />
      <img
        src="/assets/images/cylinders.png"
        className="absolute right-0 bottom-0 md:bottom-[50%] md:transform md:translate-y-1/2 w-full md:w-[70%]"
      />
      <div className="font-balibold uppercase text-center text-5xl md:text-6xl">
        Presale Progress
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center mt-12 gap-12">
        <div>
          <img src="/assets/images/tier.png" className="w-full md:w-[500px]" />
          <div className="absolute left-0 top-0 w-full h-full flex flex-col items-center justify-center">
            <div className="font-anton text-[40px]">TIER {tier}</div>
            <div className="font-technology text-[32px] leading-[32px]">
              CURRENT PRICE
            </div>
            <div className="font-anton text-[36px]">${currentPrice}</div>
          </div>
        </div>
        <div className="w-full md:w-auto flex flex-col gap-3">
          {progressList.map((progress, index) => (
            <div className="flex items-center gap-4" key={index}>
              <div className="w-full md:w-[400px] h-[40px] bg-[rgba(109,90,73,0.8)] border-4 border-[#FDF6CD] shadow-[0_20px_10px_rgba(0,0,0,0.25),0_0_10px_5px_#FFAD32] rounded-[16px] flex items-center justify-center">
                <div className="font-anton text-2xl z-[2]">
                  TIER {index + 1}
                </div>
                <div
                  className={`flex absolute left-0 top-0 h-full bg-gradient-to-r from-[#4F1503] via-[#CC7A3C] to-[#CC7A3C] rounded-[12px]`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-center w-28 md:w-24 h-[36px] leading-[40px] bg-[rgba(45,11,0,0.8)] rounded-[16px] font-technology text-[28px]">
                {progress}%
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-12 flex flex-col md:flex-row items-center justify-center gap-3">
        <div className="w-full md:w-[50%] h-[42px] bg-[#6D5A49] border-4 border-[#FDF6CD] shadow-[0_10px_4px_rgba(0,0,0,0.5),0_0_30px_10px_#FFAD32] rounded-[20px]">
          <div
            className="h-full bg-gradient-to-r from-[#4F1503] via-[#CC7A3C] to-[#CC7A3C] rounded-[20px]"
            style={{ width: `${totalProgress}%` }}
          ></div>
        </div>
        <div className="font-technology text-[28px]">ON PROGRESS...</div>
      </div>
    </div>
  );
};

export default Progress;
