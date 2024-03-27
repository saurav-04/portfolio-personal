import { useState,useEffect } from "react";
import { Nav,Navbar,Container } from "react-bootstrap";

export const NavBar = () =>{
    const [activeLink,setActiveLink] = useState('home')
    const [scroll, setScroll] = useState(false)

    useEffect (()=>{
        const onScroll = ()=>{
            if(window.scrollY > 50){
                setScroll(true)
            }else{
                setScroll(false)
            }
        }
         window.addEventListener("scroll", onScroll);

         return (window.removeEventListener("scroll" , onScroll));
    },[])

    const updateActiveLink = (value)=>{
        setActiveLink(value)
    }

    return (
        <Navbar expand="lg" className={scroll? "scroll" : ""}>
          <Container>
            <Navbar.Brand href="#home">
                <img src = {''} alt="Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span className="NavBar-toggle-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home'? "active-link" : "navbar-link"} onClick={()=>updateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink=== 'skills' ? "active-link" : "navbar-link"} onClick={()=>updateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? "active-link" : "navbar-link"} onClick={()=>updateActiveLink('projects')}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-socials">
                <div className="social-icons">
                    <a href="#" alt='' ><img src={''} alt=""/></a>
                    <a href="#" alt='' ><img src={''} alt=""/></a>
                    <a href="#" alt='' ><img src={''} alt=""/></a>
                </div>
                <button className="navbar-connect-button" onClick={()=> (console.log('connect'))}><span> Let's Connect!! </span></button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}