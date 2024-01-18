import styled from "styled-components";
import TopTemplate from "../TopTemplate/TopTemplate";
import './footer.css';
import ContainerItem from "../Container/Container";

const FooterTop = styled.section`
    
    padding: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: var(--Grey-08);
    width: 100%;
    

`;


const FooterTopComponent = () => {
    return(

        <ContainerItem className="footer-top">
            <TopTemplate
            contentH2={"Start Your Real Estate Journey Today"}
            contentP={"Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance."}
            buttoncontent={"Explore Properties"}
            buttoncolor = {"var(--Purple-60)"}
            buttondisplayDown762 = "block"
            />
        </ContainerItem>

    );
}

export default FooterTopComponent;