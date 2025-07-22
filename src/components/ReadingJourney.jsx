import starIcon from "../assets/images/icon-star.svg";
import patternArrow from "../assets/images/pattern-arrow.svg"; 

const ReadingJourney = () => {
  return (
    <section className="flex justify-center">
      <div className="bg-[#FAF5F3] w-full lg:max-w-[73.125rem] flex flex-col lg:items-center px-4 py-20 gap-16 rounded-xl">
        <h1 className="font-martian font-semibold text-[2.125em]/11 sm:text-[3.125em] leading-16 tracking-[-2px] lg:w-[15ch] lg:text-center">
          Your tech reading journey
        </h1>
        <div className="flex flex-col lg:flex-row gap-6 justify-around font-martian font-semibold text-lg/6 tracking-[-1px]">
          <div className="flex flex-col gap-4 lg:max-w-[14.156rem]">
            <p className="flex justify-center items-center size-[40px] border-2 rounded-sm">
              1
            </p>
            <p>Choose your membership tier</p>
            <img src={patternArrow} alt="Pattern Arrow" className="absolute ml-35" />
          </div>
          <div className="flex flex-col gap-4 lg:max-w-[14.156rem]">
            <p className="flex justify-center items-center size-[40px] border-2 rounded-sm">
              2
            </p>
            <p>Get your monthly book selection</p>
            <img src={patternArrow} alt="Pattern Arrow" className="absolute ml-35" />
          </div>
          <div className="flex flex-col gap-4 lg:max-w-[14.156rem]">
            <p className="flex justify-center items-center size-[40px] border-2 rounded-sm">
              3
            </p>
            <p>Join our discussion forums</p>
            <img src={patternArrow} alt="Pattern Arrow" className="absolute ml-35" />
          </div>
          <div className="flex flex-col gap-4 lg:max-w-[14.156rem]">
            <p className="flex justify-center items-center size-[40px] border-2 rounded-sm">
              4
            </p>
            <p>Attend exclusive meetups</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadingJourney;
