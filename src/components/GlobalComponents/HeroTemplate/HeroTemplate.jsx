
import ContainerItem from "../Container/Container";
import SearchBar from "../Searchbar/SearchBar";
import TopTemplate from "../TopTemplate/TopTemplate";

const HeroTemplate = (props) => {

    return (

    <ContainerItem
      setBackGround={
        "linear-gradient(96deg, #262626 -26.82%, rgba(38, 38, 38, 0.00) 40.46%);"
      }
    >
      <TopTemplate
        contentH2={props.setH2}
        contentP={props.setP}
        buttondisplay={"none"}
        imgDisplay="none"
      />

      <SearchBar
      searchbardisplay = {props.searchbardisplay}
      properties = {props.properties}
      />

    </ContainerItem>


    )

};

export default HeroTemplate;
