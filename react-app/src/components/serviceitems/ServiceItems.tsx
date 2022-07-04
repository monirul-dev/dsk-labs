import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import classes from "./ServiceItems.module.css";

interface IService {
  id: string;
  iconClassName: string;
  heading: string;
  description: string;
}

interface IServices extends Array<IService> {}

export default function ServiceItems() {
  const services = useFetch<IServices>("./data/services.json", [
    {
      id: "",
      iconClassName: "",
      heading: "",
      description: "",
    },
  ]);

  return (
    <section className="services">
      <div className="container">
        <div className="row">
          {services?.map((data) => {
            return (
              <div className="col-md-6" key={data.id}>
                <div className={`${classes.icon_box}`}>
                  <i className={data.iconClassName}></i>
                  <h4>
                    <Link to="">{data.heading}</Link>
                  </h4>
                  <p>{data.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
