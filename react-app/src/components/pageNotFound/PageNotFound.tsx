import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
  return (
    <div className={styles.page_404}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className="col-sm-12">
            <div className="col-sm-12 col-sm-offset-1  text-center">
              <div className={styles.four_zero_four_bg}>
                <h1 className="text-center ">404</h1>
              </div>

              <div className={styles.contant_box_404}>
                <h3 className={styles.h2}>Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <Link to="/" className={styles.link_404}>
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
