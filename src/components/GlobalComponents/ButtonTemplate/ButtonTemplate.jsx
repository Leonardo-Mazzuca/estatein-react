import styled from "styled-components";
import { lighten } from 'polished';


const Button = styled.button`
    text-align: center;
    border-radius: 10px;
    border: 1px solid var(--Grey-15);
    background: ${props => props.buttoncolor || "var(--Grey-10)"};
    color: var(--Absolute-White);
    width: ${props => props.buttonwidth || "100%"};
    padding: 1em;
    cursor: pointer;
    display: ${props => props.display || "block"};

    &:hover, &:focus {
        background-color: ${lighten(0.20, "#703BF7")};
      }
    

    @media(max-width: 762px) {
        display: ${props => props.displayDown762 || "block"};
        width: 100%;

    }

`;





const ButtonTemplate = (props) => {
    return <Button 
    buttoncolor = {props.buttoncolor}
    buttonwidth = {props.buttonwidth}
    display = {props.buttondisplay}
    displayDown762 = {props.buttondisplayDown762}
    >

        {props.content}

    </Button>;
}

export default ButtonTemplate;