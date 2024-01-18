import styled from "styled-components";
import ContainerItem from "../../GlobalComponents/Container/Container"
import './index.css'
import { Col, Row } from "react-bootstrap";
import TopTemplate from "../../GlobalComponents/TopTemplate/TopTemplate";


const SuperCard = styled.div`

    padding: 3rem;
    width: 95%;
`;

const ImageCard = styled.img`


    max-width: 100%;
    height: auto; 
    object-fit: cover;
    

`;


const WorldComponent = () => {
    return (
        <ContainerItem>

            <SuperCard className="super-card">
                <Row className="d-flex flex-column gap-3">

                    <Row className="d-flex w-100">
                        <Col className="d-flex flex-column gap-3" lg={6} sm={6}>
                            <ImageCard src="/imgs/Contact/escritory.png" />
                            <ImageCard src="/imgs/Contact/cowork.png" />
                        </Col>
                        <Col className="d-flex flex-column gap-3"  lg={6} sm={6}>
                            <ImageCard src="/imgs/Contact/people-1.png" />
                            <ImageCard src="/imgs/Contact/people-2.png" />
                        </Col>
                    </Row>
                    <Row className="d-flex w-100">
                        <Col lg={6} >
                        <TopTemplate 
                            buttondisplay = "none"
                            contentH2 = {"Explore Estatein's World"}
                            contentP = {"Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better."}
                        />
                        </Col>
                        <Col className="d-flex flex-column gap-3" lg={6}>
                        <ImageCard src="/imgs/Contact/handshake.png" />
                        </Col>
                    </Row>
                </Row> 
            </SuperCard>

        </ContainerItem>
    )
}

export default WorldComponent;