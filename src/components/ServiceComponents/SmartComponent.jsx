import { Col, Row } from "react-bootstrap";
import ContainerItem from "../GlobalComponents/Container/Container"
import TopTemplate from "../GlobalComponents/TopTemplate/TopTemplate";
import ValuesCardsComponent, { CustomCardItem } from "../AboutComponents/Values/ValuesCard";






const SmartComponent = () => {
    return (

        <ContainerItem>

            <Row>

                <Col lg = {4} className="d-flex flex-column">
                    <TopTemplate 
                    contentH2 = {"Smart Investments, Informed Decisions"}
                    contentP = {"Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions."}
                    buttondisplay={"none"}
                    buttonDisplayUpper762px="none"
                    setPadding = "2rem 2rem 0 2rem"
                    setButtonLg = {0}
                    setLeftLg= {12}
                    />

                    <CustomCardItem 
                     className = "custom-card-bg" 
                     setNormalHeight = "auto"
                     radius = "12px"
                     element = 

                     {<TopTemplate 
                         imgDisplay = {"none"}
                         buttoncontent = "Learn More"
                         contentH2 = {"Unlock Your Investment Potential"}
                         contentP = {"Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."}
                         setPadding = "0"
                         flexcolumn = {true}
                         setLeftLg = {12}
                         setButtonLg = {12}
               
                     />}
                    
                    />
                
                </Col>

                <Col className="d-flex align-items-center" lg={8}>
                        <ValuesCardsComponent
                        setMaxwidth = {"95%"}
                        setCardHeight = "300px"
                        />
                </Col>





            </Row>

            

        </ContainerItem>
    )
}


export default SmartComponent;