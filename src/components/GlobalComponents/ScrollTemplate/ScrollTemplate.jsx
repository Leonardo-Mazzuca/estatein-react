import styled from "styled-components";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";
import ContainerItem from "../Container/Container";
import { Col, Row } from "react-bootstrap";

const NumberText = styled.p`
  color: var(--Absolute-White);
  font-size: 20px;
  font-weight: 500;
  line-height: 150%;
  margin: 0;
  display :  ${props => props.display || "block"};

  span {
    color: var(--Grey-60);
  }

  @media(max-width: 762px) {

     display: ${props => props.displayDown762 || "none"};
    
  }
  



`;

const LineWrapper = styled.div`

  width: 100%;
  height:3px;
  background: #262626;

`;

const ScrollTemplate = ({ 
  numberCurrent, 
  numberText, 
  nextButton, 
  backButton, 
  numberTextDisplay,

  }) => {
  return (

    <ContainerItem setPadding={"0"}>

      <LineWrapper className="my-3"></LineWrapper>
        
      <Row className={`d-flex ${numberTextDisplay==='d-none' ? 'justify-content-center' : 

      'justify-content-between'} w-100`}>
      <Col className=
      {`${numberTextDisplay ? numberTextDisplay : "d-flex"} justify-content-start`} lg={6} md = {6} sm = {6}>

          <ButtonTemplate
          buttondisplay = "none"
          content = "View All"
          />

          <NumberText>
            {numberCurrent} of <span>{numberText}</span>
          </NumberText>

        </Col>



        <Col 
        className="d-flex justify-content-md-end align-items-center justify-content-between gap-3 mt-3" 
        lg={2} md = {1} sm = {6}>

          {backButton}

          <NumberText display = {"none"} displayDown762 = "block">
            {numberCurrent} of <span>{numberText}</span>
          </NumberText>

     

          {nextButton}

        </Col>
      </Row>
    </ContainerItem>
  );
};

export default ScrollTemplate;
