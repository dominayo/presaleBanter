import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { useState } from "react";
import Logo from "../../images/Logo";

import "../../../styles/index.scss";
import "./index.scss";
import { Utils } from "../../../utils/utils.ts";

const Header = () => {
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleConnect = async () => {
    await open();
  };

  return (
    <header className="header fixed top-0 left-0 right-0">
      <div className="flex items-center gap-4">
        <a className="w-[65px] h-[63px] order-2 md:order-none" href="#home">
          <Logo />
        </a>
        <button className="md:order-1 btn-hamburger" onClick={toggleNav}>
          ☰
        </button>
        <nav className={isNavOpen ? "open" : ""}>
          {isNavOpen && <div className="backdrop" onClick={closeNav}></div>}
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#tokenomics">Tokenomics</a>
            </li>
            <li>
              <a href="#how_to_buy">How to Buy</a>
            </li>
            <li>
              <a href="#whitepaper">Whitepaper</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <button
        className="btn-gradient outline-none !text-[24px] !w-[200px] gap-[20px]"
        onClick={handleConnect}
      >
        {isConnected ? (
          Utils.formatWalletAddress(address as string)
        ) : (
          <>
            Wallet
            <img
              src="/assets/images/wallet-icon.png"
              className="w-[32px]"
              alt="Wallet Icon"
            />
          </>
        )}
      </button>
    </header>
  );
};

export default Header;
