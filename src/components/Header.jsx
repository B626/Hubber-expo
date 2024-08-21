import { Link } from "react-router-dom";
import logo from "/public/shortcut.png";
import { HeaderLink } from "./HeaderLink";

export const Header = () => {
  return (
    <header className="h-[100%] pt-[10px] pb-[10px]">
      <div className="max-w-[1290px] mt-[0px] mr-auto mb-[0px] ml-auto pr-[15px] pl-[15px] flex items-center gap-[40px] justify-between">
        <Link to={"/"} className="flex gap-[16px] items-center 3sm:gap-[8px]">
          <img src={logo} alt="" className="3sm:w-[40px]" />
          <p className="text-white font-['Minecraft'] text-[30px] 3sm:text-[18px]">
            Hubber expo
          </p>
        </Link>
        <nav>
          <ul className="flex gap-[30px] items-center 3sm:hidden">
            <HeaderLink text={"Flashback"} link={"/"} />
            <HeaderLink text={"Discussion topics"} link={"/"} />
            <HeaderLink text={"Speakers"} link={"/"} />
            <HeaderLink text={"Sponsors"} link={"/"} />
            <HeaderLink text={"Countdown"} link={"/"} />
          </ul>
        </nav>
      </div>
    </header>
  );
};
