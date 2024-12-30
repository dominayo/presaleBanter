const Whitepaper = () => {
  return (
    <div className="section !flex-col-reverse gap-10" id="whitepaper">
      <img src="/assets/images/bg_whitepaper.png" className="section-bg" />
      <img
        src="/assets/images/whitepaper.png"
        className="w-[80%] md:w-auto md:h-[70%] md:absolute md:top-[50%] md:right-[50%] md:transform md:-translate-y-1/2"
      />
      <div className="flex flex-col items-center md:absolute md:left-[60%] md:top-[200px] gap-10">
        <div className="font-balibold uppercase text-center text-4xl md:text-6xl md:leading-[72px]">
          LEARN MORE ABOUT
          <br />
          $BANTER
        </div>
        <button className="btn-gradient !w-full">Download Whitepaper</button>
      </div>
    </div>
  );
};

export default Whitepaper;
