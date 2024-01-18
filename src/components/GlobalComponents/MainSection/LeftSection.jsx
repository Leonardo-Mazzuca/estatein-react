import styled from "styled-components";
import { TopImgIcon } from "../TopTemplate/TopTemplate";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";


const LeftSection = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
    padding-left:4.5%;
    position: relative;
    margin-top: 2rem;
    background-color: var(--Grey-08);

    @media(max-width: 762px){
        padding-right: 4.5%;
    }
   
`;

const H2 = styled.h2`

    color: var(--Absolute-White);
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;

`;

const LeftText = styled.p`

    color: var(--Grey-40);
    font-family: Urbanist;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    max-width: 755px;
    margin-right: 1em;

`;

const ButtonContainer = styled.div`

    display: ${props => props.display || "flex"};
    align-items: center;
    gap: 16px;
    align-self: stretch;

    
  @media (max-width: 762px) {
    flex-direction: column;
  }


`;

const Button = styled.a`

    display: flex;
    padding: 18px 20px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 10px;
    background-color : ${props => props.bgcolor || 'transparent'};
    border: 1px solid var(--Grey-15);
    color: var(--Absolute-White, #FFF);
    font-family: Urbanist;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    text-decoration: none;
  

    @media (max-width: 762px) {
        width: 100%;
    }





`;

const cardText = [
    {
        title : '200+',
        description : 'Happy Customers',
    },
    {
        title : '10k+',
        description : 'Properties For Clients',
    },
    {
        title : '16+',
        description : 'Years of Experience',
    },
];

const CardsContainer = styled.div`
  display: ${props => props.display || "flex"};
  align-items: flex-start;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 762px) {

    width: 100%;
    display: ${props => props.display || "grid"};
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto 1fr;
    

   }

`;



const Card = styled.div`
  display: flex;
  padding: 6px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px; 
  border-radius: 12px;
  border: 1px solid var(--Grey-15);
  background: var(--Grey-10);
  max-height: 120px;


   
  @media (max-width: 762px) {
        width: 100%;

        &:nth-child(3){
            grid-column: span 2;
        }

   }


  
 
`;

const CardH2 = styled.h2`

    color: var(--Absolute-White, #FFF);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;

`;

const CardP = styled.p`

    color: var(--Grey-60, #999);
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;

`;



const LeftSectionContainer = (props) => {

    return (

        <LeftSection>
           <TopImgIcon left = {"35px"} imgDisplay = {props.imgDisplay} top = "-30px"/>

            <H2>
            {props.heroTitle || "Discover Your Dream Property with Estatein"}
            </H2>

            <LeftText>
            {props.heroText || "Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams."}
            </LeftText>

            <ButtonContainer display = {props.buttonContainerDisplay}>
                <ButtonTemplate content = "Learn More" buttonwidth = {"200px"} />
                <ButtonTemplate
                content = "Browse Properties" 
                buttoncolor = "var(--Purple-60)" 
                buttonwidth = {"260px"}/>
            </ButtonContainer>

            <CardsContainer display = {props.cardContainerDisplay}>
                    {cardText.map(card => 
                    <Card key={card.title}>
                        <CardH2>{card.title}</CardH2>
                        <CardP>{card.description}</CardP>
                    </Card>)
                    }
            </CardsContainer>


            

        </LeftSection>




    );
}

export default LeftSectionContainer;