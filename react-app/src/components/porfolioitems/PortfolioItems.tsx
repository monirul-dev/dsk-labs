import { useState } from "react";
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
  const [filteredPortfolio, setFilteredPortfolio] = useState([]);

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

  const handleFilter = () => {};
  return (
    <section className="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul className={classes.portfolio_flters}>
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li onClick={handleFilter} data-filter=".filter-app">
                App
              </li>
              <li onClick={handleFilter} data-filter=".filter-other">
                Other
              </li>
              <li onClick={handleFilter} data-filter=".filter-web">
                Web
              </li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">
          {portfolio.map((item) => {
            return (
              <div
                className={`col-lg-4 col-md-6 ${classes.portfolio_item} filter-app`}
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
