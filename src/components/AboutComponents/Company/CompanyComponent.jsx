import styled from "styled-components";
import TopTemplate from "../../GlobalComponents/TopTemplate/TopTemplate";
import ContainerItem from "../../GlobalComponents/Container/Container";

const CompanyCardContainer = styled.div`

    display: flex;
    padding: 2em;
    align-items:center;
    justify-content:space-between;
    width: 100%;
    flex-wrap: wrap;

`;

const CustomCard = styled.div`

    display: flex;
    align-items: center;
    padding: 1em;
    flex-direction: column;
    border-radius: 12px;
    border: 1px solid var(--Grey-15);
    margin: 1rem auto;

    


`;

const CardWrapper = styled.div`

    display: flex;
    flex-direction: column;
    margin-top: 2em;
    align-items: center;
    width: 100%;

`;

const CardH2 = styled.h2`

    color: var(--Absolute-White);
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;

`;

const CardP = styled.p`

    color: var(--Grey-60, #999);
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;


`;

const MemberImgContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    
`;

const LinkTwitter = styled.a`

    cursor: pointer;
    position: absolute;
    bottom: -20px;
    border-radius: 43px;
    background: var(--Purple-60, #703BF7);
    padding: .5em 1.5em;

    &:hover {
        background: var(--Purple-80);
    }
 
`;

const MemberImg = styled.img`

    object-fit:cover;
    width: 270px;


`;

const CustomButtom = styled.a`

    display: flex;
    padding: 14px 14px 14px 24px;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    border-radius: 100px;
    border: 1px solid var(--Grey-15);
    background: var(--Grey-10);
    width: inherit;
    color: var(--Absolute-White);
    text-decoration: none;
    transition: .3s ease-in;

    p {
        margin: 0;
    }

    img {
        transition: .3s ease-in;
    }

    &:hover {
        transition: .3s ease-in;

        img {
            transform: rotate(360deg);
            transition: .3s ease-in;
        }
    }
`;

const ImgButtonContainer = styled.div`

    border-radius: 100px;
    background: var(--Purple-60, #703BF7);
    padding: .5rem;
    
`;


const cardItems = [

    {
        memberName : "Max Mitchell",
        memberPhoto : "/imgs/about/members/member-1.png",
        memberFunction : "Founder",
    },
    {
        memberName : "Max Mitchell",
        memberPhoto : "/imgs/about/members/member-2.png",
        memberFunction : "Chief Real Estate Officer",
        
    },
    {
        memberName : "Max Mitchell",
        memberPhoto : "/imgs/about/members/member-3.png",
        memberFunction : "Head of Property Management",
    },
    {
        memberName : "Max Mitchell",
        memberPhoto : "/imgs/about/members/member-4.png",
        memberFunction : "Legal Counsel",
    },

];



const CompanyComponent = () => {

    return (


        <ContainerItem>

            <TopTemplate 

                contentH2 = {"Meet the Estatein Team"}
                buttondisplay = "none"
                contentP = {"At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."}
            
            />

            <CompanyCardContainer>


                {cardItems.map((item,index)=> 

                    <CustomCard key={index} >

                        <MemberImgContainer>
                            <MemberImg 

                            src={item.memberPhoto} 
                            alt={`Imagem de ${item.memberName}`}
                          
                             />

                            <LinkTwitter href="#">
                                <img  src="/imgs/icons/twitter-icon.svg" />
                            </LinkTwitter>
                        </MemberImgContainer>

                        <CardWrapper>

                        <CardH2>
                            {item.memberName}
                        </CardH2>
                        <CardP>
                            {item.memberFunction}
                        </CardP>

                        <CustomButtom>

                             <p>Say Hello 👋</p>

                             <ImgButtonContainer>
                                <img src="/imgs/icons/send-icon.svg"/>
                             </ImgButtonContainer>

                        </CustomButtom>

                        </CardWrapper>



                    </CustomCard>

                )}

            </CompanyCardContainer>



        </ContainerItem>

    );

}

export default CompanyComponent;