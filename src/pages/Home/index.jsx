import AvaliationSectionCompound from "../../components/HomeComponents/AvaliationSection";
import FooterContainer from "../../components/GlobalComponents/Footer";
import Header from "../../components/GlobalComponents/Header";
import FeatureSectionCompound from "../../components/HomeComponents/FeatureSection";
import MainSectionCompound from "../../components/GlobalComponents/MainSection";
import QuestionSectionCompound from "../../components/HomeComponents/QuestionSection";

const Home = () => {

    return (
        <>
            <Header />

            <MainSectionCompound 
                imgDisplay = "none"
            
            />

            <FeatureSectionCompound />
            <AvaliationSectionCompound />
            <QuestionSectionCompound />
            <FooterContainer />
        </>
    );

}



export default Home;