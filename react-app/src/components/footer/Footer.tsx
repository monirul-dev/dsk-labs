import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import classes from "./Footer.module.css";

interface IContact {
  addressLine1: string;
  addressLine2: string;
  phone: string;
  email: string;
};

export default function Footer() {

  const contact = useFetch<IContact>('./data/contact.json', {
    addressLine1: '',
    addressLine2: '',
    phone: '',
    email: ''
  });

  return (
    <footer className={classes.footer}>
      <div className={classes.footer_top}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className={classes.footer_info}>
                <h3>Sailor</h3>
                <p>
                  {contact.addressLine1} <br />
                  {contact.addressLine2} <br />
                  <br />
                  <strong>Phone:</strong> {contact.phone} <br />
                  <strong>Email:</strong> {contact.email} <br />
                </p>
                <div className={`${classes.social_links} mt-3`}>
                  <a href="twitter.com" className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="facebook.com" className="facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="instagram.com" className="instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="skype.com" className="google-plus">
                    <i className="bx bxl-skype"></i>
                  </a>
                  <a href="linkedin.com" className="linkedin">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className={`col-lg-2 col-md-6 ${classes.footer_links}`}>
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/terms">Terms of service</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/privacy">Privacy policy</Link>
                </li>
              </ul>
            </div>

            <div className={`col-lg-3 col-md-6 ${classes.footer_links}`}>
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="">Web Design</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="">Web Development</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="">Product Management</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="">Marketing</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="">Graphic Design</Link>
                </li>
              </ul>
            </div>

            <div className={`col-lg-4 col-md-6 ${classes.footer_newsletter}`}>
              <h4>Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form>
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={classes.copyright}>
          &copy; Copyright{" "}
          <strong>
            <span>Sailor</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className={classes.credits}>
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
}
