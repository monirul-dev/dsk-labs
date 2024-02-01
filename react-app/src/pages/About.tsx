import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import CompanyDetails from "../components/companydetails/CompanyDetails";
import Skills from "../components/skills/Skills";
import TeamMembers from "../components/teammembers/TeamMembers";

export default function About() {
  return (
    <>
      <Breadcrumbs>About</Breadcrumbs>
      <CompanyDetails />

      <section className="team section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Team</h2>
            <p>Our Hardworking Team</p>
          </div>
          <TeamMembers />
        </div>
      </section>
      <Skills />
    </>
  );
}
