import checkIcon from "../assets/images/icon-check.svg";

import mobileReadTogetherImage from "../assets/images/mobile/image-read-together-mobile.webp";
import tabletReadTogetherImage from "../assets/images/tablet/image-read-together-tablet.webp";
import desktopReadTogetherImage from "../assets/images/desktop/image-read-together-desktop.webp";

export default function ReadTogether() {
  return (
    <section className="w-full flex justify-center xl:justify-center px-4 sm:px-10 lg:px-4">
      <div className="lg:w-[1110px] lg:flex lg:flex-row lg:gap-10">
        <div className="lg:flex lg:flex-row lg:gap-10">
          <picture className="hidden lg:block">
            <source
              media="(min-width: 1024px)"
              srcSet={desktopReadTogetherImage}
              className="desktop-hero"
            />
            <source
              media="(min-width: 768px) and (max-width: 1023px)"
              srcSet={tabletReadTogetherImage}
              className="tablet-hero"
            />
            <img
              src={desktopReadTogetherImage}
              alt="Group Reading Together"
              className="max-w-[44rem] lg:max-w-[33rem] rounded-lg"
            />
          </picture>

          <div className="flex flex-col gap-6 lg:gap-9 justify-center">
            <h1 className="font-martian font-semibold text-4xl/11 sm:text-[3.125em] lg:text-5xl leading-16 tracking-[-2px] lg:max-w-[14ch]">
              Read together, grow together
            </h1>
            <ul className="flex flex-col gap-6 font-inter text-xl">
              <li className="flex gap-4">
                <img src={checkIcon} alt="Checkmark Bullet" />
                <p className="">
                  Monthly curated tech reads selected by industry experts
                </p>
              </li>
              <li className="flex gap-4">
                <img src={checkIcon} alt="Checkmark Bullet" />
                <p className="">
                  Virtual and in-person meetups for deep-dive discussions
                </p>
              </li>
              <li className="flex gap-4">
                <img src={checkIcon} alt="Checkmark Bullet" />
                <p className="">Early access to new tech book releases</p>
              </li>
              <li className="flex gap-4">
                <img src={checkIcon} alt="Checkmark Bullet" />
                <p className="">
                  Author Q&A sessions with tech thought leaders
                </p>
              </li>
            </ul>
          </div>

          <img
            src={mobileReadTogetherImage}
            alt="Group Reading Together"
            className="max-w-full mt-10 lg:hidden rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
