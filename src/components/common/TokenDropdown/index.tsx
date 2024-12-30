import { useEffect, useState } from "react";
import Binance from "../../images/Binance";
import DropdownIcon from "../../images/DropdownIcon";
import Ethereum from "../../images/Ethereum";
import Solana from "../../images/Solana";
import Usdt from "../../images/Usdt.tsx";
import Usdc from "../../images/Usdc.tsx";

interface IDropdownProps {
  disabled?: boolean;
  options: string[];
  onSelect: (value: string) => void;
}

const TokenDropdown: React.FC<IDropdownProps> = ({
  options,
  onSelect,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => {
    if (!disabled) setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    closeDropdown();
  };

  useEffect(() => {
    setSelectedOption(options[0]);
  }, []);

  return (
    <div className="w-[200px]">
      {/* Dropdown Trigger */}
      <div
        onClick={toggleDropdown}
        className="border-2 px-4 border-[#EEE5BA] text-2xl font-roboto bg-transparent rounded-[6px] h-12 cursor-pointer flex items-center"
      >
        {selectedOption === "SOL" && <Solana />}
        {selectedOption === "ETH" && <Ethereum />}
        {selectedOption === "BNB" && <Binance />}
        {selectedOption === "USDT" && <Usdt />}
        {selectedOption === "USDC" && <Usdc />}
        <span className="ml-2">{selectedOption}</span>
        <div className={`ml-auto ${isOpen && "rotate-180"}`}>
          <DropdownIcon />
        </div>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <>
          <div onClick={closeDropdown} className="fixed inset-0 z-10"></div>
          <div className="absolute mt-1 w-full border-2 border-[#EEE5BA] bg-[#625443] rounded-[6px] z-20">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => handleSelect(option)}
                className="px-4 h-12 leading-12 text-2xl font-roboto hover:bg-[#00000020] cursor-pointer flex items-center"
              >
                {option === "SOL" && <Solana />}
                {option === "ETH" && <Ethereum />}
                {option === "BNB" && <Binance />}
                {option === "USDT" && <Usdt />}
                {option === "USDC" && <Usdc />}
                <span className="ml-2">{option}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TokenDropdown;
