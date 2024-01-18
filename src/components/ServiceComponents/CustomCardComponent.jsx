
import ContainerItem from "../GlobalComponents/Container/Container";
import TopTemplate from "../GlobalComponents/TopTemplate/TopTemplate";
import { Col, Row } from "react-bootstrap";
import { CustomCardItem } from "../AboutComponents/Values/ValuesCard";
import './index.css'

const ServicesCardComponent = (props) => {
    return (

        <ContainerItem>
            <TopTemplate 
                buttondisplay = "none"
                contentH2={props.customH2}
                contentP={props.customP}
            />


            <ContainerItem>
                <Row className="mb-1">
                    {props.cardItems[0].row1.map((item, index) => (
                        <Col className="mt-3" key={index} lg={4}>
                            <CustomCardItem {...item} />
                        </Col>
                    ))}
                </Row>

                <Row className="mb-4">

                    <Col  lg={4}>
                        <CustomCardItem {...props.cardItems[0].row2[0]} />
                    </Col>
                    
                    <Col lg={8}>
                        <CustomCardItem 
                        className = "custom-card-bg"   
                        setResponsiveHeight = "auto"
                        {...props.cardItems[0].row2[1]}
                        element = 
                        {<TopTemplate 
                            imgDisplay = {"none"}
                            buttoncontent = "Learn More"
                            buttonDisplay = "flex"
                            contentH2 = {props.cardItems[0].row2[1].title}
                            contentP = {props.cardItems[0].row2[1].desc}
                            setPadding = "0"
                            
                        />}/>

                    </Col>
                </Row>

            </ContainerItem>
        </ContainerItem>
    );
};  

export default ServicesCardComponent;