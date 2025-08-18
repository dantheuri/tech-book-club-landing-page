import desktopNotAverageBookClubImage from "../assets/images/desktop/image-not-average-desktop.webp";
import tabletNotAverageBookClubImage from "../assets/images/tablet/image-not-average-tablet.webp";
import mobileNotAverageBookClubImage from "../assets/images/mobile/image-not-average-mobile.webp";

export default function CommunityIntro() {
  return (
    <section className="w-full flex justify-center px-4 sm:px-10  lg:px-4">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 justify-center lg:w-[1110px]">
        <div className="flex flex-col gap-6 justify-center ">
          <h1 className="font-martian font-semibold text-4xl/11 lg:text-5xl leading-16 lg:max-w-[16ch] tracking-[-2px]">
            Not your average book club
          </h1>
          <p className="text-xl/7 lg:max-w-[46ch] xl:max-w-none tracking-[-.5px]">
            Connect with a community that speaks your language - from{" "}
            <span className="font-bold">Python</span> to{" "}
            <span className="font-bold">TypeScript</span> and everything in
            between. Our discussions blend technical depth with practical
            applications.
          </p>
        </div>
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={mobileNotAverageBookClubImage}
            alt="Group of people reading a book"
          />
          <source
            media="(min-width: 768px) and (max-width: 1023px)"
            srcSet={tabletNotAverageBookClubImage}
            alt="Group of people reading a book"
          />
          <source
            media="(min-width: 1024px)"
            srcSet={desktopNotAverageBookClubImage}
            alt="Group of people reading a book"
          />

          <img
            src={mobileNotAverageBookClubImage}
            alt="Group of people reading a book"
            className="w-full md:max-w-[40rem] mx-auto lg:max-w-[35rem] xl:max-w-none rounded-lg object-cover"
          />
        </picture>
      </div>
    </section>
  );
}
