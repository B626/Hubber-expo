export const Flash = () => {
  return (
    <section className="pt-[43px] pb-[100px] relative">
      <div className="max-w-[1290px] mt-[0px] mr-auto mb-[0px] ml-auto pr-[15px] pl-[15px] flex justify-between 3sm:flex-col">
        <div className="max-w-[406px]">
          <h2 className="text-[40px] leading-[110%] mb-[27px] leading-[110%] z-[3] relative">
            <span className="font-[700] mb-16 relative">
              Flashback from last
            </span>{" "}
            <br />
            conference in 2023
          </h2>
          <p className="text-[18px] relative z-[3]">
            These are some pictures taken during last conference in Dubai These
            are some pictures taken during last conference in Dubai These are
            some pictures taken during last conference in Dubai These are some
            pictures taken during last
          </p>
        </div>
        <div className="mt-[-40px] 3sm:mt-[20px]">
          <p className="text-[#FE7A01] text-[30px] relative z-[3]">Photo collection</p>
          <div className="flex gap-[43px] 3sm:gap-[10px] 3sm:justify-between 3sm:mb-[20px]">
            <img src="/public/flash/1.png" className="3sm:w-[80px] relative z-[3]" alt="rr" />
            <img src="/public/flash/2.png" className="3sm:w-[80px] relative z-[3]" alt="rr" />
            <img src="/public/flash/3.png" className="3sm:w-[80px] relative z-[3]" alt="rr" />
          </div>
          <span
            className="hero__deco-text text-[115px] text-[#080808]
           font-['Minecraft'] uppercase bg-gradient-to-r from-[#9E00FF] to-[#6DDBF4] bg-[center_top_100px]
           3sm:text-[70px] 3sm:leading-[100%]"
          >
            We are team
          </span>
        </div>
      </div>
      <img
        className="absolute bottom-[30px] left-0 w-[550px] 3sm:top-[-30px]"
        src="/public/flash/bg.png"
        alt=""
      />
    </section>
  );
};
