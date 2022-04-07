import { Link } from "react-router-dom";
import data from "../../data/services.json";
import classes from "./ServiceItems.module.css";

export default function ServiceItems() {
  return (
    <section className="services">
      <div className="container">
        <div className="row">
          {data.map((data) => {
            return (
              <div className="col-md-6">
                <div className={`${classes.icon_box}`}>
                  <i className={data.iconClassName}></i>
                  <h4>
                    <Link to="">{data.heading}</Link>
                  </h4>
                  <p>{data.descrip}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
