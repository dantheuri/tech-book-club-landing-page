import starIcon from "../assets/images/icon-star.svg";

const Testimonial = () => {
  return (
    <div className="flex flex-col lg:items-center gap-8 px-4 sm:px-10">
      <div className="flex">
        <img src={starIcon} alt="Review Star" />
        <img src={starIcon} alt="Review Star" />
        <img src={starIcon} alt="Review Star" />
        <img src={starIcon} alt="Review Star" />
      </div>
     
        <p className="font-martian font-semibold text-2xl lg:text-[2.125em] lg:text-center lg:max-w-[60rem] tracking-[-1px]">
          "This book club transformed my technical reading from a solitary
          activity into an enriching community experience. The discussions are
          gold!"
        </p>
   
      <p className="font-inter text-xl tracking-[-.5px]">Sarah Chen, Software Architect</p>
    </div>
  );
};

export default Testimonial;
