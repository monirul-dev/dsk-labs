import { useRef } from "react";
import { ProgressBar } from "react-bootstrap";
import { Waypoint } from "react-waypoint";
import useFetch from "../../hooks/useFetch";
import classes from "./Skills.module.css";

interface ISkill {
  id: string;
  skill: string;
  progress: string;
}

interface ISkills extends Array<ISkill> {}

export default function Skills() {
  const progressRef = useRef<HTMLInputElement | null>(null);

  const skills = useFetch<ISkills>("/data/skills.json", [
    {
      id: "",
      skill: "",
      progress: "",
    },
  ]);

  function progressAnimation() {
    console.log("hi");
  }
  console.log("skills: ", skills);

  return (
    <section className="skills">
      <div className="container">
        <div className="section-title">
          <h2>Our Skills</h2>
          <p>Check our Our Skills</p>
        </div>
        <Waypoint onEnter={progressAnimation}>
          <div className="row skills-content">
            {skills.map((data) => {
              return (
                <div className={`${classes.progress} col-lg-6`} key={data.id}>
                  <span className={classes.skill}>
                    {data.skill}
                    <i className={classes.skill_val}>{data.progress}</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <ProgressBar
                      ref={progressRef}
                      now={parseInt(data.progress)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Waypoint>
      </div>
    </section>
  );
}
