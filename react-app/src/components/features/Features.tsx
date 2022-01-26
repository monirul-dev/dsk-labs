import { Nav, Tab } from "react-bootstrap";
import classes from "./Features.module.css";

export default function Features() {
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
                <Nav.Item>
                  <Nav.Link className={`${classes.nav_link}`} eventKey="tab1">
                    Modi sit est
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className={`${classes.nav_link}`} eventKey="tab2">
                    Unde praesentium sed
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className={`${classes.nav_link}`} eventKey="tab3">
                    Pariatur explicabo vel
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className={`${classes.nav_link}`} eventKey="tab4">
                    Nostrum qui quasi
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className={`${classes.nav_link}`} eventKey="tab5">
                    Iusto ut expedita aut
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <Tab.Content>
                <Tab.Pane eventKey="tab1">
                  <div className="row">
                    <div
                      className={`col-lg-8 order-2 order-lg-1 ${classes.details}`}
                    >
                      <h3>Architecto ut aperiam autem id</h3>
                      <p className="fst-italic">
                        Qui laudantium consequatur laborum sit qui ad sapiente
                        dila parde sonata raqer a videna mareta paulona marka
                      </p>
                      <p>
                        Et nobis maiores eius. Voluptatibus ut enim blanditiis
                        atque harum sint. Laborum eos ipsum ipsa odit magni.
                        Incidunt hic ut molestiae aut qui. Est repellat minima
                        eveniet eius et quis magni nihil. Consequatur dolorem
                        quaerat quos qui similique accusamus nostrum rem vero
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="images/features/features-1.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="tab2">
                  <div className="row">
                    <div
                      className={`col-lg-8 order-2 order-lg-1 ${classes.details}`}
                    >
                      <h3>Et blanditiis nemo veritatis excepturi</h3>
                      <p className="fst-italic">
                        Qui laudantium consequatur laborum sit qui ad sapiente
                        dila parde sonata raqer a videna mareta paulona marka
                      </p>
                      <p>
                        Ea ipsum voluptatem consequatur quis est. Illum error
                        ullam omnis quia et reiciendis sunt sunt est. Non
                        aliquid repellendus itaque accusamus eius et velit ipsa
                        voluptates. Optio nesciunt eaque beatae accusamus lerode
                        pakto madirna desera vafle de nideran pal
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="images/features/features-2.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="tab3">
                  <div className="row">
                    <div
                      className={`col-lg-8 order-2 order-lg-1 ${classes.details}`}
                    >
                      <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                      <p className="fst-italic">
                        Eos voluptatibus quo. Odio similique illum id quidem non
                        enim fuga. Qui natus non sunt dicta dolor et. In
                        asperiores velit quaerat perferendis aut
                      </p>
                      <p>
                        Iure officiis odit rerum. Harum sequi eum illum corrupti
                        culpa veritatis quisquam. Neque necessitatibus illo
                        rerum eum ut. Commodi ipsam minima molestiae sed
                        laboriosam a iste odio. Earum odit nesciunt fugiat sit
                        ullam. Soluta et harum voluptatem optio quae
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="images/features/features-3.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="tab4">
                  <div className="row">
                    <div
                      className={`col-lg-8 order-2 order-lg-1 ${classes.details}`}
                    >
                      <h3>
                        Fuga dolores inventore laboriosam ut est accusamus
                        laboriosam dolore
                      </h3>
                      <p className="fst-italic">
                        Totam aperiam accusamus. Repellat consequuntur iure
                        voluptas iure porro quis delectus
                      </p>
                      <p>
                        Eaque consequuntur consequuntur libero expedita in
                        voluptas. Nostrum ipsam necessitatibus aliquam fugiat
                        debitis quis velit. Eum ex maxime error in consequatur
                        corporis atque. Eligendi asperiores sed qui veritatis
                        aperiam quia a laborum inventore
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="images/features/features-4.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="tab5">
                  <div className="row">
                    <div
                      className={`col-lg-8 order-2 order-lg-1 ${classes.details}`}
                    >
                      <h3>
                        Est eveniet ipsam sindera pad rone matrelat sando reda
                      </h3>
                      <p className="fst-italic">
                        Omnis blanditiis saepe eos autem qui sunt debitis porro
                        quia.
                      </p>
                      <p>
                        Exercitationem nostrum omnis. Ut reiciendis repudiandae
                        minus. Omnis recusandae ut non quam ut quod eius qui.
                        Ipsum quia odit vero atque qui quibusdam amet. Occaecati
                        sed est sint aut vitae molestiae voluptate vel
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="images/features/features-5.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </div>
    </section>
  );
}
