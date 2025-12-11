import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mirou from "../../Assets/Projects/mirou.PNG";
import doc_lab from "../../Assets/Projects/doc_lab.PNG";
import reweb from "../../Assets/Projects/reweb.PNG";
import ecommerce from "../../Assets/Projects/ecommerce.PNG";
import waslaya from "../../Assets/Projects/waslaya.png"
import agroX from "../../Assets/Projects/agroX.png"

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
              imgPath={agroX}
              isBlog={false}
              title="agroX"
              description="Ai model that predict hybridization between plants"
              ghLink="https://github.com/islamouahab/agroX_Hack"
              demoLink="https://agrox-hack.onrender.com/"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mirou}
              isBlog={false}
              title="Dr.mirou"
              description="Personal Healthcare Chat assistant with AI made in a Hackathon that helps you diagnose your sickness with given symptoms , rich with features like image recognition"
              ghLink="https://mirou.netlify.app"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doc_lab}
              isBlog={false}
              title="Doctor/lab dashboard"
              description="a website for doctors/laboritories for managing online appointments , sending results online , linked with a mobile app for patients to pick appointements and recieve its results"
              ghLink="https://github.com/islamouahab/Doctor-s-patients-appointment-management"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reweb}
              isBlog={false}
              title="real estate selling/renting"
              description="Online website linking real estates owners with buyers , including list filtering based on location , realtime chat with the owner ...."
              ghLink="https://github.com/islamouahab/real-estate-using-django"
                           
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="ecommerce website"
              description="ecommerce webiste for products listing upcomming features are online payment , admin dashboard....."
              ghLink="https://clothecommerce.netlify.app"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={waslaya}
              isBlog={false}
              title="waslaya"
              description="public transport project for governement that shows buses locations in real time"
              ghLink="https://github.com/islamouahab/waslaya-2.0"
              demoLink="https://waslaya-2-0.onrender.com/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

