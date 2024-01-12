import { useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import Layout from "./components/Layout";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import DatabaseSolutions from "./pages/DatabaseSolutions";
import Home from "./pages/Home";
import NotFoundPage from "./pages/PageNotFound";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Testimonials from "./pages/Testimonials";
import CheckPageStatus from "./services/checkPageStatus";

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
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/" element={<Home />} />
              <Route
                path="about"
                element={
                  CheckPageStatus("about") ? <About /> : <NotFoundPage />
                }
              />
              <Route
                path="services"
                element={
                  CheckPageStatus("Services") ? <Services /> : <PageNotFound />
                }
              />
              <Route
                path="portfolio"
                element={
                  CheckPageStatus("Portfolio") ? (
                    <Portfolio />
                  ) : (
                    <PageNotFound />
                  )
                }
              />
              <Route
                path="pricing"
                element={
                  CheckPageStatus("Pricing") ? <Pricing /> : <PageNotFound />
                }
              />
              <Route
                path="blog"
                element={CheckPageStatus("Blog") ? <Blog /> : <PageNotFound />}
              />
              <Route
                path="contact"
                element={
                  CheckPageStatus("Contact") ? <Contact /> : <PageNotFound />
                }
              />
              <Route
                path="team"
                element={CheckPageStatus("Team") ? <Team /> : <PageNotFound />}
              />
              <Route
                path="testimonials"
                element={
                  CheckPageStatus("Testimonials") ? (
                    <Testimonials />
                  ) : (
                    <PageNotFound />
                  )
                }
              />
              <Route
                path="database-solutions"
                element={
                  CheckPageStatus("DatabaseSolutions") ? (
                    <DatabaseSolutions />
                  ) : (
                    <PageNotFound />
                  )
                }
              />
              <Route element={<NotFoundPage />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
}

export default App;
