import { Link } from "react-router-dom";
import logo from "/shortcut.png";
import instagram from "/instagram.png";
import facebook from "/facebook.png";
import twitter from "/twitter.png";
import odLogo from "/od-logo.png";
import sendIcon from "/icons/send.svg";

export const Footer = () => {
  return (
    <footer className="pt-[30px] 3sm:pt-[60px] pb-[115px] border-t-[1px] border-[#fff]">
      <div className="max-w-[1290px] mt-[0px] mr-auto mb-[0px] ml-auto pr-[15px] pl-[15px]">
        <div className="flex justify-between mb-[25px] 3sm:flex-col 3sm:gap-[50px]">
          <div className="flex flex-col gap-[72px] w-[33.33%] 3sm:w-[100%]">
            <Link
              to={"/"}
              className="flex gap-[16px] items-center 3sm:gap-[8px]"
            >
              <img src={logo} alt="" />
              <p className="text-white font-['Minecraft'] text-[30px] 3sm:text-[24px] 3sm:leading-[120%]">
                Hubber expo
              </p>
            </Link>
            <ul className="flex gap-[20px]">
              <li>
                <Link to={"/"}>
                  <img
                    src={instagram}
                    alt="instagram"
                    className="3sm:w-[40px]"
                  />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img
                    src={facebook}
                    alt="facebook"
                    className="3sm:w-[40px]"
                  />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={twitter} 
                  alt="twitter" 
                  className="3sm:w-[40px]" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[33.33%] 3sm:w-[100%]">
            <div className="flex flex-col gap-[20px] items-start">
              <img
                src={odLogo}
                alt="Ocean design logo"
                className="w-[102px] flex self-start"
              />
              <p className="text-[20px] text-center">
                Made by <br /> Ocean Studio
              </p>
            </div>
          </div>
          <div className="w-[33.33%] 3sm:w-[100%]">
            <ul className="flex flex-col gap-[30px] 3sm:grid 3sm:grid-cols-2 3sm:grid-rows-3">
              <li>
                <Link className="text-[18px] font-[300] hover:underline">
                  Flashback
                </Link>
              </li>
              <li>
                <Link className="text-[18px] font-[300] hover:underline">
                  Discussion topics
                </Link>
              </li>
              <li>
                <Link className="text-[18px] font-[300] hover:underline">
                  Speakers
                </Link>
              </li>
              <li>
                <Link className="text-[18px] font-[300] hover:underline">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link className="text-[18px] font-[300] hover:underline">
                  Countdown
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex max-w-[630px] border-[#fff] border-[1px] rounded-[40px]">
          <input
            type="text"
            placeholder="Type a message"
            className="text-[22px] bg-[#161616] pt-[14px] pb-[14px] pl-[40px] pr-[40px] w-[100%] rounded-l-[40px]
            3sm:text-[18px] pl-[20px] pr-[20px] pt-[10px] pb-[10px]"
          />
          <a
            href="#"
            className="bg-[#FE7A01] rounded-r-[40px] w-[90px] 3sm:w-[60px] flex justify-center items-center"
          >
            <img className="w-[45px] 3sm:w-[30px]" src={sendIcon} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};
