import { Link } from "react-router-dom";
import "./ServiceItems.module.css";

export default function ServiceItems() {
    return(
        <section className="services">
        <div className="container">
  
          <div className="row">
            <div className="col-md-6">
              <div className="icon-box">
                <i className="bi bi-briefcase"></i>
                <h4><Link to="">Lorem Ipsum</Link></h4>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box">
                <i className="bi bi-card-checklist"></i>
                <h4><Link to="">Dolor Sitema</Link></h4>
                <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box">
                <i className="bi bi-bar-chart"></i>
                <h4><Link to="">Sed ut perspiciatis</Link></h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box">
                <i className="bi bi-binoculars"></i>
                <h4><Link to="">Nemo Enim</Link></h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box">
                <i className="bi bi-brightness-high"></i>
                <h4><Link to="">Magni Dolore</Link></h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box">
                <i className="bi bi-calendar4-week"></i>
                <h4><Link to="">Eiusmod Tempor</Link></h4>
                <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
              </div>
            </div>
          </div>
  
        </div>
      </section>
    );
}