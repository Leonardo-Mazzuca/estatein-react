import styled from "styled-components";

const Wrapper = styled.div`

    display: flex;
    align-items: center;
    position: relative;
    height: auto;
    padding: ${props => props.setPadding || "2rem"};
    flex-direction: ${props => props.setFlexDirection || "column"};
    gap: 2em;
    width: 100%;
    background : ${props => props.setBackGround || "auto"};
  

    @media(max-width: 762px) {
        flex-direction: column;
        padding: 5px;
    }

`;

const ContainerItem = ({
    children, 
    setPadding ,
    setFlexDirection,
    setFlexDirectionResponsive,
    setBackGround,className
    }) => {

    return ( 
        <Wrapper 
        setPadding = {setPadding} 
        setFlexDirection = {setFlexDirection}
        setFlexDirectionResponsive = {setFlexDirectionResponsive} 
        setBackGround = {setBackGround}
        className = {className}
        >
            {children}
        </Wrapper>
    );

}

export default ContainerItem;