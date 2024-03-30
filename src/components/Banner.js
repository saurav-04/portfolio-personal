import { useState , useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

export const Banner = ()=>{
    const [loop , setLoop] = useState(0)
    const [isDeleting , setIsDeleting]  = useState(false)
    const toRotate = ['Web-Devloper' , 'Front-End Devloper' ,'Back-End Developer']
    const [text , setText] = useState ('')
    const period = 2000;
    const [delta , setDelta] = useState(300 - Math.random()*100)
    
    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
    
      }, [text])

    const tick = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoop(loop + 1);
          setDelta(500);
        }
      }
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7} >
                        
                        <span className="tagline">Welcome to my portfolio!!!</span>
                        
                        <h1>{` Hi! I'm Saurav `} <span className="wrap">{text}</span></h1>
                        
                        <p>
                            Hey there! 👋 I'm Saurav, a passionate Full Stack Developer with a knack for crafting seamless digital experiences. With a blend of creativity and technical expertise, I thrive on turning innovative ideas into reality.
                        </p>
                        
                        <button className="navbar-connect-button" onClick={()=> (console.log('connect'))}>
                           <span> 
                              Let's Connect!! 
                              <ArrowRightCircle size={25}/>
                           </span>
                        </button>

                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="headerImage"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}