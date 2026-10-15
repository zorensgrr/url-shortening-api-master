import shortenBgDesktop from '../../images/bg-shorten-desktop.svg';
import shortenBgMobile from '../../images/bg-shorten-mobile.svg';

function Shorten() {
  return (
    <section className="relative z-10 mx-auto -mt-12 -mb-20 w-full max-w-6xl px-6 md:-mt-16 md:-mb-24 lg:px-8">
      <form
        className="relative flex w-full flex-col gap-4 overflow-hidden rounded-xl bg-(--color-primary-purple) p-6 sm:p-8 md:flex-row md:items-start md:gap-6 lg:p-12"
        onSubmit={event => event.preventDefault()}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-right-top bg-no-repeat md:hidden"
          style={{ backgroundImage: `url("${shortenBgMobile}")` }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
          style={{ backgroundImage: `url("${shortenBgDesktop}")` }}
        />
        <input
          className="relative z-10 min-w-0 w-full rounded-md bg-white px-5 py-4 text-base text-(--gray-900) outline-none placeholder:text-(--gray-500) focus:ring-2 focus:ring-(--color-primary-blue) md:flex-1"
          type="text"
          placeholder="Shorten a link here..."
          name="link"
          aria-label="URL to shorten"
        />
        <button
          type="submit"
          className="relative z-10 w-full shrink-0 cursor-pointer rounded-md bg-(--color-primary-blue) px-6 py-4 font-bold text-white transition-colors duration-150 hover:bg-(--color-primary-blue-hover) md:w-auto"
        >
          Shorten It!
        </button>
      </form>
    </section>
  );
}

export default Shorten;
