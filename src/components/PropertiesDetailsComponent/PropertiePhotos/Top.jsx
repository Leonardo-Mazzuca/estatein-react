
import styled from "styled-components";
import ContainerItem from "../../GlobalComponents/Container/Container";
import { Col, Row } from "react-bootstrap";


const LocItem = styled.div`

    border-radius: 8px;
    border: 1px solid var(--Grey-15);
    padding: 10px;


`;

const Top = () => {
    return (
        <ContainerItem>
        
        <Row className="d-flex w-100 align-items-center justify-content-between">

            <Col lg={6}>
                <div  className = "d-flex align-items-start flex-wrap gap-5 w-100">
                    <h2 className="m-0">Seaside Serenity Villa</h2>
                    <LocItem className = "d-flex align-items-center gap-2 mb-2">
                        <img src="/imgs/icons/loc-white-icon.png" alt="Localization Icon"/>
                        <p className="m-0">Malibu, California</p>
                    </LocItem>
                </div>
            </Col>

            <Col lg={1}>
                <div className="d-flex flex-column justify-content-end w-100">
                    <p className="m-0">Price</p>
                    <h2>$1,250,000</h2>
                </div>
            </Col>


        </Row>


        </ContainerItem>
    );
}

export default Top;