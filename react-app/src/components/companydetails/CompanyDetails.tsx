import data from "../../data/home/companyDetails.json";
import classes from "./CompanyDetails.module.css";

export default function CompanyDetails() {
  return (
    <section className="about">
      <div className="container">
        <div className={`row ${classes.about_content}`}>
          <div className="col-lg-6">
            <h2>{data.heading}</h2>
            <h3>{data.subHeading}</h3>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>{data.description}</p>
            <ul>
              {data.list.map((item) => {
                return (
                  <li>
                    <i className="bi bi-check2-all"></i> {item}
                  </li>
                );
              })}
            </ul>

            {/* <ul>
              <li>
                <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                aliquip ex ea commodo consequa
              </li>
              <li>
                <i className="bi bi-check2-all"></i> Duis aute irure dolor in
                reprehenderit in voluptate velit
              </li>
              <li>
                <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in
              </li>
            </ul> */}
            <p className="fst-italic">{data.footer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
