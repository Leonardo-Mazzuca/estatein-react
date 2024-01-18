import LeftSectionContainer from "../../GlobalComponents/MainSection/LeftSection";
import ValuesCardsComponent from "./ValuesCard";
import ContainerItem from "../../GlobalComponents/Container/Container";

const ValuesComponent = () => {
  return (
    <ContainerItem
      setPadding={"2rem 2rem 0 0"}
      setFlexDirection={"row"}
      setFlexDirectionResponsive={"column"}
    >
      <LeftSectionContainer
        heroTitle="Our Values"
        heroText="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
        buttonContainerDisplay="none"
        cardContainerDisplay="none"
      />

      <ValuesCardsComponent />
    </ContainerItem>
  );
};

export default ValuesComponent;
