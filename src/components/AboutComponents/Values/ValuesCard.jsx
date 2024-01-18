import styled from "styled-components";


const ValuesCardsContainer = styled.div`

    border-radius: 12px;
    border: 1px solid var(--Grey-15);
    background: var(--Grey-08);
    box-shadow: 0px 0px 0px 10px #191919;
    padding: 2em;
    max-width: ${props => props.setMaxwidth || "60%"};
    margin-left: 1em;

    @media(max-width: 762px) {
        max-width: 100%;
    }
    
    
`;

const cardItem = [

    {
        title : "Trust",
        text : "Trust is the cornerstone of every successful real estate transaction.",
        icon : "/imgs/icons/icon-star-purple.png"
    },
    {
        title : "Excellence",
        text : "We set the bar high for ourselves. From the properties we list to the services we provide.",
        icon : "/imgs/icons/icon-hat-purple.png"
    },
    {
        title : "Client-Centric",
        text : "Your dreams and needs are at the center of our universe. We listen, understand.",
        icon : "/imgs/icons/icon-pet-purple.png"
    },
    {
        title : "Our Commitment",
        text : "We are dedicated to providing you with the highest level of service, professionalism, and support.",
        icon : "/imgs/icons/icon-star-purple.png"
    },
    

]

const CustomCard = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border: 1px solid var(--Grey-10);
    padding: 2rem;
    border-radius : ${props => props.radius || "0"};
    height: ${props => props.setNormalHeight || "320px"};

    @media(max-width: 762px) {
        height: ${props => props.setResponsiveHeight || "normal"};
    }
    


`;


const IconContainer = styled.div`

    display: flex;
    align-items: center;
    gap: 1em;
    margin-bottom: 1em;

    h2 {
        color: var(--Absolute-White, #FFF);
        font-size: 20px;
        font-weight: 600;
    }

`;

export const CustomCardItem = (props) => {
    return (
    <CustomCard 
    className={props.className} 
    radius = {props.radius} 
    key={props.index}
    setResponsiveHeight = {props.setResponsiveHeight}
    setNormalHeight = {props.setNormalHeight}
    >

        {props.element ? props.element : <IconContainer>
            <img src = {props.icon} alt={props.title}/>
            <h2>{props.title}</h2>
        </IconContainer>}

        <div>
            <p>{props.text}</p>
        </div>



    </CustomCard>
    );
}

const ValuesCardsComponent = (props) => {
    return (

        <ValuesCardsContainer 
        setMaxwidth = {props.setMaxwidth}
        className="row row-cols-1 row-cols-lg-2 row-cols-md-2">

            {cardItem.map((item,index) => 
            <CustomCardItem 
            {...item} {...index}
            />
             )}
            
        </ValuesCardsContainer>
    )
}

export default ValuesCardsComponent;