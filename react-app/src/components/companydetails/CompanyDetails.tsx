import useFetch from "../../hooks/useFetch";
import classes from "./CompanyDetails.module.css";

export default function CompanyDetails() {
  const companyDetails = useFetch("./data/home/companyDetails.json", {
    heading: "",
    subHeading: "",
    description: "",
    list: [],
    footer: "",
  });
  return (
    <section className="about">
      <div className="container">
        <div className={`row ${classes.about_content}`}>
          <div className="col-lg-6">
            <h2>{companyDetails.heading}</h2>
            <h3>{companyDetails.subHeading}</h3>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>{companyDetails.description}</p>
            <ul>
              {companyDetails.list.map((item) => {
                return (
                  <li>
                    <i className="bi bi-check2-all"></i> {item}
                  </li>
                );
              })}
            </ul>

            <p className="fst-italic">{companyDetails.footer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
