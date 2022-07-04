import { Nav, Tab } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import classes from "./Features.module.css";

interface IFeature {
  id: string;
  eventTab: string;
  featureName: string;
  title: string;
  subTitle: string;
  description: string;
  imagePath: string;
}
interface IFeatures extends Array<IFeature> {}

export default function Features() {
  const feature = useFetch<IFeatures>("./data/features.json", [
    {
      id: "",
      eventTab: "",
      featureName: "",
      title: "",
      subTitle: "",
      description: "",
      imagePath: "",
    },
  ]);
  console.log("features: ", feature);
  return (
    <section className="features">
      <div className="container">
        <div className="section-title">
          <h2>Features</h2>
          <p>Check our Features</p>
        </div>
        <Tab.Container defaultActiveKey="tab1">
          <div className="row">
            <div className="col-lg-3">
              <Nav
                variant="pills"
                className={`flex-column ${classes.nav_tabs}`}
              >
                {feature.map((data) => {
                  return (
                    <Nav.Item key={data.id}>
                      <Nav.Link
                        className={`${classes.nav_link}`}
                        eventKey={data.eventTab}
                      >
                        {data.featureName}
                      </Nav.Link>
                    </Nav.Item>
                  );
                })}
              </Nav>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <Tab.Content>
                {feature.map((data) => {
                  return (
                    <Tab.Pane eventKey={data.eventTab} key={data.id}>
                      <div className="row">
                        <div
                          className={`col-lg-8 order-2 order-lg-1 ${classes.details}`}
                        >
                          <h3>{data.title}</h3>
                          <p className="fst-italic">{data.subTitle}</p>
                          <p>{data.description}</p>
                        </div>
                        <div className="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={data.imagePath}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </Tab.Pane>
                  );
                })}
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </div>
    </section>
  );
}
