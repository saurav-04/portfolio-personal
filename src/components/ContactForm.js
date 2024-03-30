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

    const handleSubmit = ()=>{
        
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
                        <form  onSubmit={handleSubmit}>
                            <Row>
                                <Col md={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=>{updateFromdetails('firstName',e.target.value)}}/>
                                </Col>
                                <Col md={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=>{updateFromdetails('lastName', e.target.value)}}/>
                                </Col>
                                <Col md={6} className="px-1">
                                <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e)=>{updateFromdetails('email',e.target.value)}}/>
                                </Col>
                                <Col md={6} className="px-1">
                                <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e)=>{updateFromdetails('phone',e.target.value)}}/>
                                </Col>
                                <Col>
                                   <textarea row={6} value={formDetails.message} placeholder="Message" onChange={(e)=>{updateFromdetails('phone',e.target.value)}}/>
                                   <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col>
                                      <p className={status.success === true ? "success" : "danger"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}