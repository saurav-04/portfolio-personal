import { Container, Row ,Col, Nav, Tab} from "react-bootstrap";

export const Projects = ()=>{
    const projects  = [
        {
            tittle:"Project1",
            description : "Description1",
            imgurl: "projImg1",
        },
        {
            tittle:"Project2",
            description : "Description2",
            imgurl: "projImg2",
        },
        {
            tittle:"Project3",
            description : "Description3",
            imgurl: "projImg3",
        },
        {
            tittle:"Project4",
            description : "Description4",
            imgurl: "projImg1",
        },
        {
            tittle:"Project5",
            description : "Description5",
            imgurl: "projImg2",
        },
        {
            tittle:"Project6",
            description : "Description6",
            imgurl: "projImg3",
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
                                        <p>{projects.tittle}</p>
                                       )
                                    })
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">{console.log(1)};</Tab.Pane>
                            <Tab.Pane eventKey="third">{console.log(1+1)};</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}