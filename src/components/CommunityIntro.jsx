import desktopNotAverageBookClubImage from "../assets/images/desktop/image-not-average-desktop.webp";
import mobileNotAverageBookClubImage from "../assets/images/mobile/image-not-average-mobile.webp"; 

export default function CommunityIntro() {
  return (
    <section className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center px-4">
      <div className="flex flex-col gap-6 justify-center lg:w-[530px]">
        <h1 className="font-martian font-semibold text-[2.125em]/11 sm:text-[3.125em] leading-16 lg:w-[16ch] tracking-[-2px]">
          Not your average book club
        </h1>
        <p className="text-xl/7 lg:max-w-[46ch] tracking-[-.5px]">
          Connect with a community that speaks your language - from <span className="font-bold">Python</span> to
          <span className="font-bold">TypeScript</span> and everything in between. Our discussions blend technical
          depth with practical applications.
        </p>
      </div>
      <picture>
        <source media="(max-width: 480px)" srcSet={mobileNotAverageBookClubImage} alt="Group of people reading a book" />
        <img
          src={desktopNotAverageBookClubImage}
          alt="Group of people reading a book"
          className="w-full lg:w-[560px] rounded-lg"
        />
      </picture>
    </section>
  );
}
