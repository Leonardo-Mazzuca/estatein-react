import FooterContainer from "../../components/GlobalComponents/Footer";
import Header from "../../components/GlobalComponents/Header";
import HeroTemplate from "../../components/GlobalComponents/HeroTemplate/HeroTemplate";
import MainFooterContainer from "../../components/GlobalComponents/MainSection/MainFooterContainer";
import ServicesCardComponent from "../../components/ServiceComponents/CustomCardComponent";
import SmartComponent from "../../components/ServiceComponents/SmartComponent";

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

const servicesCard = [

    {
        h2 : "Unlock Property Value",
        p : "Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.",
        cardItem : [

            {
                row1 : [
                        {
                            title : "Valuation Mastery",
                            text : "Discover the true worth of your property with our expert valuation services.",
                            icon : "/imgs/icons/valuation-icon.png",
                            radius : "12px"
                        },
                        {
                            title : "Strategic Marketing",
                            text : "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
                            icon : "/imgs/icons/strategic-icon.png",
                            radius : "12px"
                        },
                        {
                            title : "Negotiation Wizardry",
                            text : "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
                            icon : "/imgs/icons/data-base-icon.png",
                            radius : "12px"
                        },
                    ],
        
                row2 :[
                    {
                        title : "Closing Success",
                        text : "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
                        icon : "/imgs/icons/closing-icon.png",
                        radius : "12px"
                    },
                    {
                        radius : "12px",
                        title : "Unlock the Value of Your Property Today Learn More",
                        desc : "Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.",
                    }
                ]
        
            }
        
        
            
            
        
        ]
    },
    {
        h2 : "Effortless Property Management",
        p : "Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you",
        cardItem : [

            {
                row1 : [
                        {
                            title : "Valuation Mastery",
                            text : "Discover the true worth of your property with our expert valuation services.",
                            icon : "/imgs/icons/valuation-icon.png",
                            radius : "12px"
                        },
                        {
                            title : "Strategic Marketing",
                            text : "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
                            icon : "/imgs/icons/strategic-icon.png",
                            radius : "12px"
                        },
                        {
                            title : "Negotiation Wizardry",
                            text : "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
                            icon : "/imgs/icons/data-base-icon.png",
                            radius : "12px"
                        },
                    ],
        
                row2 :[
                    {
                        title : "Closing Success",
                        text : "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
                        icon : "/imgs/icons/closing-icon.png",
                        radius : "12px"
                    },
                    {
                        radius : "12px",
                        title : "Experience Effortless Property Management",
                        desc : "Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.",
                    }
                ]
        
            }
        
        
            
            
        
        ]
    },
    
]

const Services = () => {
    return (
        <>
            <Header />

            <HeroTemplate
            displayInput = "none"
            setH2 = "Elevate Your Real Estate Experience"
            setP = "Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
            searchbardisplay = "none"
            />  
            
            <MainFooterContainer
            cardItems = {cardItems}
            />

            {servicesCard.map((item,index)=> 
                <ServicesCardComponent 
                    key = {index}
                    customH2 = {item.h2}
                    customP = {item.p}
                    cardItems = {item.cardItem}
                />)}

            <SmartComponent
            />



            <FooterContainer />
        </>
    );
}

export default Services;