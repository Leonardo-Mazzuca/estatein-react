import styled from "styled-components";



const MainFooterWrapper = styled.div`

    display : ${props => props.display || "block"};
    @media(max-width: 762px){
        padding: 1.5em;
        border-radius: 8px;
    }

    width: 100%;
`;

const MainFooter = styled.section`

    display: flex;
    padding: 16px;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border: 1px solid var(--Grey-15);
    background: var(--Grey-08);
    box-shadow: 0px 0px 10px #191919;
    flex-wrap: wrap;

    @media(max-width: 762px){
        border-radius: 8px;
    }

`;



const CardFooter = styled.div`

    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-radius: 12px;
    border: 1px solid var(--Grey-15);
    background: var(--Grey-10);
    flex: 1 0 0;
    justify-content: space-between;
    min-height: 270px;
    text-align: center;
    position: relative;
    

`;

const CardImgContainer = styled.div`

    display: flex;
    padding: 10px;
    align-items: center;
    gap: 10px;
    border-radius: 100px;

    
`;

const CardImg = styled.img`



`;

const CardText = styled.p`

    color: var(--Absolute-White);
    text-align: center;

`;

const ArrowIcon  = styled.img`


    position: absolute;
    right: 20px;
    top: 20px;
    width: 18px;
    height: 18px;

`;

const MainFooterContainer = (props) => {
    return (

        <MainFooterWrapper display = {props.mainFooterDisplay}>
            <MainFooter >

                {props.cardItems.map((item,index) => 
                <CardFooter key={index}>

                    <ArrowIcon src="/imgs/arrow-icon.svg" />
                    <CardImgContainer>
                        <CardImg src= {item.icon} alt={`Imagem de um icone: ${item.nome}`} />
                    </CardImgContainer>

                    <CardText>
                        {item.text}
                    </CardText>
                
                </CardFooter>)}

            </MainFooter>
        </MainFooterWrapper>


    );
}

export default MainFooterContainer;