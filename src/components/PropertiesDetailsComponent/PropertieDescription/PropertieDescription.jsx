import styled from "styled-components";
import ContainerItem from "../../GlobalComponents/Container/Container";
import { Col, Row } from "react-bootstrap";
import DescriptionCard from "./DescriptionCard";
import KeyFeaturesComponent from "./KeyFeatures";



const PropertieDescription = () => {
  return (
    <ContainerItem>

      <Row>
        <Col lg={6}>
            <DescriptionCard />
        </Col>

        <Col lg={6}>
            <KeyFeaturesComponent />
        </Col>


      </Row>
    </ContainerItem>
  );
};

export default PropertieDescription;
