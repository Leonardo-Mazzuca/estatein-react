import styled from "styled-components";
import ContainerItem from "../../GlobalComponents/Container/Container"
import TopTemplate from "../../GlobalComponents/TopTemplate/TopTemplate";
import PricingItemsComponent from "./PricingItems";

const NoteItem = styled.div`
    border-radius: 12px;
    border: 1px solid var(--Grey-15);
    background: var(--Grey-10);
    display: flex;
    align-items:center;
    padding: 1.5em;
    gap: 2em;
    width:95%;
`;

const LineItem = styled.div`
    width: 3px;
    height: 36px;
    background: #262626;
`;  


const PriceDetails = () => {
    return (
        <ContainerItem>
            <TopTemplate
            buttondisplay = "none"
            contentH2 = "Comprehensive Pricing Details"
            contentP = "At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision"
            />

            <NoteItem>
                <h2>Note</h2>
                <LineItem />
                <p className="m-0">The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.</p>
            </NoteItem>

            <PricingItemsComponent />

        </ContainerItem>
    )
}

export default PriceDetails;