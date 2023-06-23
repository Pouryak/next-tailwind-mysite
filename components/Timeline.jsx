import TimelineItem from "./TimelineItem";
import timeline from "../data/timeline";

const Timeline = () => {
  return (
    <section
      id="timeline"
      className="flex flex-col md:flex-row justify-center my-20 sm:px-8 md:px-0 mx-auto max-w-[900px]"
    >
      <div className="w-full md:w-7/12">
        <h3 className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white ">
          Timeline
        </h3>

        {timeline.map((item) => (
          <TimelineItem
            key={item.title}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
