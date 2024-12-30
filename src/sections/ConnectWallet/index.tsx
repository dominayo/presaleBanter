import TokenDropdown from "../../components/common/TokenDropdown";
import Betura from "../../components/images/Betura";
import BinanceChain from "../../components/images/BinanceChain";
import EthereumChain from "../../components/images/EthereumChain";
import SolanaChain from "../../components/images/SolanaChain";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { bsc, mainnet, solana } from "@reown/appkit/networks";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCallback, useEffect, useState } from "react";
import { BaseAPI } from "../../utils/api/BaseAPI.ts";

const ConnectWallet = () => {
  const { open } = useAppKit();
  const { chainId, isConnected } = useAppKitAccount();
  const [inputEth, setInputEth] = useState("");
  const [inputSol, setInputSol] = useState("");
  const [inputBnb, setInputBnb] = useState("");
  const [token, setToken] = useState("");

  const [beturaPrice, setBeturaPrice] = useState(0);
  const [tokenPriceData, setTokenPriceData] = useState([]);
  const [beturaCount, setBeturaCount] = useState(0);

  const ethereumChainId = mainnet.id;
  const solanaChainId = solana.id;
  const bscChainId = bsc.id;

  const showToast = useCallback((msg) => {
    toast.error(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  }, []);

  const handleSelect = (value: string) => {
    setToken(value);
  };

  const getBeturaPrice = async () => {
    const res = await BaseAPI.callAPI({
      url: "/tokenPrice",
      method: "GET",
    });

    if (!res.error) setBeturaPrice(res.data.currentPrice);
  };

  const getTokenPrices = async () => {
    const res = await BaseAPI.callAPI({
      url: "/prices",
      method: "GET",
    });

    if (!res.error) setTokenPriceData(res.data);
  };

  const handleConnect = async () => {
    if (isConnected) {
      let value = "";
      if (chainId === solanaChainId) value = inputSol;
      else if (chainId === ethereumChainId) value = inputEth;
      else if (chainId === bscChainId) value = inputBnb;

      if (value === "0" || value === "") {
        showToast("Please input amount");
        return;
      }
    } else {
      await open();
    }
  };

  useEffect(() => {
    if (token === "") return;

    getTokenPrices();
  }, [token]);

  useEffect(() => {
    if (token === "" || tokenPriceData.length < 1) return;
    const tokenPrice = tokenPriceData.find(
      (item) => item.token === token,
    ).priceInUSD;
    if (beturaPrice) {
      if (chainId === ethereumChainId)
        setBeturaCount(Math.floor((tokenPrice * inputEth) / beturaPrice));
      else if (chainId === solanaChainId)
        setBeturaCount(Math.floor((tokenPrice * inputSol) / beturaPrice));
      else if (chainId === bscChainId)
        setBeturaCount(Math.floor((tokenPrice * inputBnb) / beturaPrice));
    }
  }, [inputEth, inputSol, inputBnb, beturaPrice, token, tokenPriceData]);

  useEffect(() => {
    if (chainId === ethereumChainId) setToken("ETH");
    else if (chainId === solanaChainId) setToken("SOL");
    else if (chainId === bscChainId) setToken("BNB");
    getBeturaPrice();
    getTokenPrices();
  }, [chainId]);

  return (
    <div className="section !p-0" id="how_to_buy">
      <ToastContainer />
      <img
        src="/assets/images/bg_connect_walet.png"
        className="section-bg -z-[3]"
      />
      <img
        src="/assets/images/chips.png"
        className="absolute left-0 md:left-[300px] bottom-[50px] w-[50%] md:w-auto md:h-[50%] -z-[3]"
      />
      <div className="w-full md:pt-4 md:w-[70%]">
        <img
          src="/assets/images/border_connect_wallet.png"
          className="absolute w-full h-full -z-[2]"
        />
        <div className="flex flex-col items-center justify-center pl-16 pr-20 py-36 md:px-0 md:py-40">
          <div
            className={`w-full flex flex-col md:flex-row items-center justify-center ${chainId !== solanaChainId ? "opacity-20" : ""}`}
          >
            <div className="w-full md:w-auto flex items-center">
              <SolanaChain />
              <TokenDropdown
                disabled={chainId !== solanaChainId}
                options={["SOL", "USDT", "USDC"]}
                onSelect={handleSelect}
              />
            </div>
            <input
              className="ml-5 px-4 w-full md:w-96 h-12 text-[24px] font-roboto outline-none bg-transparent border-2 border-[#EEE5BA] rounded-[6px]"
              value={inputSol}
              onChange={(e) =>
                setInputSol(e.target.value.replace(/[^0-9.]/g, ""))
              }
              disabled={chainId !== solanaChainId}
            />
          </div>
          <div
            className={`w-full flex flex-col md:flex-row items-center justify-center ${chainId !== ethereumChainId ? "opacity-20" : ""}`}
          >
            <div className="w-full md:w-auto flex items-center">
              <EthereumChain />
              <TokenDropdown
                disabled={chainId !== ethereumChainId}
                options={["ETH", "USDT", "USDC"]}
                onSelect={handleSelect}
              />
            </div>
            <input
              className="ml-5 px-4 w-full md:w-96 h-12 text-[24px] font-roboto outline-none bg-transparent border-2 border-[#EEE5BA] rounded-[6px]"
              value={inputEth}
              onChange={(e) =>
                setInputEth(e.target.value.replace(/[^0-9.]/g, ""))
              }
              disabled={chainId !== ethereumChainId}
            />
          </div>
          <div
            className={`w-full flex flex-col md:flex-row items-center justify-center ${chainId !== bscChainId ? "opacity-20" : ""}`}
          >
            <div className="w-full md:w-auto flex items-center">
              <BinanceChain />
              <TokenDropdown
                disabled={chainId !== bscChainId}
                options={["BNB", "USDT", "USDC"]}
                onSelect={handleSelect}
              />
            </div>
            <input
              className="ml-5 px-4 w-full md:w-96 h-12 text-[24px] font-roboto outline-none bg-transparent border-2 border-[#EEE5BA] rounded-[6px]"
              value={inputBnb}
              onChange={(e) =>
                setInputBnb(e.target.value.replace(/[^0-9.]/g, ""))
              }
              disabled={chainId !== bscChainId}
            />
          </div>
          <div className="font-roboto text-2xl mt-2 text-center stroke-text-2">
            NUMBER OF TOKENS YOU WILL RECEIVE
          </div>
          <div className="w-full md:w-auto flex items-center">
            <Betura />
            <input
              value={beturaCount}
              className="w-full md:w-96 text-[24px] font-roboto outline-none bg-transparent border-2 border-[#EEE5BA] rounded-[6px] h-[42px] px-4"
              disabled
            />
          </div>
          <button
            className="btn-gradient !bg-gradient-to-r from-[#4F1503] via-[#CC7A3C] to-[#CC7A3C] !w-full md:!w-80 mt-2"
            onClick={handleConnect}
          >
            {isConnected ? "Buy Now" : "Connect Wallet"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
