import styled from "styled-components";


const SubContainer = styled.div`

    display: ${props => props.display || "flex"};
    align-items: flex-start;
    width: 129px;
    height: 129px;
    position: relative;
    bottom: 120px;
    margin-bottom: 1em;

    @media(max-width: 762px) {
       right: 0;
       width: 100%;
       height: 0;
    }
    

`;

const ImgSubContainer = styled.img`

 
    object-fit: cover;

  

`;

const SubContainerComponent = ({display}) => {
    return (
        <SubContainer display = {display}>
            <ImgSubContainer src="/imgs/sub-container.png" alt="Imagem das competências da Estatein" />
        </SubContainer>
    );
}

export default SubContainerComponent;