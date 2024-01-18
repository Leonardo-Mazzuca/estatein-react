import styled from "styled-components";
import TopTemplate from "../../GlobalComponents/TopTemplate/TopTemplate";
import CardTemplate from "../../GlobalComponents/CardTemplate/Card";
import ContainerItem from "../../GlobalComponents/Container/Container";


const NavigationCardsContainer = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 1em;
    

    .card-template {
        border-radius: 0;
        border-radius: 0px 12px 12px 12px;
        border: 1px solid #262626;
        background: linear-gradient(121deg, #703BF7 -49.01%, rgba(112, 59, 247, 0.00) 13.65%);
        border-left: 1px solid #703BF7;
        border-top: 1px solid #703BF7;
        padding: 2em;
    }
`;

const CardWrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 400px;
    margin: 1rem auto;

    @media(max-width: 762px) {
        width: 100%;
    }

    
    

`;

const H2Wrapper = styled.h2`

    color: var(--Absolute-White, #FFF);
    font-size: 20px;
    font-weight: 500;
    line-height: 1.9;
    padding-left: 10px;
    border-left: 1px solid #703BF7;
    margin: 0;

`;

const cardItems = [

        {cardConfig : {

            name : "Discover a World of Possibilities",
            text : "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
            maxheight: "200px",
            widthDown762px : "100%",
            hoverScale : "none"

        }},
        {cardConfig : {

            name : "Narrowing Down Your Choices",
            text : "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
            maxheight: "200px",
            widthDown762px : "100%",
            hoverScale : "none"

        }},
        {cardConfig : {

            name : "Personalized Guidance",
            text : "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
            maxheight: "200px",
            widthDown762px : "100%",
            hoverScale : "none"

        }},
        {cardConfig : {

            name : "See It for Yourself",
            text : "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
            maxheight: "200px",
            widthDown762px : "100%",
            hoverScale : "none"

        }},
        {cardConfig : {

            name : "Making Informed Decisions",
            text : "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
            maxheight: "200px",
            widthDown762px : "100%",
            hoverScale : "none"

        }},
        {cardConfig : {

            name : "Getting the Best Deal",
            text : "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
            maxheight: "200px",
            widthDown762px : "100%",
            hoverScale : "none"
          

        }},
]

const NavigationComponent = () => {

    return (


        <ContainerItem setFlexDirection={"column"}>

            <TopTemplate
            
            contentH2 = {"Navigating the Estatein Experience"}
            buttondisplay = "none"
            contentP = {"At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."}
            
            />

            <NavigationCardsContainer 
            className="row row-cols-lg-3 row-cols-1"
            >

                    {cardItems.map((item, index) => 

                    <CardWrapper >
                    
                        <H2Wrapper>

                            {`Step 0${index + 1}`}

                        </H2Wrapper>

                        <CardTemplate 

                        key={index} 
                        cardConfig={item.cardConfig} 
                        
                        />

                    </CardWrapper>
                    )}
                

            </NavigationCardsContainer>

        </ContainerItem>


    );

}

export default NavigationComponent;