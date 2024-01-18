
import TopTemplate from "../../GlobalComponents/TopTemplate/TopTemplate";
import SwiperComponent from "../../../util/SwiperComponent";
import ContainerItem from "../../GlobalComponents/Container/Container";
import { Link } from "react-router-dom";

const cardFeatureItems = [

    {      
        cardConfig : {
            
            id : "1",
            name: 'Seaside Serenity Villa',
            image : '/imgs/Properties/propertie-1.png',
            text : 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...',
            price : '$550,000',
            features : [
    
                {
                    text :'4-Bedroom',
                    icon : '/imgs/icons/bed-icon.svg'
                },
                {
                    text : '3-Bathroom',
                    icon : '/imgs/icons/bath-icon.svg'
                },
                {
                    text :'Vila',
                    icon : '/imgs/icons/build-icon.svg'
                },
    
            
            ],
            linkDisplay : "block",
            buttonContent :
             <Link className="text-decoration-none text-light" to={"/PropertieDetails"}>
                View Property Details</Link>,
        }
        
    },
    {   
        cardConfig : {
            
            id : "2",
            name: 'Metropolitan Haven',
            image : '/imgs/Properties/propertie-2.png',
            text : 'A chic and fully-furnished 2-bedroom apartment with panoramic city views...',
            price : '$550,000',
            features : [
    
                {
                    text :'2-Bedroom',
                    icon : '/imgs/icons/bed-icon.svg'
                },
                {
                    text : '2-Bathroom',
                    icon : '/imgs/icons/bath-icon.svg'
                },
                {
                    text :'Vila',
                    icon : '/imgs/icons/build-icon.svg'
                },
    
            
            ],
            linkDisplay : "block",
            buttonContent :
            <Link className="text-decoration-none text-light" to={"/PropertieDetails"}>
               View Property Details</Link>,
        }
        
    },
    {   
        cardConfig : {

            id : "3",
            name: 'Rustic Retreat Cottage',
            image : '/imgs/Properties/propertie-3.png',
            text : 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...',
            price : '$550,000',
            features : [
    
                {
                    text :'3-Bedroom',
                    icon : '/imgs/icons/bed-icon.svg'
                },
                {
                    text : '3-Bathroom',
                    icon : '/imgs/icons/bath-icon.svg'
                },
                {
                    text :'Vila',
                    icon : '/imgs/icons/build-icon.svg'
                },
    
            
            ],
            linkDisplay : "block",
            buttonContent :
            <Link className="text-decoration-none text-light" to={"/PropertieDetails"}>
               View Property Details</Link>,
        }
        
    },
    {    
        cardConfig : {

            id : "4",
            name: 'Seaside Serenity Villa',
            image : '/imgs/Properties/propertie-1.png',
            text : 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...',
            price : '$550,000',
            features : [
    
                {
                    text :'4-Bedroom',
                    icon : '/imgs/icons/bed-icon.svg'
                },
                {
                    text : '3-Bathroom',
                    icon : '/imgs/icons/bath-icon.svg'
                },
                {
                    text :'Vila',
                    icon : '/imgs/icons/build-icon.svg'
                },
    
            
            ],
            linkDisplay : "block",
            buttonContent :
            <Link className="text-decoration-none text-light" to={"/PropertieDetails"}>
               View Property Details</Link>,
        }  
        
    },
    {   
        cardConfig : {
            id : "5",
            name: 'Metropolitan Haven',
            image : '/imgs/Properties/propertie-2.png',
            text : 'A chic and fully-furnished 2-bedroom apartment with panoramic city views...',
            price : '$550,000',
            features : [
    
                {
                    text :'2-Bedroom',
                    icon : '/imgs/icons/bed-icon.svg'
                },
                {
                    text : '2-Bathroom',
                    icon : '/imgs/icons/bath-icon.svg'
                },
                {
                    text :'Vila',
                    icon : '/imgs/icons/build-icon.svg'
                },
    
            
            ],
            linkDisplay : "block",
            buttonContent :
            <Link className="text-decoration-none text-light" to={"/PropertieDetails"}>
               View Property Details</Link>,
        }
        
    },
    {   
        cardConfig : {

            id : "6",
            name: 'Rustic Retreat Cottage',
            image : '/imgs/Properties/propertie-3.png',
            text : 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...',
            price : '$550,000',
            features : [
    
                {
                    text :'3-Bedroom',
                    icon : '/imgs/icons/bed-icon.svg'
                },
                {
                    text : '3-Bathroom',
                    icon : '/imgs/icons/bath-icon.svg'
                },
                {
                    text :'Vila',
                    icon : '/imgs/icons/build-icon.svg'
                },
    
            
            ],

            linkDisplay : "block",  
            buttonContent :
            <Link className="text-decoration-none text-light" to={"/PropertieDetails"}>
               View Property Details</Link>,
        }
        
    },


];

const FeatureSectionCompound = (props) => {
    return (

        <ContainerItem>
            <TopTemplate

                contentH2={props.customH2 || "Featured Properties"}
                contentP={props.customP || 'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'}
                buttoncontent={props.customButton || "View All Properties"}
            />

            <SwiperComponent 
            arrayItem={props.customCardConfig ? props.customCardConfig : cardFeatureItems}
            
            />

        </ContainerItem>
    );
};


export default FeatureSectionCompound;