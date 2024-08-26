import { Link } from "react-router-dom";

export const HeaderLink = ({text, link}) => {
  return (
    <li className="list-none">
      <Link
        to={link}
        className="text-white text-[20px] font-[300] hover:underline decoration-[#FE7A01] 2md:text-[16px]"
      >
        {text}
      </Link>
    </li>
  );
};
