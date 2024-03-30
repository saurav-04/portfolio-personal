import { Col } from "react-bootstrap"

export const ProjectsCards = ({tittle,description,imgurl}) =>{
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgurl} alt="projImg"/>
                <div className="proj-txtx">
                    <h4>{tittle}</h4>
                    <span>{description}</span>
                </div>
            </div>
        
        </Col>
    )
}