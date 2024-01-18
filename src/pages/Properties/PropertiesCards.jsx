import { Link } from "react-router-dom";


export const cardPropertiesItem = [

    {      
        cardConfig : {
            
            id : "1",
            name: 'Seaside Serenity Villa',
            image : '/imgs/Properties/propertie-1.png',
            text : 'Wake up to the soothing melody of waves. This beachfront villa offers...',
            price : '$1,250,000',
            features : [
    
                {
                    text :'Coastal Escapes - Where Waves Beckon',
                },
            ],
            middleCardColumn : "column-reverse",

            linkDisplay : "block",
            buttonContent :<Link className="text-decoration-none text-light" to={"/PropertieDetails"}>
            View Property Details</Link>,
      
        }
        
    },
    {   
        cardConfig : {
            
            id : "2",
            name: 'Metropolitan Haven',
            image : '/imgs/Properties/propertie-2.png',
            text : 'Immerse yourself in the energy of the city. This modern apartment in the heart...',
            price : '$650,000',
            features : [
    
                {
                    text :'Urban Oasis - Life in the Heart of the City',
                },
            ],
            middleCardColumn : "column-reverse",
            linkDisplay : "block",
            buttonContent :<Link className="text-decoration-none text-light" to={"/PropertieDetails"}>
            View Property Details</Link>,
    
        }
        
    },
    {   
        cardConfig : {

            id : "3",
            name: "Countryside Charm - Escape to Nature's Embrace",
            image : '/imgs/Properties/propertie-3.png',
            text : 'Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills...',
            price : '$350,000',
            features : [
    
                {
                    text :'Coastal Escapes - Where Waves Beckon',
                },
            ],
            middleCardColumn : "column-reverse",
            linkDisplay : "block",
            buttonContent :<Link className="text-decoration-none text-light" to={"/PropertieDetails"}>
            View Property Details</Link>,

        }
        
    },


];

