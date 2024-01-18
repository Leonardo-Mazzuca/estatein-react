import styled from "styled-components";
import HeaderTopCompound from "./HeaderTop";
import './header.css';
import HeaderNavCompound from "./HeaderNav";



const HeaderContainer = styled.header`

    width : 100%:



`;

const Header = (props) => {
    return (

    
        <HeaderContainer>
            <HeaderTopCompound />
            <HeaderNavCompound buttoncolor = {props.buttoncolor} />
        </HeaderContainer>
    )
}


export default Header;