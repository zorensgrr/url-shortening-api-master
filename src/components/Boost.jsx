import boostBgDesktop from '../../images/bg-boost-desktop.svg';
import boostBgMobile from '../../images/bg-boost-mobile.svg';

function Boost() {
  return (
    <section className="relative flex min-h-64 w-full flex-col items-center justify-center overflow-hidden bg-(--color-primary-purple) px-6 py-16 text-center">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url("${boostBgMobile}")` }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
        style={{ backgroundImage: `url("${boostBgDesktop}")` }}
      />
      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Boost your links today
        </h2>
        <button className="mt-6 cursor-pointer rounded-full bg-(--color-primary-blue) px-8 py-3 font-bold text-white transition-colors duration-150 hover:bg-(--color-primary-blue-hover)">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Boost;
