import styled from "styled-components";
import { LogoText } from "../Header/HeaderNav";
import { useState } from "react";

const FooterMain = styled.section`

    display: flex;
    align-items: center;
    padding: 2rem 3.7%;
    justify-content: space-between;
    
    @media(max-width: 762px) {
        flex-direction: column;
    }
`;



const FooterLogoContainer = styled.div`

    dislay: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;

    @media(max-width: 762px) {
        width: 100%;
    }
  
`;

const FooterLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;

  
`;

const FooterInput = styled.div`
    margin-top: 2em;
    position: relative;
    margin-bottom: 2em;

  

`;

const Input = styled.input`
    display: flex;
    width: 350px;
    padding: 18px 2rem;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    border: 1px solid var(--Grey-15,);
    background: var(--Grey-08);
    z-index: 2;
    color: var(--Absolute-White);

    @media(max-width: 762px) {
        width: 100%;
    }
    

`;

const IconsInput = styled.div`

    display: ${props => props.display || "none"};
    justify-content: space-between;
    align-items: center;
    padding: 0 .5rem;
    position: absolute;
    width: 100%;
    top: 15px;
    z-index: 1;
    pointer-events: none;
    
`;

const FooterColumns = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2em;
    flex-wrap: wrap;

    @media(max-width: 762px) {
        gap: 0;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: repeat(2,auto);
        
     
       
     
        
        
        
    }
    

`;

const Column = styled.ul`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    align-self: flex-start;

    @media(max-width: 762px) {
        border: 1px solid var(--Grey-10);
        padding: 2rem;
        
        
    }

`;

const ColumnTitle = styled.h4`

    color: var(--Grey-60, #999);
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;

`;

const Link = styled.a`

    color: var(--Absolute-White, #FFF);
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

`;

const columnItens = [

    {
        title: "Home",
        links : ['Hero Section', 'Features' ,'Properties','Testimonials','FAQ’s'],
    },
    {
        title: "About Us",
        links : ['Our Story', 'Our Works' ,'How It Works','Our Team','Our Clients'],
    },
    {
        title: "Properties",
        links : ['Portfolio', 'Categories'],
    },
    {
        title: "Services",
        links : ['Valuation Mastery', 'Strategic Marketing' ,'Negotiation Wizardry','Closing Success','Property Management'],
    },
    {
        title: "Contact Us",
        links : ['Contact Form', 'Our Offices'],
    },

]


const FooterMainComponent = () => {


   const [iconsVisiblity, setIconsVisibility] = useState('flex');

   const onInputFocus = () => {
    setIconsVisibility("none");
   }

   const onInputBlur = () => {
    setIconsVisibility("flex");
   }


    return(
        <FooterMain>
            <FooterLogoContainer>
                <FooterLogo>
                    <img src="/imgs/Symbol.svg" alt="Logo da estatein"/>
                    <LogoText>Estatein</LogoText>
                </FooterLogo>

                <FooterInput>

                    <Input 
                    onBlur={onInputBlur} 
                    onFocus={onInputFocus} 
                    type="text" 
                    placeholder="Enter your email" />

                    <IconsInput display = {iconsVisiblity}>
                        <img src="/imgs/icons/email-icon.svg" alt="Icone de um email" />
                        <img src="/imgs/icons/send-icon.svg" alt="Icone de uma flecha de envio" />
                    </IconsInput>

                </FooterInput>
            </FooterLogoContainer>

            <FooterColumns>


                {columnItens.map((item,index) => 

                <Column key={index}>
                <ColumnTitle>{item.title}</ColumnTitle>
                {item.links.map((link,index) => <Link key={index} href="#">{link}</Link>)}
                </Column>

                )}


            </FooterColumns>

        </FooterMain>
    );
}


export default FooterMainComponent;