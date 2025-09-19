import { Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
  const projects = [
    { title: "PacMo CPU", description: "Built 16-bit CPU in C", imgUrl: projImg1 },
    { title: "Mini Shell", description: "Developed a Unix-style shell in C", imgUrl: projImg2 },
    { title: "Art Store", description: "Business Startup", imgUrl: projImg3 },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <h2 className="text-center">Projects</h2>
        <p className="text-center">Here I have some of the projects that I have done or am currently working on</p>

        <Tab.Container id="project-tabs" defaultActiveKey="tab1">
          <Nav
            variant="pills"
            className="nav-pills mb-5 justify-content-center align-items-center"
            id="pills-tab"
          >
            {projects.map((p, index) => (
              <Nav.Item key={index}>
                <Nav.Link eventKey={`tab${index + 1}`}>{p.title}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          <Tab.Content>
            {projects.map((project, index) => (
              <Tab.Pane eventKey={`tab${index + 1}`} key={index}>
                {/* Center the card in the viewport */}
                <Row className="justify-content-center">
                  <ProjectCard {...project} />
                </Row>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </Container>

      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
