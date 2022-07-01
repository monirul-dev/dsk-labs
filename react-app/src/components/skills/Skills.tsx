import { useRef } from "react";
import { ProgressBar } from "react-bootstrap";
import { Waypoint } from "react-waypoint";
import useFetch from "../../hooks/useFetch";
import classes from "./Skills.module.css";

interface ISkill {
  skill: string;
  progress: string;
}

interface ISkills extends Array<ISkill> {}

export default function Skills() {
  const progressRef = useRef<HTMLInputElement | null>(null);

  const skills = useFetch<ISkills>("/data/skills.json", [
    {
      skill: "",
      progress: "",
    },
  ]);

  function progressAnimation() {
    console.log("hi");
  }

  return (
    <section className="skills">
      <div className="container">
        <div className="section-title">
          <h2>Our Skills</h2>
          <p>Check our Our Skills</p>
        </div>
        <Waypoint onEnter={progressAnimation}>
          <div className="row skills-content">
            <div className="col-lg-6">
              <div className={classes.progress}>
                <span className={classes.skill}>
                  HTML <i className={classes.skill_val}>100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <ProgressBar ref={progressRef} now={100} />
                </div>
              </div>

              <div className={classes.progress}>
                <span className={classes.skill}>
                  CSS <i className={classes.skill_val}>90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <ProgressBar ref={progressRef} now={90} />
                </div>
              </div>

              <div className={classes.progress}>
                <span className={classes.skill}>
                  JavaScript <i className={classes.skill_val}>75%</i>
                </span>
                <div className="progress-bar-wrap">
                  <ProgressBar ref={progressRef} now={75} />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className={classes.progress}>
                <span className={classes.skill}>
                  PHP <i className={classes.skill_val}>80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <ProgressBar now={80} />
                </div>
              </div>

              <div className={classes.progress}>
                <span className={classes.skill}>
                  WordPress/CMS <i className={classes.skill_val}>90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <ProgressBar now={90} />
                </div>
              </div>

              <div className={classes.progress}>
                <span className={classes.skill}>
                  Photoshop <i className={classes.skill_val}>55%</i>
                </span>
                <div className="progress-bar-wrap">
                  <ProgressBar now={55} />
                </div>
              </div>
            </div>
          </div>
        </Waypoint>
      </div>
    </section>
  );
}
