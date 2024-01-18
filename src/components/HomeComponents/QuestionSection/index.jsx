
import TopTemplate from "../../GlobalComponents/TopTemplate/TopTemplate";
import SwiperComponent from "../../../util/SwiperComponent";
import ContainerItem from "../../GlobalComponents/Container/Container";
import ButtonTemplate from "../../GlobalComponents/ButtonTemplate/ButtonTemplate";


const cardItem = [


    {cardConfig : {   
        name : "How do I search for properties on Estatein?",
        text : "Learn how to use our user-friendly search tools to find properties that match your criteria.",   
    }},

    {cardConfig : {   
        name : "What documents do I need to sell my property through Estatein?",
        text : "Find out about the necessary documentation for listing your property with us.",   
    }},

    {cardConfig : {   
        name : "How can I contact an Estatein agent?",
        text : "Discover the different ways you can get in touch with our experienced agents.",
    }}

];


const QuestionSectionCompound = () => {
    return (
        <ContainerItem>
            <TopTemplate
            contentH2={"Frequently Asked Questions"}
            contentP={"Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."}
            buttoncontent={"View All FAQ’s"}
            />


            <SwiperComponent
            arrayItem={cardItem}
            

            components={
                {
                    bottom : () => 
                    <ButtonTemplate 
                    content = "Read More" 
                    />
                }
            }

            />
        </ContainerItem>
    );
}

export default QuestionSectionCompound;