export const TopicsCard = ({title, speaker}) => {
  return (
    <div
      className="w-[33.33%] p-[20px] flex flex-col justify-between min-h-[220px] hover:from-[#6454F0] transition-all ease-in duration-[2000ms]
          border-[#212121] border-r-[3px] bg-gradient-to-b from-[#212121] to-[#080808] relative transition"
    >
      <h3 className="font-[700] text-[26px] leading-[110%]">
        {title}
      </h3>
      <p className="text-[20px] text-[#b1b1b1] text-right relative z-[2]">
        {speaker}
      </p>
      <div className="absolute bottom-0 right-0 bg-gradient-to-l from-[#6454f0] to-[#111111] w-[240px] h-[68px] opacity-[.17]"></div>
    </div>
  );
};
