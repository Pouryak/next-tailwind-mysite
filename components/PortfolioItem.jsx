import Image from "next/image";

const PortfolioItem = ({ imgURL, title, stack }) => {
  return (
    <a className="border-2 border-textDark dark:border-textLight rounded-md overflow-hidden">
      <Image
        src={imgURL}
        alt="portfolio"
        className="w-full h-52 md:h-48"
        width={400}
        height={300}
      />
      {/* content-area */}
      <div className="w-full p-3">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold justify-start">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 items-center justify-start text-sm">
          {stack.map((item) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-textDark dark:border-textLight rounded-md">
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
};

export default PortfolioItem;
