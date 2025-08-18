
import logo from "../assets/images/logo.svg";
import avatars from "../assets/images/image-avatars.webp";
import starIcon from "../assets/images/icon-star.svg";
import downArrow from "../assets/images/icon-arrow-down.svg";

import mobileHeroImage from "../assets/images/mobile/image-hero-mobile.webp";
import tabletHeroImage from "../assets/images/tablet/image-hero-tablet.webp";
import desktopHeroImage from "../assets/images/desktop/image-hero-desktop.webp";

import tabletImageNotAverage from "../assets/images/tablet/image-not-average-tablet.webp";

import patternGlow from "../assets/images/pattern-glow.svg";

export default function Header() {
  return (
    <header className="bg-[#FAF5F3] pt-9 w-full flex justify-center px-4 sm:px-10 lg:px-4">
      <div className="md:max-w-[1110px] lg:w-[1110px]">
        <div className="w-full">
          <img src={logo} alt="Tech Book Club Logo" />
        </div>
        <section className="hero w-full lg:flex lg:gap-10 py-12">
          <div className="hero-content flex flex-col">
            <h1 className="font-martian font-bold sm:max-lg:font-semibold text-3xl sm:text-6xl lg:text-5xl/18  xl:text-6xl/18 lg:max-w-[13ch] tracking-[-2px]">
              Join the ultimate tech book club
            </h1>
            <p className="font-inter sm:max-lg:text-xl text-lg/7 lg:w-[43ch] mt-6">
              Turn your reading time into learning time with fellow tech
              enthusiasts. Get curated recommendations, join vibrant
              discussions, and level up your skills one chapter at a time.
            </p>
            <button className="border-3 flex gap-4 justify-center mt-8 md:max-w-[24rem] lg:max-w-none lg:w-[24.5rem] py-5 rounded-lg">
              <p className="font-martian font-semibold text-sm sm:text-lg uppercase">
                Review membership options
              </p>
              <img src={downArrow} alt="Down Arrow" />
            </button>
            <div className="mt-5 flex gap-3">
              <img src={avatars} alt="" className="h-[2.5rem]" />
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
          <picture>
            <source media="(max-width: 767px)" srcSet={mobileHeroImage} className="mobile-hero" />
            <source
              media="(min-width: 768px) and (max-width: 1024px)"
              srcSet={desktopHeroImage}
              className="desktop-hero"
            />
            <source
              media="(min-width: 1440px)"
              srcSet={desktopHeroImage}
              className="desktop-hero"
            />
            <img
              src={mobileHeroImage}
              alt="Hero Image"
              className="mt-5 lg:mt-0 rounded-lg w-full md:max-w-[44rem] md:object-contain md:mx-auto lg:max-w-[35rem]"
            />
          </picture>
        </section>
      </div>
    </header>
  );
}
