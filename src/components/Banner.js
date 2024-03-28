import { Col, Container, Row } from "react-bootstrap"

export const Banner = ()=>{
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7} >
                        
                        <span className="tagline">Welcome to my portfolio!!!</span>
                        
                        <h1>{`Hi i am Saurav.js`}<span className="wrap">Web Devloper</span></h1>
                        
                        <p>Hey there! 👋 I'm Saurav, a passionate Full Stack Developer with a knack for crafting seamless digital experiences. With a blend of creativity and technical expertise, I thrive on turning innovative ideas into reality.
                        </p>
                        
                        <button className="navbar-connect-button" onClick={()=> (console.log('connect'))}>
                           <span> 
                              Let's Connect!! 
                           </span>
                        </button>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}