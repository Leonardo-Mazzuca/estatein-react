import styled from "styled-components";
import ContainerItem from "../../GlobalComponents/Container/Container";
import TopTemplate from "../../GlobalComponents/TopTemplate/TopTemplate";
import ButtonTemplate from "../../GlobalComponents/ButtonTemplate/ButtonTemplate";
import CardTemplate from "../../GlobalComponents/CardTemplate/Card";


const ButtonContainer = styled.div`

    display: flex;
    gap: .5em;
    align-items: center;
    align-self: flex-start;
    border-radius: 12px;
    background: var(--Grey-10, #1A1A1A);
    padding: .5em;

`;

const cardItens = [

    {   
        id : "1",
        name : "123 Estatein Plaza, City Center, Metropolis",
        text : "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
        features : [

            {
                text :'info@estatein.com',
                icon : '/imgs/icons/email-white-icon.png'
            },
            {
                text : '+1 (123) 456-7890',
                icon : '/imgs/icons/tel-white-icon.png'
            },
            {
                text :'Metropolis',
                icon : '/imgs/icons/loc-white-icon.png'
            },

        ],
        buttonContent : "Get Direction",
        extraTitle : "Main Headquarters"

    },

    {
        id : "2",
        name : "123 Estatein Plaza, City Center, Metropolis",
        text : "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
        features : [

            {
                text :'info@estatein.com',
                icon : '/imgs/icons/email-white-icon.png'
            },
            {
                text : '+1 (123) 456-7890',
                icon : '/imgs/icons/tel-white-icon.png'
            },
            {
                text :'Metropolis',
                icon : '/imgs/icons/loc-white-icon.png'
            },

        ],
        buttonContent : "Get Direction",
        extraTitle : "Main Headquarters"

    },

]

const buttonItens = ['All','Regional','International'];

const Locations = () => {

    return (
        <ContainerItem>
            <TopTemplate 
            contentH2 = {"Discover Our Office Locations"}
            contentP = {"Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you"}
            buttondisplay = "none"
            />

            <ContainerItem>
                <ButtonContainer>
                    {buttonItens.map((button,index) => 
                    <ButtonTemplate
                    key = {index} 
                    content = {button} 
                    buttonwidth = "150px"
                    />)}
                </ButtonContainer>
            </ContainerItem>

            <ContainerItem setFlexDirection={"row"}>
                {cardItens.map((item,index) => 
                <CardTemplate
                key={index}
                cardConfig={item}
                 />
                )}
            </ContainerItem>

        </ContainerItem>
    )

}

export default Locations;