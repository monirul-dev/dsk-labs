import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import classes from "./ServiceItems.module.css";

interface IService {
  id: string;
  iconClassName: string;
  heading: string;
  description: string;
  children: [Object];
}

interface IServices extends Array<IService> {}

export default function ServiceItems() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState([{}]);

  const navigate = useNavigate();

  const services = useFetch<IServices>("./data/services.json", [
    {
      id: "",
      iconClassName: "",
      heading: "",
      description: "",
      children: [{}],
    },
  ]);

  return (
    <section className="services">
      <div className="container">
        <div className="row">
          {services?.map((data) => {
            return (
              <div
                onClick={() => {
                  if (data?.children?.length > 0) {
                    setShowModal(true);
                    setModalData(data?.children);
                  }
                }}
                className={`col-md-6 ${classes.cursor}`}
                key={data.id}
              >
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
      {showModal && (
        <div id="myModal" className={classes.modal}>
          <div className={classes.modal_content}>
            <span onClick={() => setShowModal(false)} className={classes.close}>
              &times;
            </span>
            <div className="container">
              <div className="row">
                {modalData?.map((data: any) => {
                  return (
                    <div
                      onClick={() => navigate(data.link)}
                      className={`col-sm-12 col-md-6 ${classes.cursor}`}
                      key={data.id}
                    >
                      <div
                        className={`${classes.icon_box} ${classes.service_hover}`}
                      >
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
          </div>
        </div>
      )}
    </section>
  );
}
