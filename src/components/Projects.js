import { Container, Col, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"

export const Projects = () => {

    const projects = [
        {
          title: "Ultimate Tic Tac Toe",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];
    return (
      <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Here I have some of the projects that I have done or am currently working on</p>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                {projects.map((_, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={`tab${index + 1}`}>Tab {index + 1}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              <Tab.Content>
                {projects.map((project, index) => (
                  <Tab.Pane eventKey={`tab${index + 1}`} key={index}>
                    <Row>
                      <Col>
                        <ProjectCard {...project} />
                      </Col>
                    </Row>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
    )
}