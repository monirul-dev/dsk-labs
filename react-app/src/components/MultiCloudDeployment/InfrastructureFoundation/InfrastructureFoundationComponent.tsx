import classes from "./InfrastructureFoundationComponent.module.css";
const InfrastructureFoundationComponent = () => {
  return (
    <div>
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className={`row ${classes.InfrastructureFoundation}`}>
            <div className="col-lg-8 entries">
              <article className="entry entry-single">
                <div className="entry-img">
                  <img
                    src="images/pages-images/ocr-page-image.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <h2 className="entry-title mt-5">
                  InfrastructureFoundation Title
                </h2>

                <div className="entry-content">
                  <p>1st Paragraph</p>

                  <p>2nd paragraph</p>
                  <ul>
                    <li>
                      <i className="bi bi-check2-all"></i>list 1
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i>list 2
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i>list 3
                    </li>
                  </ul>

                  <p>closing paragraph</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfrastructureFoundationComponent;
