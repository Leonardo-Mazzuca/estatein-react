import styled from "styled-components";
import ContainerItem from "../Container/Container";
import { Col, Row } from "react-bootstrap";


const P = styled.p`

    color: var(--Absolute-White);
    font-size: 18px;
    font-weight: 500;
`;

const icons = [
    '/imgs/icons/facebook-a.png',
    '/imgs/icons/linkedin-a.png',
    '/imgs/icons/twitter-a.png',
    '/imgs/icons/youtube-a.png',

];

const FooterBottom = () => {
    return (
        <ContainerItem setBackGround={"var(--Grey-10, #1A1A1A)"}>
            <Row className="d-flex w-100 justify-content-between align-items-center">
                <Col md={6} className="d-flex mx-auto gap-3 justify-content-center justify-content-md-start">
                    <P>@2023 Estatein. All Rights Reserved. </P>
                    <P>Terms & Conditions</P>
                </Col>

                <Col className="d-flex justify-content-center justify-content-md-end" md={6}>
                    {icons.map((icon, index) => (
                        <a key={index} href="#">
                            <img src={icon} alt={`Icone de rede social ${index + 1}`} />
                        </a>
                    ))}
                </Col>
            </Row>
        </ContainerItem>
    );
};


export default FooterBottom;