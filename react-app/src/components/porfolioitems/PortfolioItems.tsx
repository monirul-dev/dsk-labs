import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import classes from "./PortfolioItems.module.css";

interface IPortfolio {
  id: string;
  name: string;
  category: string[];
  imgPath: string;
  date: string;
  url: string;
  description: string;
}
interface IPortfolios extends Array<IPortfolio> {}

export default function PortfolioItems() {
  const [filteredPortfolio, setFilteredPortfolio] = useState<IPortfolios>([]);
  const [activeFilter, setActiveFilter] = useState("*");

  const portfolio = useFetch<IPortfolios>("./data/portfolioItems.json", [
    {
      id: "",
      name: "",
      category: [],
      imgPath: "",
      date: "",
      url: "",
      description: "",
    },
  ]);
  useEffect(() => {
    if (activeFilter === "*") {
      setFilteredPortfolio(portfolio);
      return;
    }
    const filtered = portfolio.filter((item) => {
      return item.category.includes(activeFilter);
    });
    setFilteredPortfolio(filtered);
  }, [activeFilter, portfolio]);

  const handleFilter = (e: any) => {
    setActiveFilter(e.target.dataset.filter);
  };
  console.log("filtered:", filteredPortfolio);

  return (
    <section className="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul className={classes.portfolio_flters}>
              <li
                onClick={handleFilter}
                data-filter="*"
                className="filter-active"
                value="all"
              >
                All
              </li>
              <li onClick={handleFilter} data-filter="app" value="app">
                App
              </li>
              <li onClick={handleFilter} data-filter="other" value="other">
                Other
              </li>
              <li onClick={handleFilter} data-filter="web" value="web">
                Web
              </li>
            </ul>
          </div>
        </div>

        <motion.div layout className="row portfolio-container">
          {filteredPortfolio.map((item) => {
            return (
              <motion.div
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                className={`col-lg-4 col-md-6 ${classes.portfolio_item} filter-app`}
                key={item.id}
              >
                <div className={classes.portfolio_wrap}>
                  <img src={item.imgPath} className="img-fluid" alt="" />
                  <div className={classes.portfolio_info}>
                    <h4>{item.name}</h4>
                    <p>{item.category}</p>
                    <div className={classes.portfolio_links}>
                      <a
                        href="images/portfolio/portfolio-1.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 1"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Portfolio Details"
                      >
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
