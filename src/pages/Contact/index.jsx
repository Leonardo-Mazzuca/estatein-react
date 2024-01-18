import Locations from "../../components/ContactComponents/Locations/Locations";
import WorldComponent from "../../components/ContactComponents/World/WorldComponent";
import ContainerItem from "../../components/GlobalComponents/Container/Container";
import FooterContainer from "../../components/GlobalComponents/Footer";
import FormComponent from "../../components/GlobalComponents/Form/Form";
import Header from "../../components/GlobalComponents/Header";
import HeroTemplate from "../../components/GlobalComponents/HeroTemplate/HeroTemplate";
import MainFooterContainer from "../../components/GlobalComponents/MainSection/MainFooterContainer";
import TopTemplate from "../../components/GlobalComponents/TopTemplate/TopTemplate";

const cardItems = [

    
        {
            icon: '/imgs/icons/email-icon.png',
            text : 'info@estatein.com',
        },
        {
            icon: '/imgs/icons/tel-icon.png',
            text : '+1 (123) 456-7890',
        },
        {
            icon: '/imgs/icons/loc-icon.png',
            text : 'Main Headquarters',
        },
        {
            icon: '/imgs/icons/estatein-icon.png',
            text : 'Instagram - LinkedIn - Facebook',
        },
    

];

const formRows = [

    [
        {
        id: "FirstNameControl",
        label: "First Name",
        type: "text",
        placeholder: "Enter First Name",
        feedback: "Please enter name",
        md: "4",
        },
        {
        id: "LastNameControl",
        label: "Last name",
        type: "text",
        placeholder: "Please enter name",
        feedback: "Looks good!",
        md: "4",
        },
        {
        id: "EmailControl",
        label: "Email",
        type: "email",
        placeholder: "Enter Email",
        feedback: "Please choose an Email.",
        md: "4",
        },
    ],
    [
        {
            id: "PhoneControl",
            label: "Phone",
            type: "tel",
            placeholder: "Enter Phone",
            feedback: "Please choose a phone number.",
            md: "4",
          },
          {
            id: "InquiryTypeControl",
            label: "Inquiry Type",
            md: "4",
            width: "100%",
            option: "Select Inquiry Type",
            options: ["Online", "Presencial", "Message"],
          },
          {
            id: "NetworkTypeControl",
            label: "How Did You Hear About Us?",
            md: "4",
            width: "100%",
            option: "Select",
            options: ["Instagram", "Linkedin", "Facebook"],
          },
    ]

]

const Contact = () => {

    return (
        <>
        
        <Header 
        buttoncolor = {"var(--Purple-60)"}
        />
        <HeroTemplate 
        searchbardisplay = "none"
        setH2 = "Get in Touch with Estatein"
        setP = "Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation."
        />
        <MainFooterContainer 
        cardItems = {cardItems}
        />

        <ContainerItem>
            <TopTemplate 
            buttondisplay = "none"
            contentH2 = "Let's Connect"
            contentP = "We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need."
            />
            <FormComponent 
            formRows={formRows}
            />
        </ContainerItem>

        <Locations />
        <WorldComponent />

        <FooterContainer />
        
        </>


    );

}

export default Contact;