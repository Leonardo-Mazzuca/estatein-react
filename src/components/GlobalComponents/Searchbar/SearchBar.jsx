import styled from "styled-components";
import SelectComponent from "./SelectContainer";
import { useState } from "react";
import Fuse from "fuse.js";
import CardTemplate from "../CardTemplate/Card";
import ContainerItem from "../Container/Container";

const InputWrapper = styled.div`

    display: ${props => props.display || "flex"}; 
    align-items: center;
    flex-direction: column;
    width: 100%;
    position: relative;


`;

const InputContainer = styled.div`

    
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media(max-width: 762px) {
        width: 100%;
    }


`;

const Input = styled.input`
    width: 100%;
    padding: 1.7rem;
    border-radius: 12px 12px 0px 0px;
    background: var(--Grey-08);
    box-shadow: 0px 0px 0px 10px #191919;
    border: none;
    color: var(--Absolute-White);
`;

const ButtonInput = styled.button`

    display: flex;
    padding: 1rem;
    align-items: center;
    gap: 8px;
    border-radius: 10px;
    background: var(--Purple-60);
    border: none;
    color: var(--Absolute-White);
    position: absolute;
    right: 10px;
`;






const SearchBar = (props) => {
    const properties = props.properties
      ? props.properties.map((item) => item.cardConfig)
      : "";
  
    const options = {
      includeScore: true,
      keys: ["name"],
    };
  
    const fuse = new Fuse(properties, options);
  
    let [inputValue, setInputValue] = useState("");
    let [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = () => {
      const results = fuse.search(inputValue);
      setSearchResults(results.map((result) => result.item));
    };
  
    const handleInputChange = (e) => {
        inputValue = e.target.value;
        setInputValue(inputValue);
        if(!inputValue) {
            setSearchResults([]);
        }
    };
  
    return (
      <InputWrapper display={props.searchbardisplay}>
        <InputContainer>
          <Input
            placeholder="Search For A Property"
            onChange={handleInputChange}
          />
          <ButtonInput onClick={handleSearch}>
            <i className="bi bi-search"></i> Find Property
          </ButtonInput>
        </InputContainer>
  
        <SelectComponent />
  
        <ContainerItem setFlexDirection={"row"}>
          {searchResults.map((r, index) => (
            <CardTemplate setWidth = "420px" key={index} cardConfig={r} />
          ))}
        </ContainerItem>
      </InputWrapper>
    );
  };
  
  export default SearchBar;