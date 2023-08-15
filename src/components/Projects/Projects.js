import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import taskify from "../../Assets/Projects/taskify.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import Sorting from "../../Assets/Projects/Sorting.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              TechStack="Technologies - ReactJs"
              description="
Create an engaging personal portfolio website using React. Showcase skills, projects, and achievements through dynamic and responsive design. Utilize React components for seamless navigation and efficient data presentation. Incorporate animations for visual appeal, ensuring an impressive user experience."
              ghLink="https://github.com/punyakrit/Portfolio"
              demoLink="https://portfolio-punyakrit.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sorting}
              isBlog={false}
              title="Sorting Visualizer"
              TechStack="Technologies - Html, JavaScript"
              description="Experience sorting algorithms in action on our visualizer website! Watch Bubble Sort, Selection Sort, Merge Sort, and Quick Sort elegantly transform random arrays into order. A captivating educational tool for coding enthusiasts and learners to witness chaos turning into systematic arrangement."
              ghLink="https://github.com/punyakrit/Sorting"
              demoLink="https://punyakrit.github.io/Sorting/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskify}
              isBlog={false}
              title="Taskify"
              TechStack="Technologies - Flutter, Dart, Firebase"
              description="Taskify is a powerful and intuitive Android app designed to help users manage their daily tasks and increase their productivity. With its simple yet powerful features, Taskify enables users to create, prioritize, and organize their tasks in an easy-to-use interface."
              ghLink="https://github.com/punyakrit/taskify_project"
              demoLink="https://play.google.com/store/apps/details?id=com.anoop.taskify"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
