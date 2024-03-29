import { Container, Row ,Col, Nav, Tab} from "react-bootstrap";
import { ProjectsCards } from "./ProjectsCards";
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'

export const Projects = ()=>{
    const projects  = [
        {
            tittle:"Project1",
            description : "Description1",
            imgurl: projImg1,
        },
        {
            tittle:"Project2",
            description : "Description2",
            imgurl: projImg2,
        },
        {
            tittle:"Project3",
            description : "Description3",
            imgurl: projImg3,
        },
        {
            tittle:"Project4",
            description : "Description4",
            imgurl: projImg1,
        },
        {
            tittle:"Project5",
            description : "Description5",
            imgurl: projImg2,
        },
        {
            tittle:"Project6",
            description : "Description6",
            imgurl: projImg3,
        },
    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                       <h2>Projects</h2>
                       <p>Enim officia dolore esse mollit consectetur quis veniam nulla nisi ipsum sunt.</p>
                       <Tab.Container id="projects-tabs" defaultActiveKey="first">
                       <Nav variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third"> Tab Three</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                {
                                    projects.map((projects,index) =>{
                                       return(
                                        <p>
                                            <ProjectsCards key={index} {...projects}/>
                                        </p>
                                       )
                                    })
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Lorem epsum</Tab.Pane>
                            <Tab.Pane eventKey="third">Lorem epsum</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
                <img className="background-image-right" src={colorSharp2} alt="bgImageRight"/>
            </Container>
        </section>

    )
}