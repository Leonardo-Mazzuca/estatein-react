import { Col, Row } from "react-bootstrap";
import ContainerItem from "../../components/GlobalComponents/Container/Container";
import FooterContainer from "../../components/GlobalComponents/Footer";
import Header from "../../components/GlobalComponents/Header";
import TopTemplate from "../../components/GlobalComponents/TopTemplate/TopTemplate";
import QuestionSectionCompound from "../../components/HomeComponents/QuestionSection";
import PropertieDescription from "../../components/PropertiesDetailsComponent/PropertieDescription/PropertieDescription";
import PropertiePhotos from "../../components/PropertiesDetailsComponent/PropertiePhotos/PropetiePhotos";
import PropertieForm from "../../components/PropertiesDetailsComponent/PropertieForm/PropertieForm";
import PriceDetails from "../../components/PropertiesDetailsComponent/PropertiesPrice/PriceDetails";



const PropertieDetails = () => {

    return (
        <>
        <Header />
        <PropertiePhotos />
        <PropertieDescription />
        <PropertieForm />
        <PriceDetails />
        <QuestionSectionCompound />
        <FooterContainer />
        </>
    )

}

export default PropertieDetails;