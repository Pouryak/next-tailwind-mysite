import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="section flex flex-col md:flex-row items-center justify-center my-16 max-w-[600px] "
    >
      {/* Portfolio grid */}
      <div className="portfolio gap-4">
        {portfolio.map((item) => (
          <PortfolioItem
            key={item.title}
            imgURL={item.imgURL}
            title={item.title}
            stack={item.stack}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
