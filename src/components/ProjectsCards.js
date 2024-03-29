import { Col } from "react-bootstrap"

export const ProjectsCards = ({tittle,description,imgurl}) =>{
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbox">
                <img src={imgurl} alt="projImg"/>
                <div className="proj-txt">
                    <h4>{tittle}</h4>
                    <span>{description}</span>
                </div>
            </div>
        
        </Col>
    )
}