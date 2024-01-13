import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import classes from "./ServiceItems.module.css";
import Modal from "./modal/modal";

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

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalData={modalData}
      />
    </section>
  );
}
