import useFetch from "../../hooks/useFetch";
import classes from "./TeamMembers.module.css";

interface ITeam {
  avatar: string;
  name: string;
  designation: string;
  description: string;
  social: {
    twitter: string;
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}

interface ITeams extends Array<ITeam> {}

export default function TeamMembers() {
  const team = useFetch<ITeams>("/data/team.json", [
    {
      avatar: "",
      name: "",
      designation: "",
      description: "",
      social: {
        twitter: "",
        facebook: "",
        instagram: "",
        linkedin: "",
      },
    },
  ]);
  console.log(team);
  return (
    <div className="row">
      {team.map((data) => {
        return (
          <div className="col-lg-6">
            <div className={`${classes.team_member} d-flex align-items-start`}>
              <div className={`${classes.member_pic}`}>
                <img src={data.avatar} className="img-fluid" alt="" />
              </div>
              <div className={`${classes.member_info}`}>
                <h4>{data.name}</h4>
                <span>{data.designation}</span>
                <p>{data.description}</p>
                <div className={`${classes.member_social}`}>
                  <a
                    href={data.social.twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a
                    href={data.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a
                    href={data.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a
                    href={data.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
