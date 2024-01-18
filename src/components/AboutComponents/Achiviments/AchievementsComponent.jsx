
import TopTemplate from "../../GlobalComponents/TopTemplate/TopTemplate";
import CardTemplate from "../../GlobalComponents/CardTemplate/Card";
import ContainerItem from "../../GlobalComponents/Container/Container";
import { Col, Row } from "react-bootstrap";

const cardItems = [

    {cardConfig: {
        name: "3+ Years of Excellence",
        text : "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
        maxheight : "200px",
        widthDown762px : "100%",
    }},
    {cardConfig: {
        name: "Happy Clients",
        text : "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
        maxheight : "200px",
        widthDown762px : "100%",
     
    }},
    {cardConfig: {
        name: "Industry Recognition",
        text : "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
        maxheight : "200px",
        widthDown762px : "100%",

    }},

];

const AchievementsComponent = () => {
    return (

        <ContainerItem>
            <TopTemplate
             contentH2 = {"Our Achievements"} 
             contentP = {"Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."}
             buttondisplay = "none"
             />

            <ContainerItem>

                <Row>
                    {cardItems.map((item,index) => 
                    <Col lg={4} className="mt-3">
                        <CardTemplate cardConfig={item.cardConfig} key={index} />
                    </Col>
                )}
                </Row>


            </ContainerItem>

        </ContainerItem>
        
    )
}

export default AchievementsComponent;