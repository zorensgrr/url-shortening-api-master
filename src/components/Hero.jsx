import workingIllustration from '../../images/illustration-working.svg';

function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-8 overflow-hidden px-6 pb-24 md:flex-row md:gap-6 md:overflow-visible lg:px-8 lg:pb-32">
      <div className="w-full shrink-0 text-center md:w-1/2 md:text-left">
        <h1 className="text-4xl leading-tight font-bold text-(--gray-900) sm:text-5xl lg:text-6xl">
          More than just shorter links
        </h1>
        <p className="mx-auto my-5 max-w-lg text-base text-(--gray-500) sm:text-lg md:mx-0">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="mt-3 cursor-pointer rounded-full bg-(--color-primary-blue) px-8 py-3 font-bold text-white transition-colors duration-150 hover:bg-(--color-primary-blue-hover)">
          Get Started
        </button>
      </div>

      <div className="w-full min-w-0 md:w-1/2 md:flex-1">
        <img
          src={workingIllustration}
          alt="Person working at a desk"
          className="h-auto w-[125%] max-w-none md:w-[140%]"
        />
      </div>
    </section>
  );
}

export default Hero;
