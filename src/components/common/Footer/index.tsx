import Logo from "../../images/Logo.tsx";

import "./index.scss";

const Footer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center px-5 md:px-32 gap-5 py-12 bg-black">
      <div className="w-full flex justify-center md:w-auto">
        <a className="block w-[160px]">
          <Logo />
        </a>
      </div>
      <div className="flex w-full justify-between md:w-auto">
        <div className="flex flex-col gap-2 left-bar md:ml-[30px]">
          <div className="font-robotoBold text-2xl">Quick Links</div>
          <a className="font-roboto text-lg text-[#f2d33c]">Tokenomics</a>
          <a className="font-roboto text-lg text-[#f2d33c]">How to Buy</a>
          <a className="font-roboto text-lg text-[#f2d33c]">Contact</a>
        </div>
        <div className="flex flex-col gap-2 left-bar md:ml-[30px]">
          <div className="font-robotoBold text-2xl">Social Links</div>
          <a className="font-roboto text-lg text-[#f2d33c]">Twitter</a>
          <a className="font-roboto text-lg text-[#f2d33c]">Telegram</a>
          <a className="font-roboto text-lg text-[#f2d33c]">Discord</a>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 mt-5 md:mt-0 md:ml-auto">
        <div className="flex gap-5">
          <a className="w-16">
            <img src="/assets/images/telegram.png" />
          </a>
          <a className="w-16">
            <img src="/assets/images/twitter.png" />
          </a>
          <a className="w-16">
            <img src="/assets/images/discord.png" />
          </a>
        </div>
        <div className="font-robotoBold text-2xl">
          © 2024, All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
