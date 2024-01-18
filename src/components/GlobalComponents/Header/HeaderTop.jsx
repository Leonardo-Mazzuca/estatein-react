import styled from "styled-components";

const HeaderTop = styled.div`

    display: flex;
    padding: 5px 10px;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-bottom: 1px solid var(--Grey-15);
   
 



`;

const HeaderTopTextContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin : 0 auto;
    padding-left: 3em;
    width: 100%;
    
    @media(max-width: 762px){
        padding-left: 0;
        font-size: 14px;
    }

`;

const HeaderTopText = styled.p`

        color: var(--Absolute-White);
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        line-height: 150%; 
        align-self : center;
        margin: 0;
    
   

`;



const HeaderTopLink = styled.a`

    color: var(--Absolute-White);
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 150%; 
    text-decoration-line: underline;
    cursor: pointer;

    &:hover {
        
    color: var(--Grey-60);

    }
    

`;

const ImgHeaderTop = styled.img`

    display: flex;
    padding: 4px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 24px;
    height: 24px;


`;

const HeaderTopCompound = () => {
    return (

        <HeaderTop className="header-top">

            <HeaderTopTextContainer>
                <HeaderTopText>✨Discover Your Dream Property with Estatein</HeaderTopText>
                <HeaderTopLink>Learn More</HeaderTopLink>
            </HeaderTopTextContainer>

            <ImgHeaderTop src="/imgs/Button.png" alt="Imagem de um botão" />

        </HeaderTop>

    );
}

export default HeaderTopCompound;