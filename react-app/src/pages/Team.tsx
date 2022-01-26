import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import TeamMembers from "../components/teammembers/TeamMembers";

export default function Team() {
  return (
    <>
      <Breadcrumbs>Team</Breadcrumbs>
      <section className="team">
        <div className="container">
          <TeamMembers />
        </div>
      </section>
    </>
  );
}
