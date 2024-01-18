import styled from "styled-components";
import LeftSectionContainer from "./LeftSection";
import RightSectionContainer from "./RightSection";
import SubContainerComponent from "./SubContainer";
import MainFooterContainer from "./MainFooterContainer";
import ContainerItem from "../Container/Container";


const MainWrapper = styled.div`

    display: flex;
    align-items: center;
    margin-bottom: .5em;
    width: 100%;
    justify-content: space-between;


    @media (max-width: 762px) {

        flex-direction: column-reverse;

    }

`;

const cardItems = [
    {
        icon: '/imgs/house-icon.png',
        text : 'Find Your Dream Home',
    },
    {
        icon: '/imgs/cam-icon.png',
        text : 'Unlock Property Value',
    },
    {
        icon: '/imgs/build-icon.png',
        text : 'Effortless Property Management',
    },
    {
        icon: '/imgs/sun-icon.png',
        text : 'Smart Investments, Informed Decisions',
    },
];

const MainSectionCompound = (props) => {

    return (

            <ContainerItem setPadding={props.setPadding || "0"}>
                
           
            <MainWrapper>
         
                <LeftSectionContainer 
                heroTitle = {props.heroTitle} 
                heroText = {props.heroText}
                imgDisplay = {props.imgDisplay}
                buttonContainerDisplay = {props.buttonContainerDisplay}
                />

                <SubContainerComponent display={props.subContainerDisplay} />

                <RightSectionContainer

                sourceImage = {props.sourceImage}
                altImage = {props.altImage}
                paddingRight = {props.paddingRight}

                />
            </MainWrapper>

            <MainFooterContainer
            cardItems = {props.cardItems ? props.cardItems : cardItems}
            mainFooterDisplay = {props.mainFooterDisplay} />

            </ContainerItem>
            
   

    );

}


export default MainSectionCompound;
