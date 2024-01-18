import styled from "styled-components";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";

const Card = styled.div`
  display: flex;
  padding: 1.5em;
  flex-direction: column;
  gap: 30px;
  border-radius: 12px;
  border: 1px solid var(--Grey-15);
  background: var(--Grey-08);
  margin: 0 auto;
  width : ${props => props.setWidth || "auto"};
  align-items: stretch;
`;

const CardTop = styled.div`
  width: 100%;
`;

const ImgCard = styled.img`
  height: 250px;
  width: inherit;
  min-width: 250px;
  border-radius: 10px;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  color: var(--Absolute-White);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

const CardExtraTitle = styled.h4`
  color: var(--Absolute-White);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

const CardText = styled.p`

    color: var(--Grey-60);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;

    a {
        color: var(--Absolute-White);
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        text-decoration-line: underline;
        display = ${(props) => props.display || "none"}
    }

`;

const CardAddittions = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 1rem;
`;

const FeatureItem = styled.div`
  display: flex;
  padding: .5em;
  height:40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 28px;
  border: 1px solid var(--Grey-15);
  background: var(--Grey-10);
  color: var(--Absolute-White);

  p {
    margin: 0;
    font-size: 12px;
  }
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  align-self: stretch;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--Grey-60);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }

  h3 {
    color: var(--Absolute-White);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }
`;

const MiddleContainer = styled.div`

  display: flex;
  flex-direction: ${props => props.middleCardColumn || "column"};
  justify-content: space-between;
  align-items: flex-start;
  
`;

const MiddleText = styled.div`
  display: flex;
  flex-direction: column;
  height:150px;
  justify-content: space-between;
  

`

const CardTemplate = ({ cardConfig = {}, topContent, middleContent, bottomContent,setWidth}) => {
    return (

      <Card setWidth = {setWidth} className="card-template">

        <CardTop>

          {cardConfig.image ? (
            <ImgCard src={cardConfig.image} alt={`Imagem de ${cardConfig.name}`} />
          ) : (

            topContent ? topContent(cardConfig) : topContent ? topContent : ""

          )}

        </CardTop>
            
          <MiddleContainer middleCardColumn = {cardConfig.middleCardColumn}>

      
          {middleContent ? middleContent (cardConfig) : middleContent ? middleContent : (

            <MiddleText>
          
          <CardExtraTitle>{cardConfig.extraTitle}</CardExtraTitle>
          <CardTitle>{cardConfig.name}</CardTitle>
  
          <CardText>
            {cardConfig.text}
            {cardConfig.linkDisplay &&
            <a display={cardConfig.linkDisplay} href="#">
            Read More
            </a>
            }
            
          </CardText>

             </MiddleText>
          )}
          {cardConfig.features && (
            <CardAddittions>
              {cardConfig.features.map((feature, index) => (
                <FeatureItem key={index}>
                  {feature.icon && <img src={feature.icon} alt={`Icon for ${feature.text}`} />}
                  <p>{feature.text}</p>
                </FeatureItem>
              ))}
            </CardAddittions>
          )} 
          
        </MiddleContainer>

          <CardFooter>
            {cardConfig.price && (
              <PriceContainer>
                <h2>Price</h2>
                <h3>{cardConfig.price}</h3>
              </PriceContainer>
            )}
  
            {
            cardConfig.buttonContent ? (

              <ButtonTemplate 
              content = {cardConfig.buttonContent} 
              buttoncolor = {cardConfig.buttoncolor || "#703BF7"} />
              
            ) : 
            (

              bottomContent ? bottomContent(cardConfig) : bottomContent
            )}

          </CardFooter>
      </Card>
    );
  };
  
export default CardTemplate;
  



