import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import classes from "./PriceItems.module.css";

interface IPrice {
  categoryName: string;
  currency: string;
  price: string;
  period: string;
  features: { status: string; name: string }[];
  button: string;
  badge: {
    state: string;
    text: string;
  };
}

interface IPrices extends Array<IPrice> {}

export default function PriceItems() {
  const price = useFetch<IPrices>("/data/pricing.json", [
    {
      categoryName: "",
      currency: "",
      price: "",
      period: "",
      features: [
        {
          status: "",
          name: "",
        },
      ],
      button: "",
      badge: {
        state: "",
        text: "",
      },
    },
  ]);
  console.log(price);
  return (
    <section className={classes.pricing}>
      <div className="container">
        <div className="row">
          {price.map((data) => {
            return (
              <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                <div className={`${classes.box}`}>
                  {data.badge.state === "active" ? (
                    <span className={`${classes.advanced}`}>
                      {data.badge.text}
                    </span>
                  ) : null}
                  <h3>{data.categoryName}</h3>
                  <h4>
                    <sup>{data.currency}</sup>
                    {data.price}
                    <span> / {data.period}</span>
                  </h4>
                  <ul>
                    {data.features.map((feature) => {
                      return feature.status === "active" ? (
                        <li>{feature.name}</li>
                      ) : (
                        <li className={`${classes.na}`}>{feature.name}</li>
                      );
                    })}
                  </ul>
                  <div className={`${classes.btn_wrap}`}>
                    <Link to={data.button} className={`${classes.btn_buy}`}>
                      Buy Now
                    </Link>
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
