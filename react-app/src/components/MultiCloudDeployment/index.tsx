import classes from "./index.module.css";

const MultiCloudDeployment = () => {
  return (
    <div>
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className={`row ${classes.multiCloudDeployment}`}>
            <div className="col-lg-8 entries">
              <article className="entry entry-single">
                <div className="entry-img">
                  <img
                    src="images/pages-images/ocr-page-image.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <h2 className="entry-title mt-5">Multi Cloud Deployment</h2>

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

export default MultiCloudDeployment;
