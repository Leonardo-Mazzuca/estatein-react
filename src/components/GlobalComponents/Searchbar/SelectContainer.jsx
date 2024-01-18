import styled from "styled-components";


const SelectContainer = styled.div`

    display: flex;
    padding: 10px;
    align-items: center;
    gap: 1em;
    border-radius: 12px;
    background: var(--Grey-10, #1A1A1A);
    flex-wrap: wrap; 
    

`;

export const SelectItem = styled.select`

    display: flex;
    padding: 1.3rem;
    width: ${props => props.width || "200px"};
    align-items: center;
    gap: 2rem;
    margin: 0 auto;
    border-radius: 12px;
    border: 1px solid var(--Grey-15);
    background: var(--Grey-08);
    color: var(--Absolute-White);
    font-family:  'Urbanist', 'FontAwesome';

    @media(max-width: 762px) {
        width: 100%;
    }
      
   

`;



const selectItems = [
    {

        option : (<option value="" disabled selected>
                 &#xf3c5; 
                 Location  
        </option> ),
        
      

    },
    {

        option : (<option value="" disabled selected>
                &#xf015;
                Property Type
        </option> ),


    },
    {

        option : (<option value="" disabled selected>
                  &#xf0d6;
                  Pricing Range  
        </option> )

    },
    {

        option : (<option value="" disabled selected>
                &#xf1b2;
                Property Size  
        </option> )

    },
    {

        option : (<option value="" disabled selected>
                 &#xf133;
                 Build Year  
        </option> )

    },
];



const SelectComponent = (props) => {
    return (
        <SelectContainer>
            {selectItems.map(item => 
            <SelectItem width={props.selectWidth}>
              
                {item.option}

              
            </SelectItem>
            
            )}
        </SelectContainer>
    );
}

export default SelectComponent;