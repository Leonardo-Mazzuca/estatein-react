import styled from "styled-components";


const RightSection = styled.div`


    overflow : hidden;
    align-self: stretch;
    padding-right: ${props => props.paddingRight || "auto"};

    @media (max-width: 762px) {

        padding: 1em;
  
      

    }
    
   

`;


const ImgBuild = styled.img`

    width : 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 762px) {

       border-radius: 8px;
       border: 1px solid #dedede;
    
      

    }
    

`;




const RightSectionContainer = (props) => {

    return (
        <RightSection paddingRight = {props.paddingRight}>
            <ImgBuild 
            src={props.sourceImage || "/imgs/main-img.png"} 
            alt={props.altImage || "Imagem de um prédio de vidro"}/>
        </RightSection>
    )

}

export default RightSectionContainer;