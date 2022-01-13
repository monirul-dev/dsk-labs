import { Link } from "react-router-dom";
import classes from "./Header.module.css";

export default function Header(){
    return(
        <header className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center">
    
          <h1 className="logo me-auto"><a href="index.html">Sailor</a></h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li><Link to="/" className="active">Home</Link></li>
              <li><Link to="/about" className="active">About</Link></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="pricing.html">Pricing</a></li>
              <li><a href="blog.html">Blog</a></li>
    
              <li><a href="contact.html">Contact</a></li>
              <li><a href="index.html" className="getstarted">Get Started</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    )
}