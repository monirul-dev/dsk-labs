import AboutInfo from "../components/aboutinfo/AboutInfo";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import Skills from "../components/skills/Skills";
import TeamMembers from "../components/teammembers/TeamMembers";

export default function About() {
  return (
    <>
      <Breadcrumbs>About</Breadcrumbs>
      <AboutInfo />
      <TeamMembers />
      <Skills />
    </>
  );
}
