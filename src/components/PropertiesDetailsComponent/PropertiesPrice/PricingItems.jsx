import styled from "styled-components";
import ContainerItem from "../../GlobalComponents/Container/Container";
import { Col, Row } from "react-bootstrap";
import TopTemplate from "../../GlobalComponents/TopTemplate/TopTemplate";

const priceRows = [
    
    {
        title: "Additional Fees",

        items: [

            [
                {
                    title: "Property Transfer Tax",
                    amount: "$25,000",
                    detail: "Based on the sale price and local regulations",
                  },
                  {
                    title: "Legal Fees",
                    amount: "$3,000",
                    detail: "Approximate cost for legal services, including title transfer",
                  },
            ],

            [
                {
                    title: "Home Inspection",
                    amount: "$500",
                    detail: "Recommended for due diligence",
                  },
                  {
                    title: "Property Insurance",
                    amount: "$1,200",
                    detail: "Annual cost for comprehensive property insurance",
                  },
            ],

            [
                {
                    title: "Mortgage Fees",
                    amount: "Varies",
                    detail: "If applicable, consult with your lender for specific details",
                },
            ],

       
        ],
    },
    {
        title: "Monthly Costs",

        items: [

            [
                {
                    title: "Property Taxes",
                    amount: "$1,250",
                    detail: "Approximate monthly property tax based on the sale price and local rates",
                    lg : 12
                  },
            ],

            [
                {
                    title: "Homeowners' Association Fee",
                    amount: "$300",
                    detail: "Monthly fee for common area maintenance and security",
                  },

            ],


       
        ],
    },

    {
        title: "Total Initial Costs",

        items: [

            [
                {
                    title: "Listing Price",
                    amount: "$1,250,000",
                  },
                  {
                    title: "Additional Fees",
                    amount: "$29,700",
                    detail: "Property transfer tax, legal fees, inspection, insurance",
                  },
            ],

            [
                {
                    title: "Down Payment",
                    amount: "$250,000",
                    detail: "20%",
                  },
                  {
                    title: "Mortgage Amount",
                    amount: "$1,000,000",
                    detail: "If applicable",
                  },
            ],

        ],
    },

    {
        title: "Monthly Expenses",

        items: [

            [
                {
                    title: "Property Taxes",
                    amount: "$1,250",
                  },
                  {
                    title: "Homeowners' Association Fee",
                    amount: "$300",
                  },
            ],

            [
                {
                    title: "Mortgage Payment",
                    amount: "Varies based on terms and interest rate",
                    detail: "If applicable",
                  },
                  {
                    title: "Property Insurance",
                    amount: "$100",
                    detail: "Approximate monthly cost",
                  },
            ],

        ],
    },


];

const CardPricing = styled.div`
  border-radius: 12px;
  border: 1px solid var(--Grey-15);
  display: flex;
  flex-direction: column;
  padding: 1.5em;
  margin: 3rem 0;

  &:first-child {
    margin: 0;
  }

  h2 {
    font-size: 24px;
  }
`;

const LineItem = styled.div`
  background: #262626;
  width: 100%;
  height: 3px;
  margin: 2rem 0;
`;

const Detail = styled.p`
  border-radius: 28px;
  border: 1px solid var(--Grey-15, #262626);
  background: var(--Grey-10, #1a1a1a);
  padding: 0.7em;
  margin-left: 20px;
`;

const PricingItemsComponent = () => {
  return (
    <ContainerItem>
      <Row className="w-100 d-flex align-itens-start justify-content-between">
        <Col className="text-start" lg={2}>
          <p>Listing Price</p>
          <h2>$1,250,000</h2>
        </Col>

        <Col lg={10}>
          {priceRows.map((row, index) => (

            <CardPricing key={index}>
              <TopTemplate
                setPadding="0 0 1rem 0"
                contentH2={row.title}
                imgDisplay="none"
                buttoncontent="Learn More"
              />

              {row.items.map((itemGroup, groupIndex) => (

            <div key={groupIndex}>
                <LineItem />
                <Row>
                {itemGroup.map((item, index) => (
                    <Col lg= {item.lg ? item.lg : 6} key={index} className="text-start">
                    <p>{item.title}</p>
                    <div className="d-flex align-items-center">
                    <h2>{item.amount}</h2>
                    {item.detail && <Detail>{item.detail}</Detail>}
                    </div>
                    </Col>
                ))}
                </Row>
            </div>

            ))}

            </CardPricing>
          ))}
        </Col>
      </Row>
    </ContainerItem>
  );
};

export default PricingItemsComponent;
