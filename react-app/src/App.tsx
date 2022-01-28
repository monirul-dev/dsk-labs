import { useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import Layout from "./components/Layout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Testimonials from "./pages/Testimonials";

function App() {
  const location = useLocation();
  const nodeRef = useRef(null);
  return (
    <Layout>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          nodeRef={nodeRef}
          classNames="fade"
          timeout={950}
        >
          <div ref={nodeRef}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="blog" element={<Blog />} />
              <Route path="contact" element={<Contact />} />
              <Route path="team" element={<Team />} />
              <Route path="testimonials" element={<Testimonials />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
}

export default App;
