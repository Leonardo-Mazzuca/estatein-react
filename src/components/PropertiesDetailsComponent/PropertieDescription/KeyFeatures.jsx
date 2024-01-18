import styled from "styled-components";


const KeyItem = styled.div`

    border-left: 1px solid var(--Purple-60);
    background: linear-gradient(90deg, #1A1A1A 0%, rgba(26, 26, 26, 0.00) 100%);
    display: flex;
    align-items: center;
    padding: 2em;




`;

const keyItems = [

    'Expansive oceanfront terrace for outdoor entertaining',
    'Gourmet kitchen with top-of-the-line appliances',
    'Private beach access for morning strolls and sunset views',
    'Master suite with a spa-inspired bathroom and ocean-facing balcony',
    'Private garage and ample storage space',
    

];


const KeyFeaturesComponent = () => {
    return (

        <div className="d-flex gap-2 flex-column">

            {keyItems.map((item,index)=>
            
            <KeyItem key={index} >
                <img src="/imgs/icons/lighting-icon.svg"/>
                <p className="my-0 mx-2">{item}</p>
            </KeyItem>

            )}

        </div>

    )
}

export default KeyFeaturesComponent;