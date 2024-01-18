
import TopTemplate from "../../GlobalComponents/TopTemplate/TopTemplate";
import SwiperComponent from "../../../util/SwiperComponent";
import { CustomBottomContent, CustomMiddleContent, CustomTopTemplate, MiddleContentContainer } from "./CustomComponents";
import ContainerItem from "../../GlobalComponents/Container/Container";

const cardItems = [

    {cardConfig :{
        topItems : {
            topName : "ABC Corporation",
            topText : "Since 2019",
 
        },

        defaultWidth : "600px",

        middleItems : [

            {

                name : "Domain",
                text :  "Commercial Real Estate",
                icon : "/imgs/icons/domain-icon.svg"
            
            },
            {

                name : "Category",
                text :  "Luxury Home Development",
                icon : "/imgs/icons/category-icon.svg"
            
            },
        ],

        bottomItems : {
            bottomTitle : "What They Said 🤗",
            bottomText : "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
        },
        minheight : "0"
            
    }},

    {cardConfig :{
        topItems : {
            topName : "ABC Corporation",
            topText : "Since 2019",
 
        },
        defaultWidth : "600px",
        middleItems : [

            {

                name : "Domain",
                text :  "Commercial Real Estate",
                icon : "/imgs/icons/domain-icon.svg"
            
            },
            {

                name : "Category",
                text :  "Retail Space",
                icon : "/imgs/icons/category-icon.svg"
            
            },
        ], 

        bottomItems : {
            bottomTitle : "What They Said 🤗",
            bottomText : "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
        },
        minheight : "0"

    }},


];





const ValuedClientsComponent = () => {

    return (
        <ContainerItem>

            <TopTemplate 
            
                contentH2 = {"Our Valued Clients"}
                buttondisplay = "none"
                contentP = {"At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"}
            
            />

            <SwiperComponent 
            setSlidesPerView={2}
            arrayItem={cardItems}
            components={{

                top: (item) => <CustomTopTemplate {...item.topItems} />,

                middle: (middle) => (
                    <MiddleContentContainer>
                        {middle.middleItems?.map((item, index) => (
                 
                                <CustomMiddleContent key={index} {...item} />
                
                        ))}
                    </MiddleContentContainer>
                ),

                bottom : (item) => <CustomBottomContent {...item.bottomItems} />

            }}
            
            >

            </SwiperComponent>

        </ContainerItem>
    );
}

export default ValuedClientsComponent;