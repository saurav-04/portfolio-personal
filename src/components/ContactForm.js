import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import contactImage from '../assets/img/contact-img.svg'

export const ContactForm = ()=>{

    const formInitialDetails = {
            firstName : '',
            lastName :'',
            email : '',
            phone : '',
            message : '',
        }

    const [formDetails , setFormDetails] = useState(formInitialDetails)
    const [buttonText , setButtonText] = useState('Send')
    const [status , setStatus] = useState ({})

    const updateFromdetails = (category,value)=>{
        return(
            setFormDetails({
                ...formDetails,
                [category] : value
            })
        )
    }


    return (
        <section className="contact" id="connnect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                       <img src={contactImage} alt="contactIamge"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get in touch</h2>
                        <form>
                            <Row>
                                <Col md={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="Firstname" onChange={(e)=>{updateFromdetails('firstName',e.target.value)}}/>
                                </Col>
                                <Col md={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="Lastname" onChange={(e)=>{updateFromdetails('lastName', e.target.value)}}/>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}