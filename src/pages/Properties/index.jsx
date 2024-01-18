import ContainerItem from "../../components/GlobalComponents/Container/Container";
import FooterContainer from "../../components/GlobalComponents/Footer";
import FormComponent from "../../components/GlobalComponents/Form/Form";
import Header from "../../components/GlobalComponents/Header";
import HeroTemplate from "../../components/GlobalComponents/HeroTemplate/HeroTemplate";
import TopTemplate from "../../components/GlobalComponents/TopTemplate/TopTemplate";
import FeatureSectionCompound from "../../components/HomeComponents/FeatureSection";
import { cardPropertiesItem } from "./PropertiesCards";

const formRows = [
    [
      {
        id: "FirstNameControl",
        label: "First Name",
        type: "text",
        placeholder: "Enter First Name",
        feedback: "Please enter name",
        md: "3",
      },
      {
        id: "LastNameControl",
        label: "Last name",
        type: "text",
        placeholder: "Please enter name",
        feedback: "Looks good!",
        md: "3",
      },
      {
        id: "EmailControl",
        label: "Email",
        type: "email",
        placeholder: "Enter Email",
        feedback: "Please choose an Email.",
        md: "3",
      },
      {
        id: "PhoneControl",
        label: "Phone",
        type: "tel",
        placeholder: "Enter Phone",
        feedback: "Please choose a phone number.",
        md: "3",
      },
    ],
    [
      {
        id: "PreferredLocationControl",
        label: "Preferred Location",
        md: "3",
        width: "100%",
        option: "Select Location",
        options: ["São Paulo", "Belo-Horiozonte", "Rio de Janeiro"],
      },
      {
        id: "PropertyTypeControl",
        label: "Property Type",
        md: "3",
        width: "100%",
        option: "Select Property Type",
        options: ["House", "Apartament", "Trailler"],
      },
      {
        id: "NoBathroomsControl",
        label: "No. of Bathrooms",
        md: "3",
        width: "100%",
        option: "Select No. of Bathrooms",
        options: ["1", "2", "3"],
      },
      {
        id: "NoBedroomsControl",
        label: "No. of Bedrooms",
        md: "3",
        width: "100%",
        option: "Select No. of Bedrooms",
        options: ["1", "2", "3"],
      },
    ],
    [
      {
        id: "BudgetControl",
        label: "Budget",
        md: "6",
        width: "100%",
        option: "Select Budget",
        options: ["$550,000", "$600,000", "$1200,000,00"],
      },
      {
        id: "ContactMethodControl",
        label: "Preferred Contact Method",
        md: "6",
        feedback: "Please choose a Contact Method",
        inputs: [
          {
            placeholder: "Enter Your Number",
            type: "tel",
            id: "phoneSubControl",
          },
          {
            placeholder: "Enter Your Email",
            type: "email",
            id: "emailSubControl",
          },
        ],
      },
    ],
  ];


const Properties = () => {
    return (
        <>
            <Header />

            <HeroTemplate
            setH2 = "Find Your Dream Property"
            setP = "Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey "
            properties = {cardPropertiesItem}
            />

            <FeatureSectionCompound
            customCardConfig = {cardPropertiesItem}
            customH2 = {"Discover a World of Possibilities"}
            customP = {"Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home"}
            />

            <ContainerItem>
                <TopTemplate
                contentH2 = {"Let's Make it Happen"}
                contentP = {"Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."}
                buttondisplay = "none"
                />
                

                <FormComponent 
                formRows={formRows}
                />
            
            </ContainerItem>

            <FooterContainer />
            
        </>
    );
}


export default Properties;