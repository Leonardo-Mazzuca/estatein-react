
import styled from "styled-components";
import ContainerItem from "../Container/Container";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";
import { Col, Row } from "react-bootstrap";



export const TemplateImg = styled.img`

    position: absolute;
    left: ${props => props.left || "0"};
    display: ${props => props.display || "block"};
    top : ${props => props.top || "initial"};

`;

export const TopImgIcon = (props) => {
    return <TemplateImg left = {props.left} top = {props.top} display= {props.imgDisplay} src="/imgs/stars.png" alt="Icone de estrelas"/>;
}


const TopTemplate = (props) => {
    return(
        <ContainerItem setPadding={props.setPadding}>
            
            <TopImgIcon imgDisplay = {props.imgDisplay} />

            <Row 
            className={`mt-5 d-flex w-100 justify-content-between 
            ${props.flexcolumn === true ? "flex-column" : ""}`}>

                <Col lg={props.setLeftLg ? props.setLeftLg : 10}>
                    <h2>
                        {props.contentH2}
                    </h2>
                    <p>
                        {props.contentP}
                    </p>
                </Col>

                <Col lg={props.setButtonLg ? props.setButtonLg : 2}>
                    <ButtonTemplate 
                        content = {props.buttoncontent}
                        buttoncolor = {props.buttoncolor}
                        buttondisplayDown762 = {props.buttondisplayDown762 || "none"}
                        buttondisplay = {props.buttondisplay}
                    />    
                </Col>
            </Row>

        </ContainerItem>
    ) 
}

export default TopTemplate;