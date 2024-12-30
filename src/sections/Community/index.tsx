import Discord from "../../components/images/Discord";
import Telegram from "../../components/images/Telegram";
import TwitterX from "../../components/images/TwitterX";

const Community = () => {
  return (
    <div className="section" id="contact">
      <img
        src="/assets/images/bg_community.png"
        className="section-bg"
        alt=""
      />
      <div className="flex flex-col gap-4 items-center md:absolute md:bottom-[50%] md:left-[50%]">
        <div className="flex gap-8 items-center">
          <button className="w-16 md:w-40">
            <Telegram />
          </button>
          <button className="w-16 md:w-40">
            <TwitterX />
          </button>
          <button className="w-16 md:w-40">
            <Discord />
          </button>
        </div>
        <div className="font-balibold text-2xl md:text-4xl px-8 py-3 bg-[#655242] bg-opacity-70 rounded-[24px]">
          Join the $Betura Community
        </div>
      </div>
    </div>
  );
};

export default Community;
