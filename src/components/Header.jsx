import heroImage from "../assets/images/desktop/image-hero-desktop.webp";
import logo from "../assets/images/logo.svg";
import avatars from "../assets/images/image-avatars.webp";
import starIcon from "../assets/images/icon-star.svg";
import downArrow from "../assets/images/icon-arrow-down.svg";
import mobileHeroImage from "../assets/images/mobile/image-hero-mobile.webp";
import patternGlow from "../assets/images/pattern-glow.svg";

export default function Header() {
  return (
    <header className="bg-[#FAF5F3] pt-9 w-full flex justify-center px-4 sm:px-0">
      <div className="lg:max-w-[73.125rem]">
        <div className="w-full">
          <img src={logo} alt="Tech Book Club Logo" />
        </div>
        <section className="hero w-full lg:flex gap-16 py-20">
          <div className="hero-content flex flex-col justify-center">
            <h1 className="font-martian font-bold text-[2.375em] sm:text-[3.875em] lg:text-6xl/18 max-w-[13ch] tracking-[-2px]">
              Join the ultimate tech book club
            </h1>
            <p className="font-inter text-xl/7 lg:w-[43ch] mt-6">
              Turn your reading time into learning time with fellow tech
              enthusiasts. Get curated recommendations, join vibrant
              discussions, and level up your skills one chapter at a time.
            </p>
            <button className="border-3 flex gap-4 justify-center mt-8 lg:w-[24.5rem] py-5 rounded-lg">
              <p className="font-martian font-semibold text-lg uppercase">
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
            <source
              media="(max-width: 480px)"
              srcSet={mobileHeroImage}
              className="mobile-hero"
            />
            <img
              src={heroImage}
              alt="Hero Image"
              className="rounded-lg lg:w-[33.75rem]"
            />
          </picture>
        </section>
      </div>
    </header>
  );
}
