import readTogetherImage from "../assets/images/desktop/image-read-together-desktop.webp";
import checkIcon from "../assets/images/icon-check.svg";
import mobileReadTogetherImage from "../assets/images/mobile/image-read-together-mobile.webp"; 

export default function ReadTogether() {
  return (
    <section className="lg:flex lg:justify-center px-4">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
        <img
          src={readTogetherImage}
          alt="Group Reading Together"
          className="hidden md:block w-[560px] rounded-lg"
        />
        <div className="flex flex-col gap-6 lg:gap-9 lg:w-[530px] justify-center">
          <h1 className="font-martian font-semibold text-[2.125em]/11 sm:text-[3.125em] leading-16 tracking-[-2px] lg;max-w-[14ch]">
            Read together, grow together
          </h1>
          <ul className="flex flex-col gap-6 font-inter text-xl">
            <li className="flex gap-4">
              <img src={checkIcon} alt="Checkmark Bullet" />
              <p className="">Monthly curated tech reads selected by industry experts</p>
            </li>
            <li className="flex gap-4">
              <img src={checkIcon} alt="Checkmark Bullet" />
              <p className="">Virtual and in-person meetups for deep-dive discussions</p>
            </li>
            <li className="flex gap-4">
              <img src={checkIcon} alt="Checkmark Bullet" />
              <p className="">Early access to new tech book releases</p>
            </li>
            <li className="flex gap-4">
              <img src={checkIcon} alt="Checkmark Bullet" />
              <p className="">Author Q&A sessions with tech thought leaders</p>
            </li>
          </ul>
        </div>
        <img src={mobileReadTogetherImage} alt="" className="max-w-full sm:hidden rounded-lg" />
      </div>
    </section>
  );
}
