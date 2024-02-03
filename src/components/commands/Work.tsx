import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Work: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "works")) {
      works.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3"]) ? (
      <Usage cmd="works" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        Personal Work Experience.
      </ProjectsIntro>
      {works.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="works" marginY />
    </div>
  );
};

const works = [
  {
    id: 1,
    title: "Intern At DECET Technology",
    desc: "Worked as an intern at DECET Technology. I was responsible for developing and maintaining the company's command line tools and linux Server. Worked on languages like go/python and Bash.",
    url: "https://drive.google.com/file/d/1p839EqAOOUJwX79ZvoXY5lnSJEhC7T9O/view?usp=sharing",
  },
  {
    id: 2,
    title: "Workshops On Linux and system Environment",
    desc: "Conducted Workshops on Linux and system Environment. The workshop was focused on the basics of Linux and its environment. The workshop was conducted for the students of the college.",
    url: "https://github.com/niksingh710/cli",
  },
  {
    id: 3,
    title: "Participated in ISRO's Geoprocesing Webinar",
    desc: "This was a Webinar conducted by ISRO. The webinar was focused on the Geoprocessing and its applications. The webinar was conducted for the students of the college.",
    url: "https://drive.google.com/file/d/1sT4ISeTwCc96_neuoqE6_RCuBh1MXY0l/view?usp=sharing",
  },
  ];

export default Work;
