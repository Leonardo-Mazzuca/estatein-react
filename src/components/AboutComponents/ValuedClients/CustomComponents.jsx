import styled from "styled-components";
import TopTemplate from "../../GlobalComponents/TopTemplate/TopTemplate";


export const MiddleContentContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    color: var(--Absolute-White);
    width: 100%;

`;

const MiddleCard = styled.div`

    display: flex;
    flex-direction: column;
    text-align: start;
    color: var(--Absolute-White);
    padding: 0 1em;
    
   
`;



const MiddleTop = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;


    p {
        margin: 0 10px;
        color: var(--Grey-60);
        font-size: 18px;
        font-weight: 500;
        line-height: 150%;
    }
`;

const BottomContent = styled.div`

    border-radius: 12px;
    border: 1px solid var(--Grey-15);
    padding: 1em;


    h2 {
        color: var(--Grey-60);
        font-size: 18px;
        font-weight: 500;
        line-height: 150%;
    }

    p {
        color: var(--Absolute-White);
        font-size: 18px;
        font-weight: 500;
        line-height: 150%;
    }

`;


export const CustomMiddleContent = (props) => {
    return (

        <>
            <MiddleCard>
                <MiddleTop>
                    <img src={props.icon} alt={props.name} />
                    <p>{props.name}</p>
                </MiddleTop>
                <p>{props.text}</p>
            </MiddleCard>
        </>

    )
}


export const CustomTopTemplate = (props) => {
    return (

        <TopTemplate

        
        contentH2 = {props.topName}
        contentP = {props.topText}
        buttoncontent = "Visit WebSite"
        setButtonLg = {6}
        setLeftLg = {6}
        imgDisplay = "none"
        setPadding = "0"
        

        />

    );
}

export const CustomBottomContent = (props) => {
    return (
        <BottomContent>
            <h2>{props.bottomTitle}</h2>
            <p>{props.bottomText}</p>
        </BottomContent>
    );
}
