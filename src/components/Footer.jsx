import starIcon from "../assets/images/icon-star.svg";
import avatars from "../assets/images/image-avatars.webp";
import blueskyLogo from "../assets/images/logo-bluesky.svg"; 
import linkedinLogo from "../assets/images/logo-linkedin.svg"; 

const Footer = () => {
  return (
    <div className="bg-[#062630] text-[#FAF5F3] h-[521px] pt-20 px-4 lg:px-[8.438rem] flex flex-col justify-between rounded-t-2xl">
      <div className="flex flex-col items-center">
        <h1 className="font-martian text-[2.125em]/11 sm:text-[3.125em]/16 tracking-[-2px] text-center max-w-[18ch] lg:w-[685px]">
          Ready to debug your reading list?
        </h1>
        <button className="mt-10 max-w-full hover:bg-gradient-to-r from-[#385159] to-[#062630] hover:cursor-pointer lg:w-[380px] h-[63px] border-2 border-white rounded-lg">
          Review membership options
        </button>
        <div className="mt-6 flex gap-3">
          <img src={avatars} alt="" className="h-[40px]" />
          <div>
            <div className="flex">
              <img src={starIcon} alt="Review Star" />
              <img src={starIcon} alt="Review Star" />
              <img src={starIcon} alt="Review Star" />
              <img src={starIcon} alt="Review Star" />
            </div>
            <p className="font-martian text-sm">
              200+ developers joined already
            </p>
          </div>
        </div>
      </div>
      <div className="h-[70px] flex flex-col lg:flex-row items-center justify-center lg:justify-between border-t border-white">
        <p>© 2024 - Tech Book Club</p>
        <div className="flex gap-6">
            <img src={blueskyLogo} alt="Blue Sky Logo" />
            <img src={linkedinLogo} alt="LinkedIn Logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
