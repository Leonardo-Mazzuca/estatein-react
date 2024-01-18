import styled from "styled-components";

const ProfileItem = styled.div`

    display: flex;
    align-items: center;
    gap: 12px;
    align-self: stretch;


`;

const ImgProfile = styled.img`
    margin-bottom: 1rem;
`;

const Cardh2 = styled.h2`
  color: var(--Absolute-White);
  font-size: ${(props) => props.fontSize || "18px"};
  font-weight: 600;
  line-height: 150%;
`;

const CardP = styled.p`
  color: ${(props) => props.textcolor || "var(--Absolute-White)"};
  font-size: ${(props) => props.fontSize || "18px"};
  font-weight: 500;
  line-height: 150%;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProfileItemComponent = (props) => {

        
        return(

        <ProfileItem>
                
        <ImgProfile src={props.profileImage} alt={`Imagem de ${props.profileName}`} />
    
        <FooterWrapper>
            <Cardh2 fontSize="20px">{props.profileName}</Cardh2>
            <CardP textcolor="var(--Grey-60)">{props.profileCountry}</CardP>
        </FooterWrapper>

        </ProfileItem>
        
    )
}

export default ProfileItemComponent;