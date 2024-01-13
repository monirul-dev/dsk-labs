import { Link, useNavigate } from "react-router-dom";
import classes from "./modal.module.css";

type TModal = {
  showModal: Boolean;
  setShowModal: (param: boolean) => void;
  modalData: {}[];
};

const Modal = ({ showModal, setShowModal, modalData }: TModal) => {
  const navigate = useNavigate();
  return (
    <>
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
                        className={`col-sm-12 ${classes.icon_box} ${classes.service_hover}`}
                      >
                        <div className=" d-flex flex-wrap justify-content-center align-items-center">
                          <i className={`w-100 ${data.iconClassName}`}></i>
                          <h4 className="w-100">
                            <Link to="">{data.heading}</Link>
                          </h4>
                        </div>
                        <p className="">{data.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
