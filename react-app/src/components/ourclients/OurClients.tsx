import useFetch from "../../hooks/useFetch";
import classes from "./OurClients.module.css";

export default function OurClients() {
  const clients = useFetch("/data/home/clients.json", []);
  return (
    <section className={`${classes.clients} section-bg`}>
      <div className="container">
        <div className="row">
          {clients.map((data) => {
            return (
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src={data} className="img-fluid" alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
