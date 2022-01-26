import classes from "./TeamMembers.module.css";
export default function TeamMembers() {
  return (
    <section className="team section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Team</h2>
          <p>Our Hardowrking Team</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className={`${classes.team_member} d-flex align-items-start`}>
              <div className={`${classes.member_pic}`}>
                <img
                  src="images/team/team-1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className={`${classes.member_info}`}>
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <p>Explicabo voluptatem mollitia et repellat</p>
                <div className={`${classes.member_social}`}>
                  <a href="twiter.com">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="facebook.com">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="instagram.com">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="linkedin.com">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className={`${classes.team_member} d-flex align-items-start`}>
              <div className={`${classes.member_pic}`}>
                <img
                  src="images/team/team-2.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className={`${classes.member_info}`}>
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <p>Aut maiores voluptates amet et quis</p>
                <div className={`${classes.member_social}`}>
                  <a href="twitter.com">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="linkedin">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="instagram.com">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="linkedin.com">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className={`${classes.team_member} d-flex align-items-start`}>
              <div className={`${classes.member_pic}`}>
                <img
                  src="images/team/team-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className={`${classes.member_info}`}>
                <h4>William Anderson</h4>
                <span>CTO</span>
                <p>Quisquam facilis cum velit laborum corrupti</p>
                <div className={`${classes.member_social}`}>
                  <a href="twitter.com">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="facebook.com">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="instagram.com">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="linkedin.com">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className={`${classes.team_member} d-flex align-items-start`}>
              <div className={`${classes.member_pic}`}>
                <img
                  src="images/team/team-4.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className={`${classes.member_info}`}>
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
                <p>Dolorum tempora officiis odit laborum officiis</p>
                <div className={`${classes.member_social}`}>
                  <a href="twitter.com">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="facebook.com">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="instagram.com">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="linkedin.com">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
