import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Nikhil Singh</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a System Developer</HighlightAlt> based in Greater
        Noida, India.
      </p>
      <p>
        I am passionate about writing codes and <br />
        developing system applications to solve real-life challenges. <br />I am
        also a <HighlightAlt>Linux enthusiast</HighlightAlt> and{" "}
        <HighlightAlt>Open Source Contributor</HighlightAlt>. <br />
        Vim is my favorite text editor.
      </p>
      <p>
        Languages and Tools: <br />
        <HighlightSpan>
          {" "}
          Rust, C, Python, Shell Scripting, Go, Java, Docker, Git, Linux.
        </HighlightSpan>{" "}
        <br />
        <HighlightSpan> Html, Js, Css (Svelete).</HighlightSpan>
      </p>
    </AboutWrapper>
  );
};

export default About;
