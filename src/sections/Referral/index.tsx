const Referral = () => {
  return (
    <div className="section">
      <img src="/assets/images/bg_referral.png" className="-z-[2] section-bg" />
      <div className="">
        <img
          src="/assets/images/box_referral.png"
          className="-z-[2] h-[600px]"
        />
        <div className="absolute left-0 top-0 w-full h-full flex flex-col items-center justify-evenly md:justify-center pb-16">
          <div className="font-anton text-[52px] leading-[78px]">
            Referral System
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/assets/images/referral_hierachy.png"
              className="w-[50%]"
            />
            <div className="mr-[30px] bg-[linear-gradient(0deg,rgba(127,117,100,0.89),rgba(127,117,100,0.89))] shadow-[0_4px_4px_rgba(0,0,0,0.25),0_0_5px_8px_rgba(255,202,85,0.29)] rounded-[14px] flex flex-col items-center p-[10px]">
              <div className="font-anton text-[40px]">500</div>
              <img src="/assets/images/users.png" className="w-[50px] mt-1" />
              <div className="font-robotoBold text-[20px]">Referrals Made</div>
              <div className="font-anton text-[32px] mt-3">2,000</div>
              <div className="font-anton text-[20px]">$$$</div>
              <div className="font-robotoBold text-[20px]">Earnings</div>
            </div>
          </div>
          <button className="!w-[80%] font-anton btn-gradient">
            Copy Referral Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default Referral;
