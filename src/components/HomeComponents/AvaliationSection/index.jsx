
import TopTemplate from "../../GlobalComponents/TopTemplate/TopTemplate";
import SwiperComponent from "../../../util/SwiperComponent";
import StarContainerComponent from "./StarContainer";
import ProfileItemComponent from "./ProfileItemComponent";
import ContainerItem from "../../GlobalComponents/Container/Container";

const cardAvaliationItems = [
  {
    cardConfig: {
      id: "1",
      name: "Exceptional Service!",
      text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      profileImage: "/imgs/Profile/profile-1.svg",
      profileName: "Wade Warren",
      profileCountry: "USA, California",
    },
  },

  {
    cardConfig: {
      id: "2",
      name: "Efficient and Reliable",
      text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      profileImage: "/imgs/Profile/profile-2.svg",
      profileName: "Emelie Thomson",
      profileCountry: "USA, Florida",
    },
  },

  {
    cardConfig: {
      id: "3",
      name: "Trusted Advisors",
      text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      profileImage: "/imgs/Profile/profile-3.svg",
      profileName: "John Mans",
      profileCountry: "USA, Nevada",
    },
  },
];


const AvaliationSectionCompound = () => {
  return (
    
    <ContainerItem>
      <TopTemplate
        contentH2={"What Our Clients Say"}
        contentP={
          "Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
        }
        buttoncontent={"View All Testimonials"}
      />

      <SwiperComponent
        arrayItem={cardAvaliationItems}
        components={{
          top: ()=> <StarContainerComponent />,
          bottom: (item) => <ProfileItemComponent {...item} />,
        }}
      ></SwiperComponent>


    </ContainerItem>
  );
};

export default AvaliationSectionCompound;
