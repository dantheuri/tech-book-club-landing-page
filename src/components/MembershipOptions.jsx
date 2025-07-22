import checkIcon from "../assets/images/icon-check.svg";

const MembershipOptions = () => {
  return (
    <section className="flex justify-center">
      <div className="w-full lg:max-w-[73.125rem] flex flex-col lg:items-center gap-16 px-4 sm:px-0">
        <h1 className="font-martian font-semibold text-[2.125em]/11 sm:text-[3.125em] leading-16">
          Membership options
        </h1>
        <div className="w-full flex flex-wrap lg:justify-center lg:items-center gap-6">
          <div className="w-full md:w-[21.25rem] lg:max-w-[17.875rem] lg:h-[358px] border rounded-lg p-6">
            <h2 className="text-2xl font-semibold tracking-[-1px]">Starter</h2>
            <span className="flex items-center mt-4">
              <h3 className="font-martian font-semibold text-3xl">$19</h3>{" "}
              <p className="text-xl tracking-[-.5px]">/month</p>
            </span>
            <hr className="my-8" />
            <ul className="font-inter flex flex-col gap-4 text-xl tracking-[-.5px]">
              <li className="flex gap-4">
                <img src={checkIcon} alt="Checkmark Bullet" />
                <p>1 book/month</p>
              </li>
              <li className="flex gap-4">
                <img src={checkIcon} alt="Checkmark Bullet" />
                <p>Online Forums</p>
              </li>
            </ul>
            <button className="mt-8 uppercase bg-[#FFF5EF] border-2 rounded-lg font-martian font-semibold text-[1.125em] tracking-[-1px] w-full h-[63px]">
              Subscribe Now
            </button>
          </div>
          <div className="w-full md:w-[21.25rem] md:max-w-[21.875rem] h-[390px] border rounded-lg p-10 bg-[#FAF5F3]">
            <h2 className="text-2xl font-semibold tracking-[-1px]">Pro</h2>
            <span className="flex items-center mt-4">
              <h3 className="font-martian font-semibold text-3xl">$29</h3>
              <p className="text-xl tracking-[-.5px]">/month</p>
            </span>
            <hr className="my-8" />
            <ul className="font-inter flex flex-col gap-4 text-xl tracking-[-.5px]">
              <li className="flex gap-4">
                <img src={checkIcon} alt="Checkmark Bullet" />
                <p>2 books/month</p>
              </li>
              <li className="flex gap-4">
                <img src={checkIcon} alt="Checkmark Bullet" />
                <p>Virtual meetups</p>
              </li>
            </ul>
            <button className="mt-8 uppercase bg-[#FFF5EF] border-2 rounded-lg font-martian font-semibold text-[1.125em] tracking-[-1px] w-full h-[63px]">
              Subscribe Now
            </button>
          </div>
          <div className="w-full md:w-[21.25rem] lg:max-w-[17.875rem] h-[358px] border rounded-lg p-6">
            <h2 className="text-2xl font-semibold tracking-[-1px]">
              Enterprise
            </h2>
            <h3 className="font-martian font-semibold text-3xl mt-4">Custom</h3>
            <hr className="my-8" />
            <ul className="font-inter flex flex-col gap-4 text-xl tracking-[-.5px]">
              <li className="flex gap-4">
                <img src={checkIcon} alt="Checkmark Bullet" />
                <p>Team access</p>
              </li>
              <li className="flex gap-4">
                <img src={checkIcon} alt="Checkmark Bullet" />
                <p>Private sessions</p>
              </li>
            </ul>
            <button className="mt-8 uppercase bg-[#FFF5EF] border-2 rounded-lg font-martian font-semibold text-[1.125em] tracking-[-1px] w-full h-[63px]">
              Talk to us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipOptions;
