import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";

const ulItens = [
  {
    title: 'Home',
    link: "/",
  },
  {
    title: 'About Us',
    link: "/About",
  },
  {
    title: 'Properties',
    link: "/Properties",
  },
  {
    title: 'Services',
    link: "/Services",
  },
];

const HeaderNav = styled.nav`
  display: flex;
  padding: 20px 24px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background: var(--Grey-10);
`;

const ImgContainer = styled.div`
  display: flex;
  width: 160px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const LogoText = styled.p`
  color: var(--Absolute-White);
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 0;
`;

const HeaderNavCompound = (props) => {
  const location = useLocation();

  return (
    <HeaderNav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <ImgContainer>
            <img src="/imgs/Symbol.svg" alt="Imagem da logo da Estatein" />
            <LogoText>Estatein</LogoText>
          </ImgContainer>
        </Link>

        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars text-light"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex align-items-center gap-3 mt-auto mx-auto">
            {ulItens.map((item, index) => (
              <Link
                className={`header-link ${location.pathname === item.link ? 'active' : ''}`}
                key={index}
                to={item.link}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="navbar-nav">
            <Link to={"/Contact"} className="text-decoration-none">
              <ButtonTemplate 
              buttoncolor = {props.buttoncolor}
              content="Contact Us" />
            </Link>
          </div>
        </div>
      </div>
    </HeaderNav>
  );
};

export default HeaderNavCompound;
