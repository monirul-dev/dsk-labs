import { useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import Layout from "./components/Layout";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import About from "./pages/About";
import AppSupport from "./pages/AppSupport";
import Blog from "./pages/Blog";
import CloudMigration from "./pages/CloudMigration";
import CloudSecurity from "./pages/CloudSecurity";
import CloudStrategy from "./pages/CloudStrategy";
import Contact from "./pages/Contact";
import DatabaseSolutions from "./pages/DatabaseSolutions";
import DotNetSolutions from "./pages/DotNetSolutions";
import Home from "./pages/Home";
import InfrastructureFoundation from "./pages/InfrastructureFoundation";
import MultiCloudPage from "./pages/MultiCloudPage";
import OcrSolutions from "./pages/OcrSolutions";
import NotFoundPage from "./pages/PageNotFound";
import Portfolio from "./pages/Portfolio";
import PowerPlatform from "./pages/PowerPlatform";
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
              <Route
                path="app-support"
                element={
                  CheckPageStatus("AppSupport") ? (
                    <AppSupport />
                  ) : (
                    <PageNotFound />
                  )
                }
              />
              <Route
                path="dot-net-solutions"
                element={
                  CheckPageStatus("DotnetSolutions") ? (
                    <DotNetSolutions />
                  ) : (
                    <PageNotFound />
                  )
                }
              />
              <Route
                path="power-platform"
                element={
                  CheckPageStatus("PowerPlatform") ? (
                    <PowerPlatform />
                  ) : (
                    <PageNotFound />
                  )
                }
              />
              <Route
                path="ocr-solutions"
                element={
                  CheckPageStatus("Ocr") ? <OcrSolutions /> : <PageNotFound />
                }
              />
              <Route
                path="multi-cloud-deployment"
                element={
                  CheckPageStatus("MultiCloudDeployment") ? (
                    <MultiCloudPage />
                  ) : (
                    <PageNotFound />
                  )
                }
              />
              <Route
                path="multi-cloud-deployment/cloud-strategy"
                element={
                  CheckPageStatus("CloudStrategy") ? (
                    <CloudStrategy />
                  ) : (
                    <PageNotFound />
                  )
                }
              />
              <Route
                path="multi-cloud-deployment/infrastructure-foundation"
                element={
                  CheckPageStatus("CloudStrategy") ? (
                    <InfrastructureFoundation />
                  ) : (
                    <PageNotFound />
                  )
                }
              />
              <Route
                path="multi-cloud-deployment/cloud-security"
                element={
                  CheckPageStatus("CloudStrategy") ? (
                    <CloudSecurity />
                  ) : (
                    <PageNotFound />
                  )
                }
              />
              <Route
                path="multi-cloud-deployment/cloud-migration"
                element={
                  CheckPageStatus("CloudStrategy") ? (
                    <CloudMigration />
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
