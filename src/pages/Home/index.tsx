import Header from "../../components/common/Header";
import Calculator from "../../sections/Calculator";
import Community from "../../sections/Community";
import ConnectWallet from "../../sections/ConnectWallet";
import HeroSection from "../../sections/Hero";
import Progress from "../../sections/Progress";
import Referral from "../../sections/Referral";
import TokenInfoSection from "../../sections/TokenInfo";
import Tokenomics from "../../sections/Tokenomics";
import Whitepaper from "../../sections/Whitepaper";
import Footer from "../../components/common/Footer";

const Home = () => {
  return (
    <div className="page-home">
      <Header />
      <HeroSection />
      <TokenInfoSection />
      <Tokenomics />
      <Progress />
      <ConnectWallet />
      <Referral />
      <Calculator />
      <Whitepaper />
      <Community />
      <Footer />
    </div>
  );
};

export default Home;
