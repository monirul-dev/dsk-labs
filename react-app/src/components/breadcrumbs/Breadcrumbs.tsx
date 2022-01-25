import { Link } from "react-router-dom";
import classes from "./Breadcrumbs.module.css";

export default function Breadcrumbs({ children }:{ children?:string }){
    return(
        <section className={`${classes.breadcrumbs}`}>
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>{children}</h2>
          <ol>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>{children}</li>
          </ol>
        </div>

      </div>
    </section>
    )
}