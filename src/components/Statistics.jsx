import brandRecognition from '../../images/icon-brand-recognition.svg';
import detailedRecords from '../../images/icon-detailed-records.svg';
import fullyCustomizable from '../../images/icon-fully-customizable.svg';

const statistics = [
  {
    title: 'Brand Recognition',
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.",
    icon: brandRecognition,
  },
  {
    title: 'Detailed Records',
    description:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    icon: detailedRecords,
  },
  {
    title: 'Fully Customizable',
    description:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    icon: fullyCustomizable,
  },
];

function Statistics() {
  return (
    <section
      id="features"
      className="w-full bg-[#F0F1F6] px-6 pt-32 pb-20 sm:pt-36 lg:px-8 lg:pt-40 lg:pb-28"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-20">
        <div className="max-w-xl text-center">
          <h2 className="text-2xl font-bold text-(--gray-900) sm:text-3xl">
            Advanced Statistics
          </h2>
          <p className="mt-4 text-sm leading-7 text-(--gray-500) sm:text-base">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className="relative w-full">
          <div
            aria-hidden="true"
            className="absolute top-20 bottom-10 left-1/2 w-2 -translate-x-1/2 bg-(--color-primary-blue) md:hidden"
          />
          <div
            aria-hidden="true"
            className="absolute top-36 w-full hidden h-2 bg-(--color-primary-blue) md:block"
          />

          <ul className="relative flex flex-col items-center gap-20 md:flex-row md:items-start md:justify-between md:gap-6">
            {statistics.map((statistic, index) => (
              <li
                key={statistic.title}
                className={`relative z-10 flex w-full max-w-sm flex-col items-center rounded-md bg-white px-6 pb-8 text-center md:max-w-none md:flex-1 md:items-start md:text-left ${
                  index === 1 ? 'md:mt-12' : index === 2 ? 'md:mt-24' : ''
                }`}
              >
                <div className="relative z-10 -mt-10 mb-4 flex size-20 shrink-0 items-center justify-center rounded-full bg-(--color-primary-purple)">
                  <img src={statistic.icon} alt="" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-(--gray-900)">
                  {statistic.title}
                </h3>
                <p className="text-sm leading-7 text-(--gray-500)">
                  {statistic.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
