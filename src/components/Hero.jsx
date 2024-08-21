import { Link } from "react-router-dom";
import triangles from "/hero/triangles.png"
import trianglesBlur from "/hero/triangles-blur.png"
import orbit from "/hero/orbit.png"
import lines from "/hero/lines.png"
import { HeroDecorateText } from "./HeroDecorateText";

export const Hero = () => {
  return (
    <section className="pb-[167px] 3sm:pb-[100px]">
      <div
        className="max-w-[1290px] mt-[0px] mr-auto mb-[0px] 
      ml-auto pr-[15px] pl-[15px] flex justify-between relative
      3sm:flex-col 3sm:gap-[120px]
      "
      >
        <div className="mt-[170px] 3sm:mt-[70px] max-w-[719px] relative">
          <img
            src={triangles}
            alt=""
            className="absolute top-[-100px] 3sm:top-[-70px]"
          />
          <div className="flex flex-col gap-[24px]">
            <h1 className="uppercase text-[60px] font-[700] leading-[110%] 3sm:text-[30px]">
              Blockchain & Crypto <br className="max-[992px]:hidden" />{" "}
              conference
            </h1>
            <p className="text-[#b1b1b1] text-[18px]">
              HubberExpo is a premier blockchain conference network that brings
              together influential figures and industry experts to reshape the
              future of finance
            </p>
            <Link
              to={"/"}
              className="uppercase text-white font-['Minecraft'] text-[25px] pt-[20px]
               pb-[20px] pr-[72px] pl-[72px] bg-gradient-to-r from-[#9E00FF] to-[#6AAAF3] 
               flex self-start rounded-bl-[27px] h-[70px]
               3sm:pl-[30px] 3sm:pr-[30px]
               "
            >
              Buy ticket
            </Link>
          </div>
          <div className="absolute bottom-0 3sm:bottom-[-90px]">
            <div className="flex justify-between">
              <p className="text-[#B1B1B1] text-[20px]">September 30, 2024</p>
              <p className="text-[#B1B1B1] font-[700] text-[20px]">5: 30</p>
            </div>
            <p className="text-white text-[20px] font-[700]">
              Dubai, ATLANTIS, THE PALM
            </p>
          </div>
          <img
            src={trianglesBlur}
            alt=""
            className="absolute bottom-[-230px]"
          />
        </div>
        <div className="flex flex-col gap-[20px] 3sm:gap-[5px] relative">
          <img
            src={orbit}
            alt=""
            className="absolute top-0 left-[80%] translate-x-[-80%] 3sm:w-[140px] 2sm:w-[180px]"
          />
          <HeroDecorateText text={"Web 3.0"} />
          <HeroDecorateText text={"Metaverse"} />
          <HeroDecorateText text={"Stablecoins"} />
          <HeroDecorateText text={"Defi and cefi"} />
          <HeroDecorateText text={"Central bank"} />
          <HeroDecorateText text={"Esg impact"} />
          <HeroDecorateText text={"Ino"} />
          <img
            src={lines}
            alt=""
            className="absolute bottom-[60px] left-[-70px]"
          />
        </div>
        <Link
          className="absolute bottom-[-100px] 3sm:bottom-[-70px] left-[50%] translate-x-[-50%] pt-[15px] 
          pb-[15px] pl-[17px] pr-[17px] border-solid border-[1px] rounded-[100px]"
        >
          <img src="/public/icons/arrow-down.svg" alt="+" />
        </Link>
      </div>
    </section>
  );
};
