import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export const Count = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("September 1, 2024 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <section className="pt-[165px] 3sm:pt-[50px] pb-[165px] 3sm:pb-[50px] bg-[url('/public/count/bg.png')] bg-no-repeat bg-center bg-cover">
      <div className="max-w-[1290px] mt-[0px] mr-auto mb-[0px] ml-auto pr-[15px] pl-[15px]">
        <div className="max-w-[613px] flex flex-col justify-center items-center gap-[45px] 3sm:gap-[30px]">
          <h2 className="text-[55px] font-[700] 3sm:text-[40px]">
            Event starts in
          </h2>
          <div className="flex gap-[37px] 3sm:gap-[15px]">
            <div className="text-center">
              <span
                className="text-[70px] font-[Minecraft] max-h-[130px] inline-block 
              p-[23px] bg-gradient-to-b from-[#9E00FF] to-[#5F0099] rounded-[18px] mb-[6px] w-[100%] 3sm:text-[30px] 3sm:leading-[100%]
              3sm:p-[12px] 3sm:w-[60px]"
              >
                {timerDays.toString().length == 1 ? "0" + timerDays : timerDays}
              </span>
              <p className="text-[24px] text-[#B1B1B1] 3sm:text-[18px]">days</p>
            </div>
            <div className="text-center">
              <span
                className="text-[70px] font-[Minecraft] max-h-[130px] inline-block
              p-[23px] bg-gradient-to-b from-[#9E00FF] to-[#5F0099] rounded-[18px] mb-[6px] w-[100%] 3sm:text-[30px] 3sm:leading-[100%]
              3sm:p-[12px] 3sm:w-[60px]"
              >
                {timerHours.toString().length == 1
                  ? "0" + timerHours
                  : timerHours}
              </span>
              <p className="text-[24px] text-[#B1B1B1] 3sm:text-[18px]">
                hours
              </p>
            </div>
            <div className="text-center">
              <span
                className="text-[70px] font-[Minecraft] max-h-[130px] inline-block 
              p-[23px] bg-gradient-to-b from-[#9E00FF] to-[#5F0099] rounded-[18px] mb-[6px] w-[100%] 3sm:text-[30px] 3sm:leading-[100%]
              3sm:p-[12px] 3sm:w-[60px]"
              >
                {timerMinutes.toString().length == 1
                  ? "0" + timerMinutes
                  : timerMinutes}
              </span>
              <p className="text-[24px] text-[#B1B1B1] 3sm:text-[18px]">
                minutes
              </p>
            </div>
            <div className="text-center">
              <span
                className="text-[70px] font-[Minecraft] max-h-[130px] inline-block 
              p-[23px] bg-gradient-to-b from-[#9E00FF] to-[#5F0099] rounded-[18px] mb-[6px] w-[100%] 3sm:text-[30px] 3sm:leading-[100%]
              3sm:p-[12px] 3sm:w-[60px]"
              >
                {timerSeconds.toString().length == 1
                  ? "0" + timerSeconds
                  : timerSeconds}
              </span>
              <p className="text-[24px] text-[#B1B1B1] 3sm:text-[18px]">
                seconds
              </p>
            </div>
          </div>
          <Link
            to={"/"}
            className="uppercase text-white font-['Minecraft'] text-[25px] pt-[20px]
               pb-[20px] pr-[72px] pl-[72px] 3sm:pr-[36px] 3sm:pl-[36px] bg-gradient-to-r from-[#9E00FF] to-[#FE7A01] flex center rounded-[27px] h-[70px]"
          >
            Buy ticket
          </Link>
          {/* <Countdown seconds={120}/> */}
        </div>
      </div>
    </section>
  );
};
