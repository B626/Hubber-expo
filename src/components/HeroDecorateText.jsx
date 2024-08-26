export const HeroDecorateText = ({text}) => {
   return (
     <span
       className="hero__deco-text text-[55px] 3sm:text-[30px] 2sm:text-[36px]
       uppercase font-[800] text-[#080808] bg-gradient-to-r 
          from-[#7868FD] to-[#69A0F2] text-right md:text-[40px]"
     >
       {text}
     </span>
   );
}