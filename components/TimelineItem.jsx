const TimelineItem = ({ year, title, duration, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-300 dark:border-stone-700">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 rounded-full bg-stone-300 dark:bg-stone-700 mt-1.5 -left-1.5 border border-bgPrimaryLight dark:border-bgPrimaryDark" />
        <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-stone-900 dark:text-textLight">
            {title}
          </h3>
          <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
            {duration}
          </div>
        </div>
        <p className="my-2 text-base font-normal sm:w-full text-stone-500 dark:text-stone-400">
          {details}
        </p>
      </li>
    </ol>
  );
};

export default TimelineItem;
