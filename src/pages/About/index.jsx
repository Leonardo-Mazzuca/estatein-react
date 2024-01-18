import AchievementsComponent from "../../components/AboutComponents/Achiviments/AchievementsComponent";
import CompanyComponent from "../../components/AboutComponents/Company/CompanyComponent";
import NavigationComponent from "../../components/AboutComponents/Navigation/NavigationCompound";
import ValuedClientsComponent from "../../components/AboutComponents/ValuedClients/ValuedClients";
import ValuesComponent from "../../components/AboutComponents/Values/ValuesCompound";
import FooterContainer from "../../components/GlobalComponents/Footer";
import Header from "../../components/GlobalComponents/Header";
import MainSectionCompound from "../../components/GlobalComponents/MainSection";



const About = () => {
    return (

        <>
            <Header />

                <MainSectionCompound 
                subContainerDisplay = "none" 
                heroTitle = "Our Journey"
                heroText = "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."
                buttonContainerDisplay = "none"
                sourceImage = "/imgs/about/about-image.png"
                altImage = "Imagem de uma casa na mão de uma pessoa"
                mainFooterDisplay = {"none"}
                setPadding = "2rem 2rem 0 0"

                />

                <ValuesComponent />
                <AchievementsComponent />
                <NavigationComponent />
                <CompanyComponent />
                <ValuedClientsComponent />



            <FooterContainer />
        </>
    );
}

export default About;