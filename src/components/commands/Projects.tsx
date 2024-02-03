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

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4", "5", "6"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Tmux Minimal Status",
    desc: "A Tmux status line theme that is minimal, informative and easy to customize.",
    url: "https://github.com/niksingh710/minimal-tmux-status",
  },
  {
    id: 2,
    title: "The cli setup",
    desc: "Personal Cli configs to make my life easier. You can use it too!",
    url: "https://github.com/niksingh710/cli",
  },
  {
    id: 3,
    title: "The cli Editor Nvim",
    desc: "The configuration for my favorite editor Neovim. It's fast and easy to use.",
    url: "https://github.com/niksingh710/nvim",
  },
  {
    id: 4,
    title: "basic-battery-stat",
    desc: "Linux utility to report battery status and connected mobile device battery",
    url: "https://github.com/niksingh710/basic-battery-stat",
  },
  {
    id: 5,
    title: "Center align",
    desc: "Linux utility to center any pattern in terminal",
    url: "https://github.com/niksingh710/center-align",
  },
  {
    id: 6,
    title: "Github ..... ",
    desc: "Check out more here... there are alot",
    url: "https://github.com/niksingh710?tab=repositories&type=source",
  },
];

export default Projects;
