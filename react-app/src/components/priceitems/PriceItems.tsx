import { Link } from "react-router-dom";
import classes from "./PriceItems.module.css";

export default function PriceItems() {
  return (
    <section className="pricing">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className={`${classes.box}`}>
              <h3>Free</h3>
              <h4>
                <sup>$</sup>0<span> / month</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li className={`${classes.na}`}>Pharetra massa</li>
                <li className={`${classes.na}`}>Massa ultricies mi</li>
              </ul>
              <div className={`${classes.btn_wrap}`}>
                <Link to="#" className={`${classes.btn_buy}`}>
                  Buy Now
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
            <div className={`${classes.box} ${classes.featured}`}>
              <h3>Business</h3>
              <h4>
                <sup>$</sup>19<span> / month</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li className={`${classes.na}`}>Massa ultricies mi</li>
              </ul>
              <div className={`${classes.btn_wrap}`}>
                <Link to="#" className={`${classes.btn_buy}`}>
                  Buy Now
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div className={`${classes.box}`}>
              <h3>Developer</h3>
              <h4>
                <sup>$</sup>29<span> / month</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div className={`${classes.btn_wrap}`}>
                <Link to="#" className={`${classes.btn_buy}`}>
                  Buy Now
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div className={`${classes.box}`}>
              <span className={`${classes.advanced}`}>Advanced</span>
              <h3>Ultimate</h3>
              <h4>
                <sup>$</sup>49<span> / month</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div className={`${classes.btn_wrap}`}>
                <Link to="#" className={`${classes.btn_buy}`}>
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
