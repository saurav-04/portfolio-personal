import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = ()=>{
    const responsive = {
        superLargeDesktop: {

          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skills-box">
                        <h2>
                            Skills
                        </h2>
                        <p>Duis commodo cupidatat do ut enim aliqua.<br/></p>
                        <Carousel responsive={responsive} infinite = {true} className="skill-slider">
                            <div className="item">
                                <img src={''} alt="skills-image"/>
                                <h5>HTML5/CSS3</h5>
                            </div>
                            <div className="item">
                                <img src={''} alt="skills-image"/>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={''} alt="skills-image"/>
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                                <img src={''} alt="skills-image"/>
                                <h5>Version Control</h5>
                            </div>
                            <div className="item">
                                <img src={''} alt="skills-image"/>
                                <h5>Problem-solving and Debugging</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
    
}