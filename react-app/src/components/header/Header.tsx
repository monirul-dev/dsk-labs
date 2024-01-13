import { Link, NavLink } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import checkPageStatus from "../../services/checkPageStatus";
import classes from "./Header.module.css";

interface IContact {
  siteName: string;
  addressLine1: string;
  addressLine2: string;
  email: string;
  phone: string;
}

export default function Header() {
  const contact = useFetch<IContact>("./data/contact.json", {
    siteName: "",
    addressLine1: "",
    addressLine2: "",
    phone: "",
    email: "",
  });

  return (
    <header
      className={`${classes.page_header} fixed-top d-flex align-items-center`}
    >
      <div className="container d-flex align-items-center">
        <h1 className={`${classes.logo} me-auto`}>
          <Link to="/" className={`${classes.header_link}`}>
            {contact.siteName}
          </Link>
        </h1>
        <nav className={`${classes.navbar} navbar`}>
          <ul className={`${classes.navbar_ul}`}>
            <li className={`${classes.navbar_li}`}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.navbar_link} ${classes.active}`
                    : `${classes.navbar_link}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className={`${classes.navbar_li} ${classes.dropdown} dropdown`}>
              <a href="/" className={`${classes.navbar_link}`}>
                <span>About</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul className={`${classes.navbar_ul} ${classes.dropdown_ul}`}>
                {checkPageStatus("About") ? (
                  <li className={`${classes.navbar_li} ${classes.dropdown_li}`}>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive
                          ? `${classes.navbar_link} ${classes.dropdown_link} ${classes.active}`
                          : `${classes.navbar_link} ${classes.dropdown_link}`
                      }
                    >
                      About
                    </NavLink>
                  </li>
                ) : null}

                {checkPageStatus("Team") ? (
                  <li className={`${classes.navbar_li} ${classes.dropdown_li}`}>
                    <NavLink
                      to="/team"
                      className={({ isActive }) =>
                        isActive
                          ? `${classes.navbar_link} ${classes.dropdown_link} ${classes.active}`
                          : `${classes.navbar_link} ${classes.dropdown_link}`
                      }
                    >
                      Team
                    </NavLink>
                  </li>
                ) : null}

                {checkPageStatus("Testimonials") ? (
                  <li className={`${classes.navbar_li} ${classes.dropdown_li}`}>
                    <NavLink
                      to="/testimonials"
                      className={({ isActive }) =>
                        isActive
                          ? `${classes.navbar_link} ${classes.dropdown_link} ${classes.active}`
                          : `${classes.navbar_link} ${classes.dropdown_link}`
                      }
                    >
                      Testimonials
                    </NavLink>
                  </li>
                ) : null}
              </ul>
            </li>
            {checkPageStatus("Services") ? (
              <li className={`${classes.navbar_li}`}>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? `${classes.navbar_link} ${classes.active}`
                      : `${classes.navbar_link}`
                  }
                >
                  Services
                </NavLink>
              </li>
            ) : null}

            {checkPageStatus("Portfolio") ? (
              <li className={`${classes.navbar_li}`}>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    isActive
                      ? `${classes.navbar_link} ${classes.active}`
                      : `${classes.navbar_link}`
                  }
                >
                  Portfolio
                </NavLink>
              </li>
            ) : null}

            {checkPageStatus("Pricing") ? (
              <li className={`${classes.navbar_li}`}>
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    isActive
                      ? `${classes.navbar_link} ${classes.active}`
                      : `${classes.navbar_link}`
                  }
                >
                  Pricing
                </NavLink>
              </li>
            ) : null}

            {checkPageStatus("Blog") ? (
              <li className={`${classes.navbar_li}`}>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? `${classes.navbar_link} ${classes.active}`
                      : `${classes.navbar_link}`
                  }
                >
                  Blog
                </NavLink>
              </li>
            ) : null}
            {checkPageStatus("Contact") ? (
              <li className={`${classes.navbar_li}`}>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? `${classes.navbar_link} ${classes.active}`
                      : `${classes.navbar_link}`
                  }
                >
                  Contact
                </NavLink>
              </li>
            ) : null}
          </ul>
          <i className={`bi bi-list ${classes.mobile_nav_toggle}`}></i>
        </nav>
      </div>
    </header>
  );
}
